import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FontSizeMode = 'small' | 'medium' | 'big';

const FONT_SIZE_STEPS = [15, 17, 19, 22, 25] as const;
const DEFAULT_STEP_INDEX = 2; // 19px
const STORAGE_KEY = 'zq_shayari_font_step_v1';

interface FontSizeContextType {
  fontSizeMode: FontSizeMode;
  setFontSizeMode: (mode: FontSizeMode) => void;
  shayariTextClass: string;
  fontSizePx: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  canIncrease: boolean;
  canDecrease: boolean;
}

const STEP_TO_CLASS: Record<number, string> = {
  15: 'text-[15px] leading-[1.8] text-[#000000] font-semibold',
  17: 'text-[17px] leading-[1.8] text-[#000000] font-semibold',
  19: 'text-[19px] leading-[1.8] text-[#000000] font-semibold',
  22: 'text-[22px] leading-[1.8] text-[#000000] font-bold',
  25: 'text-[25px] leading-[1.8] text-[#000000] font-bold'
};

const FontSizeContext = createContext<FontSizeContextType>({
  fontSizeMode: 'medium',
  setFontSizeMode: () => {},
  shayariTextClass: STEP_TO_CLASS[19],
  fontSizePx: 19,
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
  resetFontSize: () => {},
  canIncrease: true,
  canDecrease: true
});

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stepIdx, setStepIdx] = useState<number>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const parsed = Number(saved);
        if (!Number.isNaN(parsed) && parsed >= 0 && parsed < FONT_SIZE_STEPS.length) {
          return parsed;
        }
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_STEP_INDEX;
  });

  const persistStep = (nextIdx: number) => {
    const clamped = Math.max(0, Math.min(FONT_SIZE_STEPS.length - 1, nextIdx));
    setStepIdx(clamped);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(clamped));
    } catch {
      // ignore storage errors
    }
  };

  const fontSizePx = FONT_SIZE_STEPS[stepIdx] ?? 19;
  const fontSizeMode: FontSizeMode =
    stepIdx <= 1 ? 'small' : stepIdx >= 3 ? 'big' : 'medium';

  const setFontSizeMode = (mode: FontSizeMode) => {
    if (mode === 'small') persistStep(1);
    else if (mode === 'big') persistStep(3);
    else persistStep(2);
  };

  const increaseFontSize = () => persistStep(stepIdx + 1);
  const decreaseFontSize = () => persistStep(stepIdx - 1);
  const resetFontSize = () => persistStep(DEFAULT_STEP_INDEX);

  return (
    <FontSizeContext.Provider
      value={{
        fontSizeMode,
        setFontSizeMode,
        shayariTextClass: STEP_TO_CLASS[fontSizePx] || STEP_TO_CLASS[19],
        fontSizePx,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        canIncrease: stepIdx < FONT_SIZE_STEPS.length - 1,
        canDecrease: stepIdx > 0
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
