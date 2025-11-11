"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  showToggle?: boolean
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, showToggle = true, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev)
    }

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn(showToggle && "!pr-10", className)}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm p-1 z-10 flex items-center justify-center"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    )
  }
)

PasswordInput.displayName = "PasswordInput"

export { PasswordInput }

