import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export const Card = ({ children, className, variant = "dark" }: CardProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-8 transition-all duration-300",
        // ¡LA MAGIA OCURRE AQUÍ! Hacemos que la tarjeta sea un flexbox vertical de altura completa
        "flex flex-col h-full", 
        variant === "light" 
          ? "bg-white border border-gray-100 shadow-sm hover:shadow-md" 
          : "glass-card border border-white/10 hover:border-cyan-500/30",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardChip = ({ children, isLight }: { children: ReactNode, isLight?: boolean }) => {
  return (
    <span className={cn(
      "text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full",
      isLight 
        ? "bg-gray-100 text-gray-600" 
        : "bg-white/5 text-cyan-400 border border-cyan-400/20"
    )}>
      {children}
    </span>
  );
};