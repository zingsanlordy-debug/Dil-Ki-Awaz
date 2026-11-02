import React, { useState } from 'react';
import { ImageOff, X } from 'lucide-react';

interface DynamicMomentPhotoGridProps {
  photos: string[];
  altPrefix?: string;
  onRemovePhoto?: (index: number) => void;
  onPhotoClick?: (index: number) => void;
}

interface PhotoTileProps {
  src: string;
  index: number;
  total: number;
  aspectClass: string;
  altPrefix: string;
  onRemovePhoto?: (index: number) => void;
  onPhotoClick?: (index: number) => void;
}

const PhotoTile: React.FC<PhotoTileProps> = ({
  src,
  index,
  total,
  aspectClass,
  altPrefix,
  onRemovePhoto,
  onPhotoClick
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-slate-100 rounded-xl group select-none`}
    >
      {failed ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-slate-100 text-slate-500 p-3 text-center">
          <ImageOff className="w-6 h-6 text-[#d94f70]/70 mb-1" />
          <span className="text-[13px] font-medium">Photo {index + 1}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={`${altPrefix} photo ${index + 1} of ${total}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          onClick={onPhotoClick ? () => onPhotoClick(index) : undefined}
          className={`w-full h-full object-cover transition-transform duration-200 ${
            onPhotoClick ? 'cursor-pointer group-hover:scale-[1.02]' : ''
          }`}
        />
      )}

      {onRemovePhoto && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemovePhoto(index);
          }}
          aria-label={`Remove photo ${index + 1}`}
          className="absolute top-2 right-2 min-w-[36px] min-h-[36px] w-9 h-9 rounded-full bg-slate-950/75 hover:bg-red-600 text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

/**
 * Dynamic Photo Grid for 1 to 9 photos with ZERO empty boxes:
 * - 1 photo:  1 large square photo
 * - 2 photos: 2 photos side-by-side
 * - 3 photos: 3 photos in one row
 * - 4 photos: 2x2 grid
 * - 5 photos: 2 top + 3 bottom rows
 * - 6 photos: 3x2 grid
 * - 7 photos: 2 top + 3 middle + 2 bottom rows
 * - 8 photos: 3 top + 2 middle + 3 bottom rows
 * - 9 photos: 3x3 grid
 */
export const DynamicMomentPhotoGrid: React.FC<DynamicMomentPhotoGridProps> = ({
  photos,
  altPrefix = 'ZQ-MOMENTS',
  onRemovePhoto,
  onPhotoClick
}) => {
  const safePhotos = photos.slice(0, 9);
  const count = safePhotos.length;

  if (count === 0) return null;

  const renderTile = (src: string, idx: number, aspectClass = 'aspect-square') => (
    <PhotoTile
      key={`${idx}-${src.slice(0, 32)}`}
      src={src}
      index={idx}
      total={count}
      aspectClass={aspectClass}
      altPrefix={altPrefix}
      onRemovePhoto={onRemovePhoto}
      onPhotoClick={onPhotoClick}
    />
  );

  // 1 photo: 1 large square photo
  if (count === 1) {
    return (
      <div className="grid grid-cols-1 gap-1.5">
        {renderTile(safePhotos[0], 0, 'aspect-square')}
      </div>
    );
  }

  // 2 photos: 2 side-by-side
  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-1.5">
        {safePhotos.map((src, idx) => renderTile(src, idx, 'aspect-square'))}
      </div>
    );
  }

  // 3 photos: 3 in one row
  if (count === 3) {
    return (
      <div className="grid grid-cols-3 gap-1.5">
        {safePhotos.map((src, idx) => renderTile(src, idx, 'aspect-square'))}
      </div>
    );
  }

  // 4 photos: 2x2 grid
  if (count === 4) {
    return (
      <div className="grid grid-cols-2 gap-1.5">
        {safePhotos.map((src, idx) => renderTile(src, idx, 'aspect-square'))}
      </div>
    );
  }

  // 5 photos: 2 top + 3 bottom (zero empty boxes)
  if (count === 5) {
    return (
      <div className="space-y-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          {safePhotos.slice(0, 2).map((src, idx) => renderTile(src, idx, 'aspect-[4/3]'))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {safePhotos.slice(2, 5).map((src, idx) => renderTile(src, idx + 2, 'aspect-square'))}
        </div>
      </div>
    );
  }

  // 6 photos: 3x2 grid (zero empty boxes)
  if (count === 6) {
    return (
      <div className="grid grid-cols-3 gap-1.5">
        {safePhotos.map((src, idx) => renderTile(src, idx, 'aspect-square'))}
      </div>
    );
  }

  // 7 photos: 2 top + 3 middle + 2 bottom (zero empty boxes)
  if (count === 7) {
    return (
      <div className="space-y-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          {safePhotos.slice(0, 2).map((src, idx) => renderTile(src, idx, 'aspect-[4/3]'))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {safePhotos.slice(2, 5).map((src, idx) => renderTile(src, idx + 2, 'aspect-square'))}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {safePhotos.slice(5, 7).map((src, idx) => renderTile(src, idx + 5, 'aspect-[4/3]'))}
        </div>
      </div>
    );
  }

  // 8 photos: 3 top + 2 middle + 3 bottom (zero empty boxes)
  if (count === 8) {
    return (
      <div className="space-y-1.5">
        <div className="grid grid-cols-3 gap-1.5">
          {safePhotos.slice(0, 3).map((src, idx) => renderTile(src, idx, 'aspect-square'))}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {safePhotos.slice(3, 5).map((src, idx) => renderTile(src, idx + 3, 'aspect-[4/3]'))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {safePhotos.slice(5, 8).map((src, idx) => renderTile(src, idx + 5, 'aspect-square'))}
        </div>
      </div>
    );
  }

  // 9 photos: 3x3 grid (zero empty boxes)
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {safePhotos.map((src, idx) => renderTile(src, idx, 'aspect-square'))}
    </div>
  );
};
