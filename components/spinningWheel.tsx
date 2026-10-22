interface SpinningWheelProps {
  className?: string;
}

export default function SpinningWheel({ className = 'h-4 w-4' }: SpinningWheelProps): JSX.Element {
  return (
    <svg
      className={`animate-spin shrink-0 ${className}`}
      viewBox="25 25 50 50"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-80"
      />
    </svg>
  );
}
