"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "@/components/ui/button"
import { Icon, type IconName } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const bannerVariants = cva(
  "relative w-full border text-sm transition-all rounded-lg shadow-lg px-6 py-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        cookie: "bg-card text-card-foreground border-border",
        info: "bg-primary/10 border-primary/20 text-primary",
        success: "bg-success/10 border-success/20 text-success",
        warning: "bg-warning/10 border-warning/20 text-warning",
        destructive: "bg-destructive/10 border-destructive/20 text-destructive",
      },
      position: {
        top: "fixed top-0 left-1/2 -translate-x-1/2 z-50 shadow-xl max-w-4xl w-[calc(100%-2rem)]",
        bottom: "fixed bottom-0 right-8 z-50 shadow-xl max-w-4xl mb-8",
        inline: "relative",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "inline",
    },
  }
)

export interface BannerAction {
  label: string
  onClick?: () => void
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "xs" | "sm" | "default" | "lg"
  "aria-label"?: string
}

export interface BannerLink {
  label: string
  href: string
  target?: "_blank" | "_self"
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  "aria-label"?: string
}

export interface BannerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof bannerVariants> {
  title?: string
  description?: string | React.ReactNode
  icon?: IconName
  showDismiss?: boolean
  onDismiss?: () => void
  actions?: BannerAction[]
  link?: BannerLink
  customizeLink?: BannerLink
  className?: string
  "aria-label"?: string
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      title,
      description,
      icon,
      variant = "default",
      position = "inline",
      showDismiss = false,
      onDismiss,
      actions = [],
      link,
      customizeLink,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const hasContent = title || description
    const hasActions = actions.length > 0 || link
    const showIcon = icon !== undefined
    const isCookieVariant = variant === "cookie"

    if (!hasContent && !hasActions && !customizeLink) {
      return null
    }

    return (
      <div
        ref={ref}
        data-slot="banner"
        role={variant === "destructive" || variant === "warning" ? "alert" : "region"}
        aria-label={ariaLabel || (title ? undefined : "Banner")}
        className={cn(bannerVariants({ variant, position }), className)}
        {...props}
      >
        {isCookieVariant ? (
          /* Cookie Banner Layout */
          <div className="relative">
            {/* Dismiss Button - Top Right */}
            {showDismiss && (
              <button
                type="button"
                onClick={onDismiss}
                aria-label="Dismiss banner"
                className="absolute top-0 right-0 shrink-0 size-6 rounded-md hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors"
              >
                <Icon name="X" className="size-4 text-muted-foreground" aria-hidden="true" />
              </button>
            )}

            {/* Content */}
            <div className="pr-8">
              {description && (
                <div
                  data-slot="banner-description"
                  className="text-sm leading-relaxed text-foreground mb-4 pr-2"
                >
                  {description}
                </div>
              )}

              {/* Customize Link - Separate from action buttons */}
              {customizeLink && (
                <div className="mb-4">
                  <a
                    href={customizeLink.href}
                    target={customizeLink.target || "_self"}
                    rel={customizeLink.target === "_blank" ? "noopener noreferrer" : undefined}
                    onClick={customizeLink.onClick}
                    aria-label={customizeLink["aria-label"]}
                    className="text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
                  >
                    {customizeLink.label}
                  </a>
                </div>
              )}

              {/* Action Buttons - Right Aligned */}
              {actions.length > 0 && (
                <div className="flex items-center justify-end gap-3">
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant || "default"}
                      size={action.size || "default"}
                      onClick={action.onClick}
                      aria-label={action["aria-label"]}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Default Banner Layout */
          <div className="relative">
            {/* Dismiss Button - Top Right */}
            {showDismiss && (
              <button
                type="button"
                onClick={onDismiss}
                aria-label="Dismiss banner"
                className="absolute top-0 right-0 shrink-0 size-6 rounded-md hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors"
              >
                <Icon name="X" className="size-4 text-muted-foreground" aria-hidden="true" />
              </button>
            )}

            {/* Content */}
            <div className={cn("pr-8", !hasContent && "pr-0")}>
              <div className="flex items-start gap-3">
                {/* Icon */}
                {showIcon && (
                  <Icon
                    name={icon}
                    className={cn(
                      "size-5 shrink-0 mt-0.5",
                      variant === "info" && "text-primary",
                      variant === "success" && "text-success",
                      variant === "warning" && "text-warning",
                      variant === "destructive" && "text-destructive"
                    )}
                    aria-hidden="true"
                  />
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {title && (
                    <div
                      data-slot="banner-title"
                      className="font-medium mb-1 text-foreground"
                    >
                      {title}
                    </div>
                  )}
                  {description && (
                    <div
                      data-slot="banner-description"
                      className={cn(
                        "text-sm leading-relaxed",
                        variant === "info" && "text-primary/90",
                        variant === "success" && "text-success/90",
                        variant === "warning" && "text-warning/90",
                        variant === "destructive" && "text-destructive/90",
                        !variant || variant === "default"
                          ? "text-foreground"
                          : ""
                      )}
                    >
                      {description}
                    </div>
                  )}

                  {/* Actions and Link */}
                  {hasActions && (
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      {actions.map((action, index) => (
                        <Button
                          key={index}
                          variant={action.variant || "default"}
                          size={action.size || "default"}
                          onClick={action.onClick}
                          aria-label={action["aria-label"]}
                        >
                          {action.label}
                        </Button>
                      ))}
                      {link && (
                        <a
                          href={link.href}
                          target={link.target || "_self"}
                          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                          onClick={link.onClick}
                          aria-label={link["aria-label"]}
                          className="text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

Banner.displayName = "Banner"

