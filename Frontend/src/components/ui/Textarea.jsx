import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Textarea = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-sm text-white transition-all ring-offset-background placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
