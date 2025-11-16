"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  showCharCount?: boolean
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showCharCount, maxLength, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      props.value?.toString().length || props.defaultValue?.toString().length || 0
    )

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const length = e.target.value.length
      setCharCount(length)
      props.onChange?.(e)
    }

    const isNearLimit = maxLength && charCount >= maxLength * 0.9
    const isAtLimit = maxLength && charCount >= maxLength

    return (
      <div className="relative">
        <textarea
          ref={ref}
          data-slot="textarea"
          maxLength={maxLength}
          onChange={handleChange}
          className={cn(
            "flex field-sizing-content min-h-16 w-full bg-transparent text-base md:text-sm",
            "disabled:cursor-not-allowed disabled:opacity-50",
            isAtLimit && "border-destructive",
            className
          )}
          {...props}
        />
        {(showCharCount || maxLength) && (
          <div
            className={cn(
              "absolute bottom-2 right-3 text-xs",
              isAtLimit
                ? "text-destructive"
                : isNearLimit
                  ? "text-warning"
                  : "text-muted-foreground"
            )}
          >
            {charCount}
            {maxLength && ` / ${maxLength}`}
          </div>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
