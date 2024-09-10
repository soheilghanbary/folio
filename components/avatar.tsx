'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export function Avatar() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      fill
      alt="Soheil Ghanbary"
      src={'/profile.webp'}
      sizes="320px"
      draggable="false"
      quality={100}
      className={cn(
        'size-full rounded-[inherit] object-cover duration-300',
        loaded ? 'scale-100 blur-0' : 'scale-125 blur',
      )}
      onLoad={() => setLoaded(true)}
    />
  );
}
