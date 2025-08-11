import Link from "next/link";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ href, type = "button", variant = "primary", className = "", children, onClick }: ButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}

