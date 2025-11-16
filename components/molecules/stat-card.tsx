"use client"

import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface StatCardProps {
  symbol: string
  name?: string
  price: string | number
  priceChange: number
  imageUrl?: string
  icon?: IconName
  currency?: string
  onClick?: () => void
  className?: string
  "data-id"?: string
}

export const StatCard = React.forwardRef<HTMLButtonElement, StatCardProps>(
  (
    {
      symbol,
      name,
      price,
      priceChange,
      imageUrl,
      icon,
      currency = "",
      onClick,
      className,
      "data-id": dataId,
      ...props
    },
    ref
  ) => {
    const isPositive = priceChange > 0
    const isNeutral = priceChange === 0
    const priceDisplay = typeof price === "number" ? price.toLocaleString() : price
    const formattedPrice = currency ? `${currency} ${priceDisplay}` : priceDisplay

    const ariaLabel = `${symbol} ${isPositive ? "up" : isNeutral ? "" : "down"} ${Math.abs(priceChange).toFixed(2)}%`

    return (
      <button
        ref={ref}
        data-id={dataId}
        onClick={onClick}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          "flex-shrink-0 w-40 p-4 bg-card border border-border rounded-2xl",
          "hover:border-border/80 hover:shadow-sm transition-all duration-200 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-3">
          {/* Image or Icon */}
          {(imageUrl || icon) && (
            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={`${symbol} logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                icon && <Icon name={icon} size={20} className="text-muted-foreground" aria-hidden="true" />
              )}
            </div>
          )}

          {/* Symbol and Price */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground">{symbol}</p>
            <p className="text-sm text-foreground font-medium">{formattedPrice}</p>
            <p
              className={cn(
                "text-xs font-medium",
                isNeutral
                  ? "text-muted-foreground"
                  : isPositive
                    ? "text-success"
                    : "text-destructive"
              )}
            >
              {!isNeutral && (
                <span aria-hidden="true">{isPositive ? "↗" : "↘"}</span>
              )}{" "}
              <span>{Math.abs(priceChange).toFixed(2)}%</span>
            </p>
          </div>
        </div>
      </button>
    )
  }
)

StatCard.displayName = "StatCard"
