import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
}

const Button = ({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "flex cursor-pointer items-center justify-center font-medium rounded-full px-6 py-4 transition-all shadow-lg";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-secondary hover:bg-primary-dark"
      : "border border-orange-500 text-orange-500 hover:bg-orange-50";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </Link>
  );
};

export default Button;
