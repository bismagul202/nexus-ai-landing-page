type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Deep blue for primary actions
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
  // Crisp white/blue outline for secondary actions
  secondary: "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold transition-all duration-200 active:scale-95";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}