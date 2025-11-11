import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol: string
  price: string | number
  percent: number
  subtitle?: string
  icon?: IconName
  variant?: "gain" | "loss" | "neutral"
  size?: "sm" | "md" | "lg"
}

const sizeStyles = {
  sm: {
    card: "p-2.5 gap-2 w-[200px]",
    icon: "size-6",
    symbol: "text-xs",
    percent: "text-[13px] leading-[18px] px-1.5 py-0.5",
    price: "text-lg leading-6",
    subtitle: "text-xs leading-[18px]",
  },
  md: {
    card: "p-3.5 gap-2.5 w-[240px]",
    icon: "size-7",
    symbol: "text-xs",
    percent: "text-sm leading-5 px-2 py-1",
    price: "text-xl leading-[26px]",
    subtitle: "text-xs leading-[18px]",
  },
  lg: {
    card: "p-[18px] gap-3 w-[280px]",
    icon: "size-8",
    symbol: "text-sm",
    percent: "text-[15px] leading-[22px] px-2.5 py-1.5",
    price: "text-2xl leading-7",
    subtitle: "text-xs leading-[18px]",
  },
}

const variantStyles = {
  gain: {
    percent: "text-success border-success/25 bg-success/8",
  },
  loss: {
    percent: "text-destructive border-destructive/25 bg-destructive/8",
  },
  neutral: {
    percent: "text-muted-foreground",
  },
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      symbol,
      price,
      percent,
      subtitle,
      icon,
      variant = "neutral",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const sizeConfig = sizeStyles[size]
    const variantConfig = variantStyles[variant]
    const percentValue = Math.abs(percent)
    const percentSign = percent > 0 ? "+" : percent < 0 ? "-" : ""
    const displayPercent = `${percentSign}${percentValue.toFixed(2)}%`

    const ariaLabel = `${symbol} ${percent > 0 ? "up" : percent < 0 ? "down" : "unchanged"} ${percentValue.toFixed(2)} percent, price ${price}`

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        data-statcard-size={size}
        className={cn(
          "flex flex-col items-start text-left bg-card border border-border shadow-sm",
          "transition-[box-shadow,transform,border-color] duration-150 ease-in-out",
          "hover:-translate-y-0.5 hover:shadow-md",
          "focus-within:shadow-[0_0_0_3px_rgba(0,82,255,0.2)]",
          sizeConfig.card,
          className
        )}
        {...props}
      >
        {/* Icon at top */}
        {icon && (
          <div
            className={cn(
              "rounded-full bg-muted flex items-center justify-center mb-3",
              sizeConfig.icon
            )}
            aria-hidden="true"
          >
            <Icon name={icon} size={size === "sm" ? 14 : size === "md" ? 16 : 18} />
          </div>
        )}

        {/* Symbol */}
        <div className={cn("font-normal text-muted-foreground tracking-wide", sizeConfig.symbol)}>
          {symbol}
        </div>

        {/* Price */}
        <div className={cn("font-bold font-number", sizeConfig.price)}>
          {price}
        </div>

        {/* Subtitle (optional) */}
        {subtitle && (
          <div className={cn("text-muted-foreground", sizeConfig.subtitle)}>
            {subtitle}
          </div>
        )}

        {/* Percent at bottom */}
        <div
          className={cn(
            "font-semibold rounded-full border font-number inline-flex items-center gap-1",
            sizeConfig.percent,
            variantConfig.percent
          )}
        >
          {percent !== 0 && (
            <Icon
              name={percent > 0 ? "TrendingUp" : "TrendingDown"}
              size={size === "sm" ? 12 : size === "md" ? 14 : 16}
            />
          )}
          {displayPercent}
        </div>
      </div>
    )
  }
)

StatCard.displayName = "StatCard"
