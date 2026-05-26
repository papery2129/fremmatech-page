import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

// Definimos la estructura base de una tarjeta
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-8 rounded-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group overflow-hidden",
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

// Un sub-componente para los tags/chips dentro de la tarjeta
export const CardChip = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={cn(
      "px-3 py-1 bg-(--color-surface-container-high) text-on-surface-variant rounded-md font-body text-[13px] font-medium transition-colors group-hover:bg-secondary-container/10 group-hover:text-secondary",
      className
    )}>
      {children}
    </span>
  );
};