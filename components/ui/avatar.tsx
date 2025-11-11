"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import AvatarNice, { genConfig } from "react-nice-avatar"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface AvatarProps
  extends Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "children">,
    VariantProps<typeof avatarVariants> {
  seed?: string // Seed for react-nice-avatar
  useNiceAvatar?: boolean // Flag to use nice avatar
  children?: React.ReactNode
}

function Avatar({ className, size, seed, useNiceAvatar, children, ...props }: AvatarProps) {
  // If seed is provided and useNiceAvatar is true, render nice avatar
  if (seed && useNiceAvatar) {
    const config = genConfig(seed)
    
    return (
      <div
        data-slot="avatar"
        data-nice-avatar-wrapper
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        <div className="avatar-nice-container">
          <AvatarNice {...config} />
        </div>
      </div>
    )
  }

  // Otherwise, use the standard Radix Avatar
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  children,
  seed,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & { seed?: string }) {
  // Generate a hash-based class name for consistent colors (0-49 for 50 color variations)
  const getHashClass = (seed: string) => {
    let hash = 0
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    }
    return `avatar-fallback-${Math.abs(hash) % 50}`
  }

  const hashClass = seed ? getHashClass(seed) : null

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      data-seed={seed || undefined}
      className={cn(
        "flex size-full items-center justify-center rounded-full font-medium",
        seed ? "text-white" : "bg-muted text-muted-foreground",
        hashClass,
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }
