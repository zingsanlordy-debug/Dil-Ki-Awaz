export type FestivalCategory = 
  | 'diwali'
  | 'bhai-dooj'
  | 'chhath-puja'
  | 'birthday'
  | 'holi'
  | 'eid'
  | 'bakrid'
  | 'new-year'
  | 'ganesh-chaturthi'
  | 'gandhi-jayanti'
  | 'independence-day'
  | 'republic-day'
  | 'rakshabandhan'
  | 'janmashtami'
  | 'navratri'
  | 'dussehra'
  | 'christmas'
  | 'lohri'
  | 'makar-sankranti'
  | 'karva-chauth'
  | 'eid-milad'
  | 'mahashivratri'
  | 'ram-navami'
  | 'onam'
  | 'pongal'
  | 'baisakhi'
  | 'guru-nanak-jayanti';

export type FeelingsCategory = 
  | 'love'
  | 'sad'
  | 'attitude'
  | 'alone'
  | 'motivational'
  | 'maafi'
  | 'boy'
  | 'girl'
  | 'dosti'
  | 'bewafa'
  | 'breakup'
  | 'yaad-intezaar'
  | 'khushi'
  | 'good-morning'
  | 'good-night'
  | 'two-line'
  | 'gussa'
  | 'family'
  | 'bhai-behen'
  | 'zindagi'
  | 'birthday-feelings'
  | 'miss-you'
  | 'heart-touching'
  | 'emotional'
  | 'romantic-love'
  | 'sad-love'
  | 'yaadein'
  | 'khwab'
  | 'naseeb'
  | 'matlabi-duniya'
  | 'pyar-bhari'
  | 'dard-bhari'
  | 'intezaar'
  | 'judai'
  | 'mohabbat'
  | 'smile'
  | 'kismat-bhagya'
  | 'funny'
  | 'yaad'
  | 'kismat'
  | 'sorry'
  | 'boys'
  | 'girls'
  | '2-line'
  | 'sharabi';

export type ReligiousCategory =
  | 'sanatan-hindu'
  | 'islamic-allah'
  | 'christian-faith'
  | 'sikh-dharm';

export type MaafiSubCategory =
  | 'maa-se-maafi'
  | 'papa-se-maafi'
  | 'biwi-se-maafi'
  | 'husband-se-maafi';

export type FamilyRitualCategory =
  | 'newborn-babies'
  | 'godh-bharai'
  | 'naamkaran-mundan'
  | 'grah-pravesh';

export type AllCategory =
  | FestivalCategory
  | FeelingsCategory
  | ReligiousCategory
  | MaafiSubCategory
  | FamilyRitualCategory;

export type CategoryType =
  | 'festival'
  | 'feelings'
  | 'religious'
  | 'family-rituals'
  | 'zq-official'
  | 'public';

export type LanguageType = 'hindi' | 'hinglish' | 'english' | 'urdu';

export interface CommentItem {
  id: string;
  userName: string;
  text: string;
  date: string;
  likes: number;
}

export interface Shayari {
  id: string;
  category: AllCategory | string;
  subCategory?: string;
  categoryType: CategoryType;
  categoryName: string;
  categoryIcon: string;
  title: string;
  lines: string[]; // 2 lines or 4 lines
  linesHindi: string[];
  linesHinglish: string[];
  linesEnglish: string[];
  linesUrdu?: string[];
  tags: string[];
  author: string;
  language?: LanguageType;
  isOfficial?: boolean;
  initialLikes: number;
  commentsCount?: number;
  comments?: CommentItem[];
  userId?: string;
  createdAtMillis?: number;
}

export interface GlobalShayariItem extends Shayari {
  userId: string;
  createdAtMillis: number;
  status: 'approved';
  rawText: string;
  moodEmoji: string;
  reportCount?: number;
  isSeedPost?: boolean;
}

export interface UserPost {
  id: string;
  userName: string;
  category: string;
  categoryName: string;
  text: string;
  date: string;
  timestamp: number;
  likes: number;
  reportsCount: number;
  isReportedHidden?: boolean;
  comments: CommentItem[];
}

export interface BlockedLog {
  id: string;
  userName: string;
  text: string;
  reason: string;
  date: string;
}

export type FontStyleId = 
  | 'normal'
  | 'bold'
  | 'italic'
  | 'bold-italic'
  | 'fancy-cursive'
  | 'signature'
  | 'heart'
  | 'old-english'
  | 'glitch'
  | 'boxed'
  | 'symbols'
  | 'strike'
  | 'sparkle'
  | 'love-border'
  | 'neon'
  | 'typewriter'
  | 'upper-small'
  | 'circle'
  | 'double'
  | 'classic-serif';

export interface FontOption {
  id: FontStyleId;
  name: string;
  displayName: string;
  fontClass?: string;
  description: string;
}
