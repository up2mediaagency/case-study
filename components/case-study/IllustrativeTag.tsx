interface IllustrativeTagProps {
  text: string;
  className?: string;
}

export function IllustrativeTag({ text, className = "" }: IllustrativeTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#F5A524]/40 bg-[#F5A524]/12 px-3 py-1 text-xs font-medium text-[#FFD38A] ${className}`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A524]"
        aria-hidden="true"
      />
      {text}
    </span>
  );
}
