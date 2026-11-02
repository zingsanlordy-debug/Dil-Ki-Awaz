export type MomentFontStyleId =
  | 'normal'
  | 'bold'
  | 'italic'
  | 'bold-italic'
  | 'cursive'
  | 'bold-cursive'
  | 'typewriter'
  | 'serif'
  | 'serif-italic'
  | 'serif-bold-italic'
  | 'gothic'
  | 'bold-gothic'
  | 'bubble'
  | 'dark-bubble'
  | 'fancy'
  | 'square'
  | 'dark-square'
  | 'small-caps'
  | 'wide'
  | 'sans-bold'
  | 'sans-italic'
  | 'sans-bold-italic'
  | 'royal'
  | 'handwritten'
  | 'rozha'
  | 'yatra'
  | 'poetic-tiro'
  | 'underline'
  | 'sparkle'
  | 'airy-spaced';

export interface MomentFontDefinition {
  id: MomentFontStyleId;
  label: string;
  previewChip: string;
  cssClass: string;
}

export interface ZqMomentPost {
  id: string;
  userId: string;
  posterName: string;
  caption: string;
  fontStyle: MomentFontStyleId;
  images: string[];
  likeCount: number;
  commentCount: number;
  timestampMillis: number;
  reportCount?: number;
  isSeedPost?: boolean;
}

export interface ZqMomentComment {
  id: string;
  momentId: string;
  userId: string;
  authorName: string;
  text: string;
  timestampMillis: number;
}

export interface DraftMomentPhoto {
  id: string;
  file: File;
  previewUrl: string;
}
