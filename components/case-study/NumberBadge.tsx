interface NumberBadgeProps {
  number: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NumberBadge({
  number,
  size = "md",
  className = "",
}: NumberBadgeProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-[30px] w-[30px] text-sm",
    lg: "h-9 w-9 text-base",
  }[size];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-sm ${sizeClasses} ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--btn-from), var(--btn-to))",
      }}
    >
      {number}
    </span>
  );
}
