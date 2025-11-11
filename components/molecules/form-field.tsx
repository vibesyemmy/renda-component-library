import * as React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactElement
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, hint, required, children }, ref) => {
    const id = React.useId()
    const errorId = error ? `${id}-error` : undefined
    const hintId = hint ? `${id}-hint` : undefined

    const childWithProps = React.cloneElement(children, {
      id,
      "aria-invalid": error ? "true" : undefined,
      "aria-describedby": [errorId, hintId].filter(Boolean).join(" ") || undefined,
      className: cn(
        children.props.className,
        error && "border-destructive focus-visible:ring-destructive/20"
      ),
    })

    return (
      <div ref={ref} className="space-y-2">
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        
        {childWithProps}
        
        {hint && !error && (
          <p id={hintId} className="text-sm text-muted-foreground">
            {hint}
          </p>
        )}
        
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = "FormField"

interface InputFieldProps
  extends Omit<React.ComponentProps<typeof Input>, "id"> {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, hint, required, ...props }, ref) => {
    return (
      <FormField label={label} error={error} hint={hint} required={required}>
        <Input ref={ref} {...props} />
      </FormField>
    )
  }
)

InputField.displayName = "InputField"

interface TextareaFieldProps
  extends Omit<React.ComponentProps<typeof Textarea>, "id"> {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

export const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ label, error, hint, required, ...props }, ref) => {
  return (
    <FormField label={label} error={error} hint={hint} required={required}>
      <Textarea ref={ref} {...props} />
    </FormField>
  )
})

TextareaField.displayName = "TextareaField"

