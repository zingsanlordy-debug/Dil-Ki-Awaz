import React, { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, PlusCircle, Trash2, AlertCircle, FileText, CheckCircle2, LogOut, Clock, User } from 'lucide-react';
import { ALL_CATEGORIES_FOR_POSTING, FESTIVAL_CATEGORIES, FEELINGS_CATEGORIES } from '../data/shayariData';
import { Shayari, UserPost, BlockedLog } from '../types/shayari';
import { getBlockedLogs, clearBlockedLogs } from '../utils/autoFilter';

const ATTEMPTS_KEY = 'zq_login_attempts';
const BLOCKED_UNTIL_KEY = 'zq_login_blocked_until';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogin: (user: string, pass: string) => boolean;
  onLogout: () => void;
  onAddOfficialShayari: (shayari: Shayari) => void;
  userPosts: UserPost[];
  onDeleteUserPost: (id: string) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  isAuthenticated,
  onLogin,
  onLogout,
  onAddOfficialShayari,
  userPosts,
  onDeleteUserPost
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'post' | 'moderate' | 'logs'>('post');

  // Block timer state
  const [blockedRemainingSec, setBlockedRemainingSec] = useState<number>(0);

  // New Official Post state
  const [category, setCategory] = useState<string>('love');
  const [title, setTitle] = useState('');
  const [hindiLines, setHindiLines] = useState(['', '', '', '']);
  const [hinglishLines, setHinglishLines] = useState(['', '', '', '']);
  const [englishLines, setEnglishLines] = useState(['', '', '', '']);
  const [postSuccess, setPostSuccess] = useState(false);

  // Blocked logs
  const [logs, setLogs] = useState<BlockedLog[]>(() => getBlockedLogs());

  // Check 5-minute block status on open/render
  useEffect(() => {
    const checkBlocked = () => {
      try {
        const blockedUntilStr = localStorage.getItem(BLOCKED_UNTIL_KEY);
        if (blockedUntilStr) {
          const blockedUntil = parseInt(blockedUntilStr, 10);
          const remaining = Math.max(0, Math.ceil((blockedUntil - Date.now()) / 1000));
          setBlockedRemainingSec(remaining);
          if (remaining === 0) {
            localStorage.removeItem(BLOCKED_UNTIL_KEY);
            localStorage.removeItem(ATTEMPTS_KEY);
          }
        } else {
          setBlockedRemainingSec(0);
        }
      } catch {
        setBlockedRemainingSec(0);
      }
    };

    checkBlocked();
    const interval = setInterval(checkBlocked, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blockedRemainingSec > 0) return;

    setLoginError(null);

    // Call login verification
    const success = onLogin(username.trim(), password);

    if (success) {
      localStorage.removeItem(ATTEMPTS_KEY);
      localStorage.removeItem(BLOCKED_UNTIL_KEY);
      setUsername('');
      setPassword('');
      setLogs(getBlockedLogs());
    } else {
      // Record failed attempt
      try {
        const attempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0', 10) + 1;
        localStorage.setItem(ATTEMPTS_KEY, attempts.toString());

        if (attempts >= 3) {
          const blockDurationMs = 5 * 60 * 1000; // 5 minutes
          const blockUntil = Date.now() + blockDurationMs;
          localStorage.setItem(BLOCKED_UNTIL_KEY, blockUntil.toString());
          setBlockedRemainingSec(300);
          setLoginError('सुरक्षा ब्लॉक: लगातार 3 गलत प्रयासों के कारण लॉगिन 5 मिनट के लिए ब्लॉक कर दिया गया है।');
        } else {
          setLoginError(`गलत यूज़रनेम या पासवर्ड! (प्रयास: ${attempts}/3)`);
        }
      } catch {
        setLoginError('गलत यूज़रनेम या पासवर्ड!');
      }
    }
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const catObj = ALL_CATEGORIES_FOR_POSTING.find((c) => c.id === category) || ALL_CATEGORIES_FOR_POSTING[0];
    const isFestival = FESTIVAL_CATEGORIES.some((f) => f.id === category);

    const newOfficialShayari: Shayari = {
      id: `zq-official-${Date.now()}`,
      category: category,
      categoryType: isFestival ? 'festival' : 'feelings',
      categoryName: catObj.name,
      categoryIcon: catObj.icon,
      title: title.trim() || `${catObj.name} की खास ZQ शायरी`,
      lines: [
        hindiLines[0].trim() || 'तेरी हर मुस्कान में ज़िंदगी की सुबह होती है,',
        hindiLines[1].trim() || 'तेरे बिना हर खुशी कुछ अधूरी सी होती है।',
        hindiLines[2].trim() || 'रब से क्या मांगें अब तेरे सिवा हम,',
        hindiLines[3].trim() || 'तू मिल गई तो ज़िंदगी मुकम्मल सी होती है।'
      ],
      linesHindi: [
        hindiLines[0].trim() || 'तेरी हर मुस्कान में ज़िंदगी की सुबह होती है,',
        hindiLines[1].trim() || 'तेरे बिना हर खुशी कुछ अधूरी सी होती है।',
        hindiLines[2].trim() || 'रब से क्या मांगें अब तेरे सिवा हम,',
        hindiLines[3].trim() || 'तू मिल गई तो ज़िंदगी मुकम्मल सी होती है।'
      ],
      linesHinglish: [
        hinglishLines[0].trim() || 'Teri har muskan mein zindagi ki subah hoti hai,',
        hinglishLines[1].trim() || 'Tere bina har khushi kuch adhuri si hoti hai.',
        hinglishLines[2].trim() || 'Rab se kya maange ab tere siwa hum,',
        hinglishLines[3].trim() || 'Tu mil gayi to zindagi mukammal si hoti hai.'
      ],
      linesEnglish: [
        englishLines[0].trim() || 'In your smile lies the morning of my life,',
        englishLines[1].trim() || 'Without you every happiness feels incomplete.',
        englishLines[2].trim() || 'What else should I ask from God now,',
        englishLines[3].trim() || 'Finding you made my life truly complete.'
      ],
      tags: [catObj.name, 'OfficialZQ', 'ViralShayari', 'DilKiAwaaz'],
      author: 'ZQ-FEELINGS 👑 Official',
      isOfficial: true,
      initialLikes: 1420,
      commentsCount: 0,
      comments: []
    };

    onAddOfficialShayari(newOfficialShayari);
    setPostSuccess(true);
    setHindiLines(['', '', '', '']);
    setHinglishLines(['', '', '', '']);
    setEnglishLines(['', '', '', '']);
    setTitle('');
    setTimeout(() => setPostSuccess(false), 3000);
  };

  const handleClearLogs = () => {
    clearBlockedLogs();
    setLogs([]);
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#ffe4e8] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#ffeef2] via-white to-[#fff0f3] border-b border-[#ffe4e8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d94f70] text-white flex items-center justify-center shadow-sm">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-800">
                  {isAuthenticated ? 'ZQ Official Admin Panel' : 'ZQ Official Login'}
                </h3>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold border border-amber-200">
                  👑 Official Only
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {isAuthenticated ? 'आधिकारिक शायरी और सुरक्षा प्रबंधन' : 'सुरक्षित एडमिन क्रेडेंशियल्स दर्ज करें'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isAuthenticated ? (
          /* LOGIN FORM (Title "ZQ Official Login", Username input, Password input hidden dots, Login button, Close) */
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#fff0f3] border border-[#ffe4e8] flex items-center justify-center text-3xl shadow-xs">
                🔐
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                ZQ Official Login
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                केवल अधिकृत ZQ एडमिन के लिए। कृपया अपना Username एवं Password दर्ज करें।
              </p>
            </div>

            {blockedRemainingSec > 0 ? (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm text-center space-y-2">
                <div className="flex items-center justify-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-red-600 animate-spin" />
                  <span>3 बार गलत प्रयास! लॉगिन अस्थायी रूप से ब्लॉक है।</span>
                </div>
                <div className="text-2xl font-black text-red-600">
                  {formatCountdown(blockedRemainingSec)}
                </div>
                <p className="text-[11px] text-slate-500">
                  सुरक्षा कारणों से 5 मिनट की प्रतीक्षा अवधि समाप्त होने के बाद ही पुनः प्रयास संभव होगा।
                </p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="max-w-sm mx-auto space-y-4">
                {loginError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                {/* Username input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Username दर्ज करें"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setLoginError(null);
                      }}
                      className="w-full bg-[#fff8f9] border border-[#ffe4e8] rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                {/* Password input (type password hidden dots) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setLoginError(null);
                      }}
                      className="w-full bg-[#fff8f9] border border-[#ffe4e8] rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#d94f70] hover:bg-[#b32f4f] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* AUTHENTICATED ADMIN PANEL */
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Tabs */}
            <div className="flex items-center justify-between px-6 pt-3 border-b border-[#ffe4e8] bg-[#fff8f9]">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('post')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-t-xl transition-all cursor-pointer border-t border-x ${
                    activeTab === 'post'
                      ? 'bg-white text-[#d94f70] border-[#ffe4e8] -mb-px'
                      : 'text-slate-600 hover:text-slate-900 border-transparent'
                  }`}
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>नई ZQ शायरी पोस्ट करें</span>
                </button>

                <button
                  onClick={() => setActiveTab('moderate')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-t-xl transition-all cursor-pointer border-t border-x ${
                    activeTab === 'moderate'
                      ? 'bg-white text-[#d94f70] border-[#ffe4e8] -mb-px'
                      : 'text-slate-600 hover:text-slate-900 border-transparent'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>पब्लिक पोस्ट मॉडरेशन ({userPosts.length})</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('logs');
                    setLogs(getBlockedLogs());
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-t-xl transition-all cursor-pointer border-t border-x ${
                    activeTab === 'logs'
                      ? 'bg-white text-[#d94f70] border-[#ffe4e8] -mb-px'
                      : 'text-slate-600 hover:text-slate-900 border-transparent'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>अवरुद्ध लॉग ({logs.length})</span>
                </button>
              </div>

              <button
                onClick={onLogout}
                className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1 cursor-pointer font-medium mb-1"
                title="लॉगआउट करें"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>

            <div className="p-6 flex-1 bg-white">
              {/* TAB 1: POST OFFICIAL SHAYARI */}
              {activeTab === 'post' && (
                <form onSubmit={handlePostSubmit} className="space-y-4">
                  {postSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>आपकी ZQ-Official शायरी सफलतापूर्वक पोस्ट हो गई! Golden Badge के साथ लाइव है।</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        श्रेणी चुनें (All 27 Festivals + 8 Feelings)
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-[#fff8f9] border border-[#ffe4e8] rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d94f70]"
                      >
                        <optgroup label="✨ त्यौहार (27 Festivals)">
                          {FESTIVAL_CATEGORIES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.icon} {c.name} ({c.hindiName})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="💖 भावनाएं (8 Feelings)">
                          {FEELINGS_CATEGORIES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.icon} {c.name} ({c.hindiName})
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        शायरी का शीर्षक (Title)
                      </label>
                      <input
                        type="text"
                        placeholder="उदा. दिल की धड़कन ZQ स्पेशल"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-[#fff8f9] border border-[#ffe4e8] rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d94f70]"
                      />
                    </div>
                  </div>

                  {/* Hindi Box */}
                  <div className="bg-[#fff8f9] p-3.5 rounded-2xl border border-[#ffe4e8] space-y-2">
                    <span className="text-xs font-bold text-[#d94f70] flex items-center gap-1.5">
                      <span>🇮🇳 हिन्दी शायरी (4 Lines):</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((idx) => (
                        <input
                          key={idx}
                          type="text"
                          placeholder={`लाइन ${idx + 1}...`}
                          value={hindiLines[idx]}
                          onChange={(e) => {
                            const updated = [...hindiLines];
                            updated[idx] = e.target.value;
                            setHindiLines(updated);
                          }}
                          className="bg-white border border-[#ffe4e8] rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hinglish Box */}
                  <div className="bg-[#fff8f9] p-3.5 rounded-2xl border border-[#ffe4e8] space-y-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>💬 Hinglish Version (4 Lines):</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((idx) => (
                        <input
                          key={idx}
                          type="text"
                          placeholder={`Line ${idx + 1} Hinglish...`}
                          value={hinglishLines[idx]}
                          onChange={(e) => {
                            const updated = [...hinglishLines];
                            updated[idx] = e.target.value;
                            setHinglishLines(updated);
                          }}
                          className="bg-white border border-[#ffe4e8] rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                        />
                      ))}
                    </div>
                  </div>

                  {/* English Box */}
                  <div className="bg-[#fff8f9] p-3.5 rounded-2xl border border-[#ffe4e8] space-y-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>🇬🇧 English Translation (4 Lines):</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[0, 1, 2, 3].map((idx) => (
                        <input
                          key={idx}
                          type="text"
                          placeholder={`Line ${idx + 1} English...`}
                          value={englishLines[idx]}
                          onChange={(e) => {
                            const updated = [...englishLines];
                            updated[idx] = e.target.value;
                            setEnglishLines(updated);
                          }}
                          className="bg-white border border-[#ffe4e8] rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#d94f70] to-[#c9184a] text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>👑 ZQ Official शायरी प्रकाशित करें (Post to ZQ-Feelings)</span>
                  </button>
                </form>
              )}

              {/* TAB 2: PUBLIC POST MODERATION */}
              {activeTab === 'moderate' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      सार्वजनिक वॉल पर उपयोगकर्ताओं द्वारा की गई पोस्ट्स की निगरानी व हटाना। 3 रिपोर्ट्स पर पोस्ट स्वतः छिपाई जाती है।
                    </p>
                  </div>

                  {userPosts.length > 0 ? (
                    <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                      {userPosts.map((post) => (
                        <div
                          key={post.id}
                          className="p-4 rounded-2xl bg-[#fff8f9] border border-[#ffe4e8] flex items-start justify-between gap-4"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900">{post.userName}</span>
                              <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded-full text-slate-700 font-semibold">
                                {post.categoryName}
                              </span>
                              {post.reportsCount > 0 && (
                                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">
                                  🚩 {post.reportsCount} Reports
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-700 font-noto whitespace-pre-line">
                              {post.text}
                            </p>
                            <span className="text-[10px] text-slate-400 block">{post.date}</span>
                          </div>

                          <button
                            onClick={() => onDeleteUserPost(post.id)}
                            className="p-2 rounded-xl text-red-500 hover:bg-red-50 border border-transparent hover:border-red-200 cursor-pointer transition-colors shrink-0"
                            title="पोस्ट हटाएं (Delete)"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-400 text-xs">
                      कोई सार्वजनिक पोस्ट नहीं मिली।
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: BLOCKED LOGS */}
              {activeTab === 'logs' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      100% Google Safe ऑटो-फ़िल्टर द्वारा ब्लॉक किए गए सभी प्रयास:
                    </p>
                    {logs.length > 0 && (
                      <button
                        onClick={handleClearLogs}
                        className="text-xs text-red-500 hover:text-red-700 font-bold cursor-pointer"
                      >
                        लॉग साफ़ करें
                      </button>
                    )}
                  </div>

                  {logs.length > 0 ? (
                    <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                      {logs.map((log) => (
                        <div
                          key={log.id}
                          className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between text-[11px] font-bold text-red-700">
                            <span>उपयोगकर्ता: {log.userName}</span>
                            <span className="text-slate-400 font-normal">{log.date}</span>
                          </div>
                          <div className="text-slate-700 font-mono text-[11px] bg-white p-2 rounded border border-red-100 break-words">
                            "{log.text}"
                          </div>
                          <div className="text-[10px] text-red-600 font-semibold">
                            कारण: {log.reason}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-400 text-xs">
                      कोई अवरुद्ध लॉग नहीं है। सभी विज़िटर नियमों का पालन कर रहे हैं! 🌸
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
