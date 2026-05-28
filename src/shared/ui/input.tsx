import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        <label 
          htmlFor={id} 
          className="block font-mono text-[12px] font-bold tracking-widest text-on-surface-variant mb-2 uppercase"
        >
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface",
            "focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";