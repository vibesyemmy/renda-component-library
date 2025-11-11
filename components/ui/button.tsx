import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none user-select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 active:bg-secondary/70",
        tertiary:
          "bg-transparent text-primary hover:underline active:opacity-80 underline-offset-3",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 px-2.5 text-[11px] leading-[16px]", /* 28px height, 11px font */
        sm: "h-9 px-3 text-xs leading-[18px]", /* 36px height, 12px font */
        default: "h-11 px-4 text-sm leading-5", /* 44px height, 14px font */
        lg: "h-14 px-[18px] text-base leading-6", /* 56px height, 16px font */
        icon: "size-10 text-sm leading-5", /* 40px × 40px, 14px font */
        "icon-sm": "size-8 text-xs leading-[18px]", /* 32px × 32px, 12px font */
        "icon-lg": "size-11 text-sm leading-5", /* 44px × 44px, 14px font */
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  block?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  block = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        block && "w-full",
        className
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
