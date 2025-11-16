"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToggleProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  "data-id"?: string
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      id,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      label,
      "data-id": dataId,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const toggleId = id || generatedId

    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextChecked = event.target.checked

      if (!isControlled) {
        setInternalChecked(nextChecked)
      }

      onChange?.(nextChecked)
    }

    const ariaLabel = label ? undefined : "Toggle switch"

    return (
      <div className="inline-flex items-center gap-3" data-id={dataId}>
        <div className="relative inline-block">
          <input
            ref={ref}
            id={toggleId}
            type="checkbox"
            role="switch"
            aria-checked={checked}
            aria-label={ariaLabel}
            className="peer sr-only"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
          <label
            htmlFor={toggleId}
            className={cn(
              "relative flex items-center w-[52px] h-[32px] rounded-full cursor-pointer transition-colors duration-200 ease-in-out",
              checked ? "bg-primary" : "bg-input",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <span
              className={cn(
                "absolute w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out",
                checked ? "translate-x-[24px]" : "translate-x-[4px]"
              )}
            />
          </label>
        </div>

        {label && (
          <label
            htmlFor={toggleId}
            className={cn(
              "text-sm font-medium",
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            )}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Toggle.displayName = "Toggle"


