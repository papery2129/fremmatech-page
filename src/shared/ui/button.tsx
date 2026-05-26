import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => {
    
    // Estilos base de la tipografía JetBrains Mono dictados por el diseño
    const baseStyles = "px-8 py-3 rounded-md font-mono text-[12px] leading-[16px] tracking-[0.1em] font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase flex items-center justify-center gap-2";
    
    const variants = {
      primary: "bg-secondary-container text-on-secondary-container neon-glow-cyan hover:brightness-110",
      secondary: "bg-transparent border border-secondary-container text-secondary-container hover:bg-secondary-container/10",
      ghost: "bg-transparent text-on-surface-variant hover:text-secondary hover:bg-white/5 border-b-2 border-transparent hover:border-secondary pb-1 rounded-none px-0 py-0",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";