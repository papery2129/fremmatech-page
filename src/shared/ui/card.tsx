import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "light";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-8 rounded-xl flex flex-col h-full transition-all duration-300 hover:shadow-xl relative group overflow-hidden",
          variant === "glass" && "glass-card hover:-translate-y-1",
          variant === "light" && "bg-white border border-gray-100 shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardChip = ({ 
  children, 
  className, 
  isLight 
}: { 
  children: React.ReactNode; 
  className?: string;
  isLight?: boolean;
}) => {
  return (
    <span className={cn(
      "px-3 py-1 rounded-md font-body text-[13px] font-medium transition-colors",
      isLight 
        ? "bg-gray-100 text-gray-700" 
        : "bg-(--color-surface-container-high) text-on-surface-variant group-hover:bg-secondary-container/10 group-hover:text-secondary",
      className
    )}>
      {children}
    </span>
  );
};