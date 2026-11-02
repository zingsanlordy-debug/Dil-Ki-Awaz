import React, { useState, useEffect, useMemo } from 'react';
import {
  Heart,
  Pencil,
  AlertCircle,
  Globe,
  UserCheck,
  CheckCircle2,
  Loader2,
  Check
} from 'lucide-react';
import { Shayari, GlobalShayariItem, FontStyleId } from '../types/shayari';
import { ShayariCard } from './ShayariCard';
import { PageSeoIntro } from './PageSeoIntro';
import { OriginalDeclarationBox } from './OriginalDeclarationBox';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';
import {
  validateAutoApproveShayari,
  recordSuccessfulPost,
  formatTimeAgo,
  countMeaningfulWords,
  AUTO_FILTER_MIN_WORDS,
  AUTO_FILTER_MAX_CHARS
} from '../utils/autoFilter';
import { detectShayariLanguage } from '../utils/languageDetect';
import {
  createApprovedGlobalShayari,
  deleteGlobalShayariAsAuthor,
  deleteGlobalShayariAsAdmin,
  reportGlobalShayari,
  isCallerAdminModerator,
  getOrCreateLocalUserId
} from '../firebase';
import {
  INITIAL_APNI_SHAYARI_SEEDS,
  getDeletedSeedIds,
  markSeedPostDeleted,
  getSeedReportCounts,
  reportSeedCommunityPost
} from '../data/communitySeeds';

interface PublicWallProps {
  globalShayaris: GlobalShayariItem[];
  curatedReferenceTexts?: readonly string[];
  isLoadingGlobal: boolean;
  favoritesCount: number;
  isFavorite: (id: string) => boolean;
  onSaveCustomShayari: (shayari: Shayari) => number;
  onDeleteCustomShayari: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onNavigateHome: () => void;
  onOpenFavorites: () => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
}

const SHAYARI_CATEGORIES = [
  { value: 'Love', label: 'Love (प्यार)', icon: '❤️' },
  { value: 'Sad', label: 'Sad (दर्द)', icon: '🥺' },
  { value: 'Attitude', label: 'Attitude (तेवर)', icon: '🔥' },
  { value: 'Alone', label: 'Alone (तन्हाई)', icon: '🌙' },
  { value: 'Motivational', label: 'Motivational (हौसला)', icon: '✨' },
  { value: 'Festival', label: 'Festival (त्यौहार)', icon: '🎉' },
  { value: 'Dosti', label: 'Dosti (दोस्ती)', icon: '🤝' }
] as const;

const MOOD_EMOJIS = ['❤️', '🥺', '🔥', '🌙', '✨', '🎉', '🤝', '🌹', '😊', '🙏'];

export const PublicWall: React.FC<PublicWallProps> = ({
  globalShayaris,
  curatedReferenceTexts = [],
  isLoadingGlobal,
  favoritesCount,
  isFavorite,
  onSaveCustomShayari,
  onDeleteCustomShayari,
  onToggleFavorite,
  onOpenFavorites,
  onOpenCardModal
}) => {
  const { ui, isRtl } = useGlobalLanguage();
  const writeHeading = useTranslatedText('अपनी शायरी लिखें', 'Write Your Shayari');

  const [userName, setUserName] = useState('');
  const [category, setCategory] = useState<string>('Love');
  const [shayariText, setShayariText] = useState('');
  const [moodEmoji, setMoodEmoji] = useState<string>('❤️');
  const [isOriginalDeclared, setIsOriginalDeclared] = useState(false);

  const [activeTab, setActiveTab] = useState<'mine' | 'global'>('global');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingIds, setDeletingIds] = useState<Record<string, boolean>>({});
  const [reportingIds, setReportingIds] = useState<Record<string, boolean>>({});
  const [deletedSeedIds, setDeletedSeedIds] = useState<Record<string, boolean>>(() =>
    getDeletedSeedIds()
  );
  const [seedReportCounts, setSeedReportCounts] = useState<Record<string, number>>(() =>
    getSeedReportCounts()
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [toastNotice, setToastNotice] = useState<string | null>(null);
  const [nowTick, setNowTick] = useState<number>(() => Date.now());

  const [localUserId] = useState<string>(() => getOrCreateLocalUserId());
  const adminModerator = isCallerAdminModerator();

  // Refresh "time ago" labels every 30 seconds
  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowTick(Date.now());
    }, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const showToastNotice = (msg: string) => {
    setToastNotice(msg);
    window.setTimeout(() => {
      setToastNotice((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  // Merge live Firestore Auto-LIVE shayaris with the 5 Initial Original Guest Seed Posts
  const combinedCommunityShayaris = useMemo<GlobalShayariItem[]>(() => {
    const activeSeeds = INITIAL_APNI_SHAYARI_SEEDS.filter(
      (seed) => !deletedSeedIds[seed.id]
    ).map((seed) => ({
      ...seed,
      reportCount: seedReportCounts[seed.id] || 0
    }));

    const merged = [...globalShayaris, ...activeSeeds];
    merged.sort((a, b) => b.createdAtMillis - a.createdAtMillis);
    return merged;
  }, [globalShayaris, deletedSeedIds, seedReportCounts]);

  // Build deduplication reference pool (live UGC + 5 seed posts + curated site shayaris) for >=80% similarity block
  const existingDedupePool = useMemo<string[]>(() => {
    const pool: string[] = [];
    for (const item of globalShayaris) {
      pool.push(item.rawText || item.lines.join(' '));
    }
    for (const seed of INITIAL_APNI_SHAYARI_SEEDS) {
      pool.push(seed.rawText || seed.lines.join(' '));
    }
    for (const refText of curatedReferenceTexts) {
      if (refText) pool.push(refText);
    }
    return pool;
  }, [globalShayaris, curatedReferenceTexts]);

  const myApprovedShayaris = combinedCommunityShayaris.filter(
    (item) => item.userId === localUserId
  );
  const displayedShayaris =
    activeTab === 'mine' ? myApprovedShayaris : combinedCommunityShayaris;

  const liveWordCount = countMeaningfulWords(shayariText);
  const liveCharCount = Array.from(shayariText.trim()).length;

  const handleSaveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFormError(null);
    setSuccessMessage(null);

    // RULE 1: Compulsory Original Declaration check
    if (!isOriginalDeclared) {
      setFormError(
        'Post karne se pehle "Haan, ye mera khud ka original content hai" checkbox tick karna anivarya hai.'
      );
      return;
    }

    // RULE 2: Smart Auto-Filter Before LIVE (gaali, link/phone/email, copy-paste/spam, <10 words, >=80% duplicate)
    const validation = validateAutoApproveShayari(
      shayariText,
      userName,
      existingDedupePool
    );
    if (!validation.allowed) {
      setFormError(validation.message || 'Kripya 100% original aur saaf shabdon me likhein 🙏');
      return;
    }

    const cleanText = shayariText.trim();
    const detectedLang = detectShayariLanguage(cleanText, 'hindi');
    const defaultAuthor =
      detectedLang === 'english'
        ? 'Guest Poet'
        : detectedLang === 'hinglish'
          ? 'Guest Shayar'
          : 'अतिथि शायर';
    const author = userName.trim() || defaultAuthor;
    const selectedCat =
      SHAYARI_CATEGORIES.find((c) => c.value === category) || SHAYARI_CATEGORIES[0];

    const cardTitle =
      detectedLang === 'english'
        ? `${author}'s ${selectedCat.value} Shayari ${moodEmoji}`
        : detectedLang === 'hinglish'
          ? `${author} ki ${selectedCat.value} Shayari ${moodEmoji}`
          : `${author} की ${selectedCat.value} शायरी ${moodEmoji}`;

    setIsSubmitting(true);
    try {
      const createdItem = await createApprovedGlobalShayari({
        authorName: author,
        category: selectedCat.value,
        categoryName: `${selectedCat.icon} ${selectedCat.value}`,
        categoryIcon: moodEmoji,
        moodEmoji,
        title: cardTitle,
        text: cleanText,
        language: detectedLang
      });

      recordSuccessfulPost();
      onSaveCustomShayari(createdItem);
      setShayariText('');
      setIsOriginalDeclared(false);
      setActiveTab('global');
      setSuccessMessage(
        'Aapki original shayari Auto-Filter pass karke turant LIVE ho gayi hai aur Pasandida me bhi save ho gayi hai ❤️'
      );
    } catch {
      setFormError('Shayari LIVE karte samay takniki samasya aayi. Kripya dobara koshish karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteShayari = async (item: GlobalShayariItem) => {
    if (deletingIds[item.id]) return;

    if (item.isSeedPost) {
      if (!adminModerator) return;
      markSeedPostDeleted(item.id);
      setDeletedSeedIds(getDeletedSeedIds());
      onDeleteCustomShayari(item.id);
      showToastNotice('Admin: Post deleted');
      return;
    }

    const currentVisitorId = getOrCreateLocalUserId();
    const isOwner = Boolean(currentVisitorId && item.userId === currentVisitorId);
    if (!isOwner && !adminModerator) {
      setFormError('Sirf wahi vyakti ya Admin is shayari ko delete kar sakta hai.');
      return;
    }

    setDeletingIds((prev) => ({ ...prev, [item.id]: true }));
    try {
      if (adminModerator && !isOwner) {
        await deleteGlobalShayariAsAdmin(item.id);
      } else {
        await deleteGlobalShayariAsAuthor(item.id);
      }
      onDeleteCustomShayari(item.id);
      showToastNotice('Post deleted');
    } catch {
      setFormError('Shayari delete nahi ho saki. Kripya dobara koshish karein.');
    } finally {
      setDeletingIds((prev) => {
        const next = { ...prev };
        delete next[item.id];
        return next;
      });
    }
  };

  // RULE 3: 3 Report = Instant Auto Delete (+ Admin 1 Report = Instant Auto Delete)
  const handleReportShayari = async (item: GlobalShayariItem, _reason: string) => {
    if (reportingIds[item.id]) return;

    setReportingIds((prev) => ({ ...prev, [item.id]: true }));
    try {
      if (item.isSeedPost) {
        const res = reportSeedCommunityPost(item.id, adminModerator);
        setSeedReportCounts(getSeedReportCounts());
        if (res.deleted) {
          setDeletedSeedIds(getDeletedSeedIds());
          onDeleteCustomShayari(item.id);
          showToastNotice(
            adminModerator
              ? 'Admin 1-Report Power: Post turant Auto-Delete kar di gayi!'
              : '3 Reports complete — Post turant Auto-Delete kar di gayi!'
          );
        } else {
          showToastNotice(
            `Report darj (${res.reportCount}/3) — 3 Report aate hi post turant Auto-Delete ho jayegi`
          );
        }
        return;
      }

      const res = await reportGlobalShayari(item.id);
      if (res.deleted) {
        onDeleteCustomShayari(item.id);
        showToastNotice(
          adminModerator
            ? 'Admin 1-Report Power: Post turant Auto-Delete kar di gayi!'
            : '3 Reports complete — Post turant Auto-Delete kar di gayi!'
        );
      } else {
        showToastNotice(
          `Report darj (${res.reportCount}/3) — 3 Report aate hi post turant Auto-Delete ho jayegi`
        );
      }
    } catch {
      showToastNotice('Abhi report nahi ho saki, kripya dobara koshish karein.');
    } finally {
      setReportingIds((prev) => {
        const next = { ...prev };
        delete next[item.id];
        return next;
      });
    }
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-white"
    >
      {/* Floating Report / Moderation Toast */}
      {toastNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-slate-900 text-white text-[14px] sm:text-[15px] font-bold shadow-xl flex items-center gap-2 pointer-events-none max-w-[92vw]"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">{toastNotice}</span>
        </div>
      )}

      {/* Top Page SEO Title & Soft Description Box */}
      <PageSeoIntro title={ui.writeIntroTitle} description={ui.writeIntroDesc} />

      {/* Page Heading (26px bold) */}
      <div className="text-center space-y-3 py-2">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#fff0f3] border border-[#ffe4e8] flex items-center justify-center shadow-2xs">
          <Pencil className="w-8 h-8 text-[#d94f70]" />
        </div>
        <h2 className="font-rozha text-[26px] sm:text-[32px] font-bold text-[#d94f70] leading-[1.45] break-words">
          {writeHeading} - <span className="zq-feelings-logo">ZQ FEELINGS</span>
        </h2>
        <p className="text-[15px] text-slate-600 font-semibold">
          100% Original Shayari · Smart Auto-Filter · Zero Pending · Turant Auto-LIVE
        </p>
      </div>

      {/* Main Form Card */}
      <div className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-9 shadow-sm">
        {formError && (
          <div
            role="alert"
            className="mb-6 p-5 rounded-2xl bg-red-50 border-2 border-red-300 text-red-700 text-[17px] sm:text-[18px] font-bold flex items-center gap-3 shadow-2xs"
          >
            <AlertCircle className="w-6 h-6 shrink-0 text-red-600" />
            <span>{formError}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <p className="text-[18px] leading-[1.7] font-bold">{successMessage}</p>
            </div>
            <button
              type="button"
              onClick={onOpenFavorites}
              className="min-h-[50px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[17px] font-bold cursor-pointer transition-colors shrink-0"
            >
              Pasandida ({favoritesCount}) देखें →
            </button>
          </div>
        )}

        <form onSubmit={handleSaveSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Field 1: Aapka Naam (Your Name) */}
            <div>
              <label className="block text-[20px] font-bold text-slate-900 mb-2.5">
                Aapka Naam (Your Name)
              </label>
              <input
                type="text"
                placeholder="अपना नाम लिखें..."
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (formError) setFormError(null);
                }}
                maxLength={50}
                className="w-full min-h-[54px] bg-white border border-[#ffe4e8] rounded-2xl px-4 py-3.5 text-[18px] font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
              />
            </div>

            {/* Field 2: Shayari Category */}
            <div>
              <label className="block text-[20px] font-bold text-slate-900 mb-2.5">
                Shayari Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full min-h-[54px] bg-white border border-[#ffe4e8] rounded-2xl px-4 py-3.5 text-[18px] font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#d94f70] cursor-pointer"
              >
                {SHAYARI_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.icon} {cat.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Field 3: Apni Shayari Yahan Likhein (Min 10 words, Max 500 chars) */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <label className="block text-[20px] font-bold text-slate-900">
                Apni Shayari Yahan Likhein
              </label>
              <div className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold">
                <span
                  className={
                    liveWordCount === 0
                      ? 'text-slate-500'
                      : liveWordCount < AUTO_FILTER_MIN_WORDS
                        ? 'text-amber-700'
                        : 'text-emerald-700'
                  }
                >
                  Words: {liveWordCount} (Min {AUTO_FILTER_MIN_WORDS})
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">
                  {liveCharCount}/{AUTO_FILTER_MAX_CHARS}
                </span>
              </div>
            </div>
            <textarea
              rows={4}
              placeholder="अपनी 100% मौलिक दिल छू लेने वाली शायरी यहाँ लिखें (कम से कम 10 शब्द, बिना किसी लिंक या कॉपी-पेस्ट के)..."
              value={shayariText}
              onChange={(e) => {
                setShayariText(e.target.value);
                if (formError) setFormError(null);
                if (successMessage) setSuccessMessage(null);
              }}
              maxLength={AUTO_FILTER_MAX_CHARS}
              className="w-full bg-white border border-[#ffe4e8] rounded-2xl p-5 text-[19px] leading-[1.8] font-semibold text-[#000000] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70] font-noto"
            />
          </div>

          {/* Field 4: Mood Emoji Selector */}
          <div>
            <label className="block text-[20px] font-bold text-slate-900 mb-3">
              Mood Emoji चुनें:{' '}
              <span className="text-2xl ml-1 align-middle">{moodEmoji}</span>
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {MOOD_EMOJIS.map((emoji) => {
                const isSelected = moodEmoji === emoji;
                return (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setMoodEmoji(emoji)}
                    className={`min-h-[54px] min-w-[54px] px-4 py-2.5 rounded-2xl text-2xl flex items-center justify-center transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#d94f70] border-[#d94f70] scale-105 shadow-sm'
                        : 'bg-white border-[#ffe4e8] hover:border-[#d94f70] hover:bg-[#fff0f3]'
                    }`}
                    title={`Mood ${emoji}`}
                  >
                    {emoji}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RULE 1: COMPULSORY ORIGINAL DECLARATION DIRECTLY ABOVE POST BUTTON */}
          <OriginalDeclarationBox
            id="apni-shayari-original-declaration"
            checked={isOriginalDeclared}
            onChange={(checked) => {
              setIsOriginalDeclared(checked);
              if (checked && formError) setFormError(null);
            }}
          />

          {/* Post / Submit Button (Disabled until Original Declaration is ticked) */}
          <div className="pt-1 space-y-2">
            <button
              type="submit"
              disabled={isSubmitting || !isOriginalDeclared}
              className="w-full sm:w-auto min-h-[56px] px-8 py-4 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                  <span>Auto-Filter Checking &amp; Going LIVE...</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 fill-white text-white shrink-0" />
                  <span>Post Shayari (Instant Auto-LIVE)</span>
                </>
              )}
            </button>
            {!isOriginalDeclared && (
              <p className="text-[13px] font-semibold text-slate-600">
                * पोस्ट LIVE करने के लिए ऊपर दिया गया Original Content बॉक्स टिक करना अनिवार्य है।
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Section: Community Original Shayaris with 2 Tabs */}
      <section className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#ffe4e8] pb-4">
          <h2 className="font-rozha text-[26px] font-bold text-[#d94f70] leading-[1.45] break-words py-1">
            ✍️ पाठकों की मौलिक शायरियाँ (Auto-LIVE Feed)
          </h2>
          <button
            type="button"
            onClick={onOpenFavorites}
            className="self-start sm:self-auto text-[18px] font-bold text-[#d94f70] hover:text-[#b32f4f] cursor-pointer"
          >
            सभी Pasandida ({favoritesCount}) देखें →
          </button>
        </div>

        {/* 2 Tabs: "Meri Shayari" & "Sabki Shayari (Global - Auto LIVE)" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            type="button"
            onClick={() => setActiveTab('mine')}
            className={`min-h-[56px] px-5 py-3.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center gap-2.5 ${
              activeTab === 'mine'
                ? 'btn-glossy-pink text-white border-pink-300 shadow-sm'
                : 'bg-[#fff8f9] text-slate-900 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
            }`}
          >
            <UserCheck className="w-5 h-5 shrink-0" />
            <span>Meri Shayari ({myApprovedShayaris.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('global')}
            className={`min-h-[56px] px-5 py-3.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center gap-2.5 ${
              activeTab === 'global'
                ? 'btn-glossy-pink text-white border-pink-300 shadow-sm'
                : 'bg-[#fff8f9] text-slate-900 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
            }`}
          >
            <Globe className="w-5 h-5 shrink-0" />
            <span>Sabki Shayari (Auto-LIVE) ({combinedCommunityShayaris.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        {isLoadingGlobal && combinedCommunityShayaris.length === 0 ? (
          <div className="py-14 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-6">
            <Loader2 className="w-8 h-8 text-[#d94f70] animate-spin mx-auto mb-3" />
            <p className="text-[19px] font-bold text-slate-700">
              Global Shayariyan load ho rahi hain...
            </p>
          </div>
        ) : displayedShayaris.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            {displayedShayaris.map((item) => {
              const isOwner = Boolean(localUserId && item.userId === localUserId);
              const canDelete = isOwner || adminModerator;
              return (
                <ShayariCard
                  key={item.id}
                  shayari={item}
                  isFavorite={isFavorite(item.id)}
                  onToggleFavorite={onToggleFavorite}
                  currentLanguage={item.language || 'hindi'}
                  onlyCopyAndWhatsapp={true}
                  authorDisplayName={item.author}
                  timeAgoLabel={formatTimeAgo(item.createdAtMillis, nowTick)}
                  canDelete={canDelete}
                  isDeleting={Boolean(deletingIds[item.id])}
                  showDeleteLabel={activeTab === 'mine' || adminModerator}
                  onDelete={() => handleDeleteShayari(item)}
                  isGuestUgcPost={true}
                  reportCount={item.reportCount || 0}
                  isReporting={Boolean(reportingIds[item.id])}
                  isAdminModerator={adminModerator}
                  onReportPost={(reason) => handleReportShayari(item, reason)}
                  onOpenCardModal={onOpenCardModal}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-7 space-y-2">
            <p className="text-[20px] font-bold text-slate-800">
              {activeTab === 'mine'
                ? 'Aapne abhi tak koi shayari nahi likhi hai ✍️'
                : 'Abhi koi Global Shayari nahi hai — pehli original shayari aap likhein! ❤️'}
            </p>
            <p className="text-[17px] text-slate-600">
              Upar form me kam se kam 10 shabdon me apni 100% original shayari likhkar Post karein — turant LIVE dikhegi.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
