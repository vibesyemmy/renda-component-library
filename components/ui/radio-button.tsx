"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioButtonProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  value?: string
  "data-id"?: string
  className?: string
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      name,
      value,
      "data-id": dataId,
      className,
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && onChange) {
        onChange(!checked)
      }
    }

    return (
      <div
        data-id={dataId}
        role="presentation"
        onClick={handleClick}
        className={cn(
          "relative flex items-center justify-center",
          "w-5 h-5 rounded-full",
          "bg-card border-2",
          "transition-colors duration-200",
          checked ? "border-primary" : "border-input",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={() => {}}
          disabled={disabled}
          className="sr-only"
          aria-hidden="true"
        />
        {checked && (
          <div
            className="w-2.5 h-2.5 rounded-full bg-primary"
            aria-hidden="true"
          />
        )}
        <span
          className="absolute w-7 h-7 rounded-full opacity-0"
          style={{
            border: "2px solid var(--color-primary)",
          }}
        />
      </div>
    )
  }
)

RadioButton.displayName = "RadioButton"

