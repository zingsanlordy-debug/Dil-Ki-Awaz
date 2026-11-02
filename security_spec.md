# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Global Default-Deny Safety Net**: `match /{document=**} { allow read, write: if false; }` blocks all collections except `/shayaris/{shayariId}`, `/zq_moments/{momentId}`, and `/zq_moments/{momentId}/comments/{commentId}`.
2. **Shayaris Approved-Only & Report Governance Invariant**: `/shayaris/{shayariId}` only allows reading `status == 'approved'`, enforces `10`–`500` chars with rule-level anti-link and anti-phone guards, requires `createdAt == request.time` and `reportCount == 0` (when present) on `create`, permits updates ONLY via `isAdmin()` or atomic `+1` `reportCount` increment (`0 -> 1 -> 2`) wrapped in `isValidShayariDoc(incoming())` while keeping all content fields immutable, and allows deletes for verified Admin or valid `userId`-owned approved shayaris (enabling instant 3-report auto-delete).
3. **ZQ-MOMENTS Schema & Creation Invariant**: `/zq_moments/{momentId}` enforces strict `hasAll` + `hasOnly` keys (`userId`, `posterName`, `caption`, `fontStyle`, `images`, `likeCount`, `commentCount`, `timestamp`, plus optional `reportCount`), `fontStyle` in the 30-font allowlist, `images` bounded strictly between `1` and `9` items with every element validated (`15`–`120000` chars starting with `https://` or `data:image/`), `likeCount == 0`, `commentCount == 0`, `reportCount == 0` (when present), and `timestamp == request.time` on `create`.
4. **ZQ-MOMENTS Action-Based Update Invariant**: `/zq_moments/{momentId}` wraps `allow update` in `isValidZqMomentDoc(incoming())` and splits updates into strict named actions:
   - **Like Toggle Action**: `affectedKeys().hasOnly(['likeCount'])` with `incoming().likeCount == existing().likeCount + 1 || incoming().likeCount == existing().likeCount - 1` (`>= 0`).
   - **Comment Count Action**: `affectedKeys().hasOnly(['commentCount'])` with `incoming().commentCount == existing().commentCount + 1`.
   - **Report Count Action**: `affectedKeys().hasOnly(['reportCount'])` with `incoming().reportCount == existing().reportCount + 1` (or `1` if initializing on legacy doc), bounded `0..10`.
   - **Admin Escape Hatch**: Verified `isAdmin()` override.
   All core fields (`userId`, `posterName`, `caption`, `fontStyle`, `images`, `timestamp`) remain strictly immutable to public clients.
5. **ZQ-MOMENTS Comments Relational & Atomic Sync Invariant**: `/zq_moments/{momentId}/comments/{commentId}` verifies parent existence via `exists(/databases/$(database)/documents/zq_moments/$(momentId))` (Master Gate), enforces `data.momentId == momentId` and `timestamp == request.time`, forbids updates (`allow update: if false;`), and enforces atomic `commentCount` synchronization via `getAfter(...)` on `create`.
6. **Bounded Secure List Queries**: `allow list` on `/zq_moments` requires `request.query.limit <= 100 && existing().timestamp >= timestamp.value(0)` and `/zq_moments/{momentId}/comments` requires `request.query.limit <= 200 && existing().timestamp >= timestamp.value(0)` with zero `get()`/`exists()` calls inside `allow list`.

## 2. The "Dirty Dozen" Payloads (All Must Return `PERMISSION_DENIED`)
1. **Shadow Field Injection on Create (`shayaris` or `zq_moments`)**: `{ ...validMoment, "isVerified": true }`
2. **Shayari Short/Long Text or Link/Phone Bypass**: `{ ...validShayari, "text": "Visit https://spam.com or +91 98765-43210" }`
3. **Shayari Content Edit / Unapproved Read / Fake Report Jump Bypass**: `updateDoc(shayari, { text: "Hacked" })`, `updateDoc(shayari, { reportCount: 5 })`, or `getDoc(pendingShayari)`
4. **ZQ-MOMENTS Zero Photos or >9 Photos Upload**: `{ ...validMoment, "images": [] }` or `10` images
5. **ZQ-MOMENTS Poisoned Image Element at Non-Zero Index**: `{ ...validMoment, "images": ["https://ok.com/1.webp", "javascript:evil()"] }`
6. **ZQ-MOMENTS Fake Initial Likes/Comments/Reports on Create**: `{ ...validMoment, "likeCount": 500 }` or `{ ...validMoment, "reportCount": 2 }`
7. **ZQ-MOMENTS Forged Client Timestamp**: `{ ...validMoment, "timestamp": "2020-01-01T00:00:00.000Z" }`
8. **ZQ-MOMENTS Caption / Images Tampering on Update**: `updateDoc(moment, { "caption": "Hacked caption" })`
9. **ZQ-MOMENTS Arbitrary Like/Report Jump (`+100` or `-1` below zero)**: `updateDoc(moment, { "likeCount": existing.likeCount + 100 })`
10. **Orphaned Comment Without Parent Moment or Without Atomic `commentCount + 1`**: `setDoc(commentRef, validComment)` without parent or batch increment
11. **Write/Read to Blocked Collection (`/users/u1`, `/admins/a1`)**: `setDoc(doc(db, 'users', 'u_123456'), { "role": "admin" })`
12. **Unverified Admin Email Spoofing & Poisoned Document ID**: `email_verified: false` or invalid ID `'bad$id!'`

## 3. Rules Verification Suite (`firestore.rules.test.ts`)
See `firestore.rules.test.ts` for the executable verification suite asserting `PERMISSION_DENIED` across all 12 Dirty Dozen payloads and `ALLOWED` on valid `shayaris` and `zq_moments` operations.
