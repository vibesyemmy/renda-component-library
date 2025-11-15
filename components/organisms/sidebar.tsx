"use client"

import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export interface SidebarNavItem {
  label: string
  href: string
  icon: IconName
  isActive?: boolean
}

export interface SidebarProps {
  "data-id"?: string
  activeItem?: string
  onNavigate?: (href: string) => void
  navigation?: SidebarNavItem[]
  logo?: React.ReactNode
  showAdvancedToggle?: boolean
  advancedMode?: boolean
  onAdvancedToggle?: (enabled: boolean) => void
  className?: string
}

const defaultNavigation: SidebarNavItem[] = [
  {
    label: "Home",
    href: "/home",
    icon: "Home",
  },
  {
    label: "My assets",
    href: "/assets",
    icon: "Wallet",
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: "ArrowLeftRight",
  },
  {
    label: "Explore",
    href: "/explore",
    icon: "Compass",
  },
  {
    label: "Derivatives",
    href: "/explore-perpetual-futures",
    icon: "TrendingUp",
  },
  {
    label: "More",
    href: "#more",
    icon: "MoreHorizontal",
  },
]

const defaultLogo = (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
      <span className="text-white font-bold text-lg">R</span>
    </div>
    <span className="font-bold text-lg">Renda</span>
  </div>
)

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      "data-id": dataId,
      activeItem = "/explore",
      onNavigate,
      navigation = defaultNavigation,
      logo = defaultLogo,
      showAdvancedToggle = true,
      advancedMode = false,
      onAdvancedToggle,
      className,
      ...props
    },
    ref
  ) => {
    const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onNavigate?.(href)
    }

    const handleAdvancedChange = (checked: boolean) => {
      onAdvancedToggle?.(checked)
    }

    return (
      <nav
        ref={ref}
        data-id={dataId}
        aria-label="Sidebar"
        className={cn(
          "w-60 h-screen bg-card flex flex-col border-r border-border",
          className
        )}
        {...props}
      >
        <div className="flex-1 flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <button
              type="button"
              className="relative appearance-none cursor-pointer bg-transparent border-0 p-0"
              aria-label="Renda home"
              onClick={() => onNavigate?.("/home")}
            >
              {logo}
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-1 px-3 flex-1">
            {navigation.map((item) => {
              const isActive = activeItem === item.href

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-full",
                      "transition-colors duration-200 text-base font-medium",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon name={item.icon} size={20} className="shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Advanced Toggle */}
        {showAdvancedToggle && (
          <div className="p-3 border-t border-border">
            <button
              type="button"
              onClick={() => handleAdvancedChange(!advancedMode)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-full",
                "text-muted-foreground hover:bg-muted transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <Icon name="Settings" size={20} className="shrink-0" aria-hidden="true" />
              <span className="flex-1 text-left text-base">Advanced</span>
              <Switch
                checked={advancedMode}
                onCheckedChange={handleAdvancedChange}
                aria-label="Toggle advanced mode"
              />
            </button>
          </div>
        )}
      </nav>
    )
  }
)

Sidebar.displayName = "Sidebar"

