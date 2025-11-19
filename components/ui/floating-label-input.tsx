"use client"

import * as React from "react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

export interface FloatingLabelInputProps
  extends Omit<React.ComponentProps<typeof Input>, "placeholder"> {
  label: string
  error?: string
  hint?: string
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, error, hint, className, id, value, defaultValue, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const inputId = id || React.useId()
  const errorId = error ? `${inputId}-error` : undefined
  const hintId = hint ? `${inputId}-hint` : undefined

  const hasValue = Boolean(
    (value !== undefined && value !== null && value !== "") ||
    (defaultValue !== undefined && defaultValue !== null && defaultValue !== "")
  )

  const isFloating = isFocused || hasValue

  return (
    <div className="relative w-full">
      {/* Input Container */}
      <div
        data-slot="floating-input-container"
        aria-invalid={error ? "true" : undefined}
        className={cn(
          "relative flex",
          "border bg-background",
          "transition-all duration-200",
          error && "border-destructive",
          !error && "border-input",
          className
        )}
        style={{
          height: "50px",
        }}
      >
        {/* Floating Label - Top position when floating */}
        {isFloating && (
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-3 top-2 pointer-events-none z-10",
              "text-xs leading-none text-muted-foreground/70",
              "transition-all duration-200"
            )}
          >
            {label}
          </label>
        )}

        {/* Input Field */}
        <Input
          ref={ref}
          id={inputId}
          value={value}
          defaultValue={defaultValue}
          placeholder={!isFloating ? label : undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
          className={cn(
            "w-full border-0 bg-transparent outline-none",
            "px-3",
            isFloating ? "pt-6 pb-2 text-sm font-semibold" : "py-3 text-sm",
            "placeholder:text-muted-foreground placeholder:font-normal",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "flex items-center"
          )}
          style={{
            height: "100%",
          }}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          {...props}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}

      {/* Hint Message */}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  )
})

FloatingLabelInput.displayName = "FloatingLabelInput"

export { FloatingLabelInput }

