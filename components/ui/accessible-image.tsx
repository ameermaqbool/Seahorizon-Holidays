'use client';

import Image from 'next/image';

import { useState } from 'react';

interface AccessibleImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function AccessibleImage({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false
}: AccessibleImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        role="img"
        aria-label={`Image failed to load: ${alt}`}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!imageLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        width={width || 800}
        height={height || 600}
        loading={priority ? undefined : loading}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        decoding="async"
      />
    </div>
  );
}
