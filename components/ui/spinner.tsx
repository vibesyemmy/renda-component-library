import * as React from "react"
import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-6",
      lg: "size-8",
      xl: "size-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size, label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2", className)}
        role="status"
        aria-label={label || "Loading"}
        {...props}
      >
        <Loader2 className={cn(spinnerVariants({ size }))} />
        {label && <span className="text-sm text-muted-foreground">{label}</span>}
      </div>
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }

