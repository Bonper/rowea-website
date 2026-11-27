import { useState } from 'react';
import { CloudSun } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  eager?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  eager = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#10243B] via-[#246B9E] to-[#75C8D9]/40 p-6 text-center text-white ${containerClassName}`}
      >
        <CloudSun className="h-10 w-10 text-[#75C8D9] mb-3" aria-hidden="true" />
        <p className="max-w-xs text-sm font-medium text-white/90">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#10243B]/5 dark:bg-[#10243B] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
