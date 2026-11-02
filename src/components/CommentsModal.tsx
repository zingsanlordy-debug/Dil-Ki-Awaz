import React, { useState } from 'react';
import { X, Heart, MessageCircle, Send, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CommentItem } from '../types/shayari';
import { checkIsClean, saveBlockedLog, recordSuccessfulPost } from '../utils/autoFilter';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetId: string;
  targetTitle: string;
  comments: CommentItem[];
  onAddComment: (comment: CommentItem) => void;
}

export const CommentsModal: React.FC<CommentsModalProps> = ({
  isOpen,
  onClose,
  targetId,
  targetTitle,
  comments,
  onAddComment
}) => {
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const name = userName.trim() || 'प्यारा पाठक 🌸';
    const text = commentText.trim();

    if (!text) {
      setErrorMsg('कृपया अपनी टिप्पणी लिखें!');
      return;
    }

    // Auto-filter validation (100% Google Safe)
    const filterResult = checkIsClean(text, name);
    if (!filterResult.isClean) {
      setErrorMsg(`Apshabd/link mana hai 🙏 - ${filterResult.reason || 'आपत्तिजनक भाषा'}`);
      saveBlockedLog(name, text, filterResult.reason || 'Apshabd/link mana hai 🙏');
      return;
    }

    const newComment: CommentItem = {
      id: `comm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      userName: name,
      text: text,
      date: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      likes: 1
    };

    recordSuccessfulPost();
    onAddComment(newComment);
    setCommentText('');
    setSuccessMsg('Shayari publish ✅ Auto Verified');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#ffe4e8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-[#fff8f9] border-b border-[#ffe4e8] flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-[#fff0f3] border border-[#ffe4e8] flex items-center justify-center text-[#d94f70] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-[26px] font-bold text-[#d94f70] leading-snug">
                टिप्पणियाँ (Comments)
              </h3>
              <p className="text-[15px] text-slate-500 truncate max-w-[230px] sm:max-w-xs">
                {targetTitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Safety Note */}
        <div className="px-6 py-2.5 bg-emerald-50/70 border-b border-emerald-100 flex items-center gap-2 text-[14px] text-emerald-800">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>सुरक्षित टिप्पणी प्रणाली: अभद्र भाषा व स्पैम स्वतः ब्लॉक किए जाते हैं।</span>
        </div>

        {/* Comment List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
          {comments.length > 0 ? (
            comments.map((c) => (
              <div
                key={c.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#fff8f9] border border-[#ffe4e8] hover:border-[#d94f70]/40 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#d94f70] text-white flex items-center justify-center text-[15px] font-bold shadow-2xs">
                      {c.userName.charAt(0) || '🌸'}
                    </span>
                    <span className="text-[17px] font-bold text-slate-800">{c.userName}</span>
                  </div>
                  <span className="text-[14px] text-slate-400">{c.date}</span>
                </div>
                <p className="text-[18px] text-slate-700 leading-[1.8] font-noto pl-10">
                  {c.text}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-slate-500 text-[17px]">
              <span className="text-3xl block mb-2">💬</span>
              अभी तक कोई टिप्पणी नहीं है। पहली खूबसूरत टिप्पणी आप लिखें!
            </div>
          )}
        </div>

        {/* New Comment Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 bg-[#fff8f9] border-t border-[#ffe4e8] space-y-3.5">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-[16px] font-semibold">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-[16px] font-bold">
              <span>{successMsg}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              placeholder="आपका नाम"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="sm:w-1/3 min-h-[48px] bg-white border border-[#ffe4e8] rounded-xl px-3.5 py-2.5 text-[17px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#d94f70]"
              maxLength={30}
            />
            <input
              type="text"
              placeholder="प्यारी टिप्पणी लिखें..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 min-h-[48px] bg-white border border-[#ffe4e8] rounded-xl px-3.5 py-2.5 text-[17px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#d94f70]"
              maxLength={300}
            />
            <button
              type="submit"
              className="min-h-[48px] px-5 py-2.5 bg-[#d94f70] hover:bg-[#b32f4f] text-white rounded-xl text-[18px] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>भेजें</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
