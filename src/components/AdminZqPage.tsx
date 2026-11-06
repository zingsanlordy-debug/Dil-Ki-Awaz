import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  Lock,
  Trash2,
  LogOut,
  ArrowLeft,
  Search,
  Clock,
  User,
  AlertCircle,
  Loader2,
  Flag,
  Image as ImageIcon,
  Pencil
} from 'lucide-react';
import { GlobalShayariItem } from '../types/shayari';
import { ZqMomentPost } from '../types/zqMoments';
import {
  ZQ_ADMIN_PASSWORD_CORRECT,
  isZqAdminUnlocked,
  setZqAdminUnlocked,
  deleteGlobalShayariAsAdmin,
  subscribeZqMoments,
  deleteZqMomentPost
} from '../firebase';
import {
  INITIAL_APNI_SHAYARI_SEEDS,
  INITIAL_ZQ_MOMENT_SEEDS,
  getDeletedSeedIds,
  markSeedPostDeleted,
  getSeedReportCounts
} from '../data/communitySeeds';
import { formatTimeAgo } from '../utils/autoFilter';
import { LANGUAGE_TAG_LABELS, resolveShayariLanguage } from '../utils/languageDetect';

interface AdminZqPageProps {
  globalShayaris: GlobalShayariItem[];
  isLoadingGlobal: boolean;
  onDeleteLocalCopy: (id: string) => void;
  onNavigateHome: () => void;
}

export const AdminZqPage: React.FC<AdminZqPageProps> = ({
  globalShayaris,
  isLoadingGlobal,
  onDeleteLocalCopy,
  onNavigateHome
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(() => isZqAdminUnlocked());
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [activeFeedTab, setActiveFeedTab] = useState<'shayari' | 'moments'>('shayari');
  const [filterText, setFilterText] = useState('');
  const [deletingIds, setDeletingIds] = useState<Record<string, boolean>>({});
  const [liveMoments, setLiveMoments] = useState<ZqMomentPost[]>([]);
  const [isLoadingMoments, setIsLoadingMoments] = useState<boolean>(true);
  const [deletedSeedIds, setDeletedSeedIds] = useState<Record<string, boolean>>(() =>
    getDeletedSeedIds()
  );
  const [seedReportCounts] = useState<Record<string, number>>(() => getSeedReportCounts());
  const [nowTick, setNowTick] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowTick(Date.now());
    }, 30000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    setIsLoadingMoments(true);
    const unsub = subscribeZqMoments(
      (items) => {
        setLiveMoments(items);
        setIsLoadingMoments(false);
      },
      () => {
        setIsLoadingMoments(false);
      }
    );
    return () => unsub();
  }, [authenticated]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (passwordInput.trim() === ZQ_ADMIN_PASSWORD_CORRECT) {
      setZqAdminUnlocked(true);
      setAuthenticated(true);
      setPasswordInput('');
    } else {
      setLoginError('Galat Admin Password! Kripya sahi password darj karein.');
    }
  };

  const handleLogout = () => {
    setZqAdminUnlocked(false);
    setAuthenticated(false);
    setPasswordInput('');
  };

  const combinedShayaris = useMemo<GlobalShayariItem[]>(() => {
    const activeSeeds = INITIAL_APNI_SHAYARI_SEEDS.filter((s) => !deletedSeedIds[s.id]).map(
      (s) => ({
        ...s,
        reportCount: seedReportCounts[s.id] || 0
      })
    );
    const merged = [...globalShayaris, ...activeSeeds];
    merged.sort((a, b) => b.createdAtMillis - a.createdAtMillis);
    return merged;
  }, [globalShayaris, deletedSeedIds, seedReportCounts]);

  const combinedMoments = useMemo<ZqMomentPost[]>(() => {
    const activeSeeds = INITIAL_ZQ_MOMENT_SEEDS.filter((s) => !deletedSeedIds[s.id]).map(
      (s) => ({
        ...s,
        reportCount: seedReportCounts[s.id] || 0
      })
    );
    const merged = [...liveMoments, ...activeSeeds];
    merged.sort((a, b) => b.timestampMillis - a.timestampMillis);
    return merged;
  }, [liveMoments, deletedSeedIds, seedReportCounts]);

  const handleAdminDeleteShayari = async (item: GlobalShayariItem) => {
    if (deletingIds[item.id]) return;
    setActionError(null);

    if (item.isSeedPost) {
      markSeedPostDeleted(item.id);
      setDeletedSeedIds(getDeletedSeedIds());
      onDeleteLocalCopy(item.id);
      return;
    }

    setDeletingIds((prev) => ({ ...prev, [item.id]: true }));
    try {
      await deleteGlobalShayariAsAdmin(item.id, ZQ_ADMIN_PASSWORD_CORRECT);
      onDeleteLocalCopy(item.id);
    } catch {
      setActionError('Shayari delete nahi ho saki. Kripya dobara koshish karein.');
    } finally {
      setDeletingIds((prev) => {
        const next = { ...prev };
        delete next[item.id];
        return next;
      });
    }
  };

  const handleAdminDeleteMoment = async (post: ZqMomentPost) => {
    if (deletingIds[post.id]) return;
    setActionError(null);

    if (post.isSeedPost) {
      markSeedPostDeleted(post.id);
      setDeletedSeedIds(getDeletedSeedIds());
      return;
    }

    setDeletingIds((prev) => ({ ...prev, [post.id]: true }));
    try {
      await deleteZqMomentPost(post.id);
    } catch {
      setActionError('ZQ Moment post delete nahi ho saki. Kripya dobara koshish karein.');
    } finally {
      setDeletingIds((prev) => {
        const next = { ...prev };
        delete next[post.id];
        return next;
      });
    }
  };

  if (!authenticated) {
    return (
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 sm:px-6 py-12">
        <div className="bg-[#fff8f9] border-2 border-[#ffe4e8] rounded-3xl p-7 sm:p-9 shadow-sm space-y-6">
          <div className="text-center space-y-2.5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#fff0f3] border border-[#ffe4e8] flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#d94f70]" />
            </div>
            <h1 className="font-rozha text-[26px] font-bold text-[#d94f70]">
              ZQ Admin Panel (/admin-zq)
            </h1>
            <p className="text-[16px] text-slate-600 font-medium">
              Apni Shayari + ZQ Moments manage karne aur <strong>1-Report = Auto Delete</strong>{' '}
              power unlock karne ke liye password darj karein.
            </p>
          </div>

          {loginError && (
            <div
              role="alert"
              className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-700 text-[17px] font-bold flex items-center gap-2.5"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-[18px] font-bold text-slate-900 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (loginError) setLoginError(null);
                }}
                placeholder="Enter admin password..."
                autoFocus
                className="w-full min-h-[54px] bg-white border border-[#ffe4e8] rounded-2xl px-4 py-3 text-[18px] font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[54px] px-6 py-3.5 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Admin Login
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-[17px] font-bold text-slate-600 hover:text-[#d94f70] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const normalizedFilter = filterText.trim().toLowerCase();
  const filteredShayaris = normalizedFilter
    ? combinedShayaris.filter(
        (item) =>
          item.author.toLowerCase().includes(normalizedFilter) ||
          item.rawText.toLowerCase().includes(normalizedFilter) ||
          item.categoryName.toLowerCase().includes(normalizedFilter)
      )
    : combinedShayaris;

  const filteredMoments = normalizedFilter
    ? combinedMoments.filter(
        (post) =>
          post.posterName.toLowerCase().includes(normalizedFilter) ||
          post.caption.toLowerCase().includes(normalizedFilter)
      )
    : combinedMoments;

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
      {/* Top Admin Header */}
      <div className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[26px] font-bold text-[#d94f70] leading-snug">
              ZQ Auto-LIVE Moderation Console (/admin-zq)
            </h1>
          </div>
          <p className="text-[15px] text-emerald-800 font-extrabold">
            Admin Power Active: Website ke har post par aapke liye 1 Report / 1 Click = Instant Auto Delete
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-white border border-[#ffe4e8] text-[17px] font-bold text-slate-800 hover:text-[#d94f70] flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-[17px] font-bold flex items-center gap-2 cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Feed Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <button
          type="button"
          onClick={() => setActiveFeedTab('shayari')}
          className={`min-h-[54px] px-5 py-3 rounded-2xl text-[17px] font-bold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
            activeFeedTab === 'shayari'
              ? 'bg-[#d94f70] text-white border-[#d94f70]'
              : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70]'
          }`}
        >
          <Pencil className="w-5 h-5" />
          <span>Apni Shayari Likhen ({combinedShayaris.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFeedTab('moments')}
          className={`min-h-[54px] px-5 py-3 rounded-2xl text-[17px] font-bold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
            activeFeedTab === 'moments'
              ? 'bg-[#d94f70] text-white border-[#d94f70]'
              : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70]'
          }`}
        >
          <ImageIcon className="w-5 h-5" />
          <span>ZQ Moments 💗 ({combinedMoments.length})</span>
        </button>
      </div>

      {actionError && (
        <div
          role="alert"
          className="p-5 rounded-2xl bg-red-50 border border-red-300 text-red-700 text-[18px] font-bold flex items-center gap-3"
        >
          <AlertCircle className="w-6 h-6 shrink-0" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Author naam ya post text se search karein..."
          className="w-full min-h-[54px] bg-[#fff8f9] border border-[#ffe4e8] rounded-2xl pl-12 pr-4 py-3 text-[18px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
        />
      </div>

      {/* Tab 1: Apni Shayari Posts */}
      {activeFeedTab === 'shayari' ? (
        isLoadingGlobal && combinedShayaris.length === 0 ? (
          <div className="py-16 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8]">
            <Loader2 className="w-8 h-8 text-[#d94f70] animate-spin mx-auto mb-3" />
            <p className="text-[19px] font-bold text-slate-700">
              Auto-LIVE Shayaris load ho rahi hain...
            </p>
          </div>
        ) : filteredShayaris.length === 0 ? (
          <div className="py-14 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-6">
            <p className="text-[20px] font-bold text-slate-800">Koi shayari post nahi mili.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredShayaris.map((item) => {
              const lang = resolveShayariLanguage(item, item.lines, item.language || 'hindi');
              const langLabel = LANGUAGE_TAG_LABELS[lang];
              const isDeleting = Boolean(deletingIds[item.id]);

              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 flex flex-col justify-between gap-5 shadow-2xs"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-start justify-between gap-3 border-b border-[#ffe4e8] pb-3.5">
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[14px] font-bold">
                          <span className="text-[#d94f70]">{item.categoryName}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-slate-700">{langLabel}</span>
                          <span className="text-slate-300">·</span>
                          <span className="inline-flex items-center gap-1 text-red-700 font-extrabold">
                            <Flag className="w-3.5 h-3.5" />
                            <span>Reports: {item.reportCount || 0}/3</span>
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="inline-flex items-center gap-1 text-slate-500 font-semibold">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{formatTimeAgo(item.createdAtMillis, nowTick)}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[18px] font-bold text-slate-900">
                          <User className="w-4 h-4 text-[#d94f70] shrink-0" />
                          <span className="truncate">{item.author}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdminDeleteShayari(item)}
                        disabled={isDeleting}
                        className="min-h-[46px] px-4 py-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-[15px] font-bold flex items-center gap-1.5 cursor-pointer transition-colors shrink-0 disabled:opacity-50"
                      >
                        <Trash2 className="w-4 h-4 shrink-0" />
                        <span>{isDeleting ? 'Deleting...' : '1-Report Delete'}</span>
                      </button>
                    </div>

                    <div className="py-2 space-y-2 text-[18px] leading-[1.8] font-semibold text-[#000000] whitespace-pre-line break-words">
                      {item.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="text-[12px] text-slate-400 font-mono truncate border-t border-[#ffe4e8] pt-2.5">
                    ID: {item.id} · {item.isSeedPost ? 'Initial Guest Seed' : 'Live Firestore'}
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : isLoadingMoments && combinedMoments.length === 0 ? (
        <div className="py-16 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8]">
          <Loader2 className="w-8 h-8 text-[#d94f70] animate-spin mx-auto mb-3" />
          <p className="text-[19px] font-bold text-slate-700">
            ZQ Moments load ho rahe hain...
          </p>
        </div>
      ) : filteredMoments.length === 0 ? (
        <div className="py-14 text-center bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-6">
          <p className="text-[20px] font-bold text-slate-800">Koi ZQ Moment post nahi mili.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMoments.map((post) => {
            const isDeleting = Boolean(deletingIds[post.id]);
            return (
              <div
                key={post.id}
                className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-5 flex flex-col justify-between gap-4 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 border-b border-[#ffe4e8] pb-3">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[18px] font-bold text-slate-900">
                        <User className="w-4 h-4 text-[#d94f70] shrink-0" />
                        <span className="truncate">{post.posterName}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[13px] font-bold text-slate-600">
                        <span className="inline-flex items-center gap-1 text-red-700 font-extrabold">
                          <Flag className="w-3.5 h-3.5" />
                          <span>Reports: {post.reportCount || 0}/3</span>
                        </span>
                        <span>·</span>
                        <span>{formatTimeAgo(post.timestampMillis, nowTick)}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdminDeleteMoment(post)}
                      disabled={isDeleting}
                      className="min-h-[44px] px-4 py-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-[14px] font-bold flex items-center gap-1.5 cursor-pointer transition-colors shrink-0 disabled:opacity-50"
                    >
                      <Trash2 className="w-4 h-4 shrink-0" />
                      <span>{isDeleting ? 'Deleting...' : '1-Report Delete'}</span>
                    </button>
                  </div>

                  {post.caption && (
                    <p className="text-[16px] leading-[1.7] text-slate-900 font-medium whitespace-pre-line break-words">
                      {post.caption}
                    </p>
                  )}

                  {post.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {post.images.slice(0, 3).map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${post.posterName} moment ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-24 object-cover rounded-xl border border-[#ffe4e8]"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[12px] text-slate-400 font-mono truncate border-t border-[#ffe4e8] pt-2">
                  ID: {post.id} · {post.isSeedPost ? 'Initial Guest Seed' : 'Live Firestore'}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
