export function BrandMark({
  className = '',
  showEmblem = true,
}: {
  className?: string;
  showEmblem?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      {showEmblem && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect width="64" height="64" rx="16" className="fill-[#10243B] dark:fill-[#1A3554]" />
          <circle cx="32" cy="32" r="16" stroke="#75C8D9" strokeWidth="3.5" />
          <path
            d="M16 34.5C21.5 29.5 27.5 29.5 32 33.5C36.5 37.5 42.5 37.5 48 32"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="42" cy="22" r="3" fill="#75C8D9" />
        </svg>
      )}
      <span className="font-[var(--font-display)] text-lg font-extrabold tracking-[0.14em] text-[#10243B] dark:text-white">
        ROWEA
      </span>
    </span>
  );
}
