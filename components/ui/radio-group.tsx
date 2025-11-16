"use client"

import * as React from "react"
import { RadioButton } from "./radio-button"
import { Label } from "./label"
import { cn } from "@/lib/utils"

export interface RadioGroupOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioGroupOption[]
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  disabled?: boolean
  orientation?: "vertical" | "horizontal"
  className?: string
  "data-id"?: string
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      options,
      value,
      onValueChange,
      name,
      disabled = false,
      orientation = "vertical",
      className,
      "data-id": dataId,
    },
    ref
  ) => {
    const groupName = React.useId()
    const radioName = name || groupName

    const handleChange = (optionValue: string) => {
      if (!disabled && onValueChange) {
        onValueChange(optionValue)
      }
    }

    return (
      <div
        ref={ref}
        data-id={dataId}
        role="radiogroup"
        className={cn(
          orientation === "horizontal" ? "flex gap-4" : "space-y-3",
          className
        )}
      >
        {options.map((option) => {
          const isChecked = value === option.value
          const isDisabled = disabled || option.disabled

          return (
            <div
              key={option.value}
              className={cn(
                "flex gap-3",
                option.description ? "items-start" : "items-center",
                !isDisabled && "cursor-pointer",
                isDisabled && "opacity-50 cursor-not-allowed",
                orientation === "vertical" && "p-3 rounded-lg hover:bg-muted transition-colors"
              )}
              onClick={() => !isDisabled && handleChange(option.value)}
            >
              <div className={cn("shrink-0", option.description && "mt-0.5")}>
                <RadioButton
                  name={radioName}
                  value={option.value}
                  checked={isChecked}
                  onChange={() => handleChange(option.value)}
                  disabled={isDisabled}
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor={`${radioName}-${option.value}`}
                  className={cn(
                    "cursor-pointer font-medium text-foreground",
                    isDisabled && "cursor-not-allowed"
                  )}
                >
                  {option.label}
                </Label>
                {option.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

RadioGroup.displayName = "RadioGroup"
