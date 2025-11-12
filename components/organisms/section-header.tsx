"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Icon, type IconName } from "@/components/ui/icon"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { SearchInput } from "@/components/molecules/search-input"
import { cn } from "@/lib/utils"

export interface SectionHeaderAction {
  icon: IconName
  label: string
  onClick?: () => void
  ariaLabel?: string
}

export interface SectionHeaderProps {
  title: string
  showBackButton?: boolean
  onBackClick?: () => void
  showSearch?: boolean
  searchValue?: string
  onSearchChange?: (value: string) => void
  onSearchClear?: () => void
  searchPlaceholder?: string
  actions?: SectionHeaderAction[]
  avatarSeed?: string
  avatarImage?: string
  avatarAlt?: string
  onAvatarClick?: () => void
  className?: string
  "aria-label"?: string
}

export const SectionHeader = React.forwardRef<HTMLElement, SectionHeaderProps>(
  (
    {
      title,
      showBackButton = false,
      onBackClick,
      showSearch = true,
      searchValue,
      onSearchChange,
      onSearchClear,
      searchPlaceholder = "Search...",
      actions = [],
      avatarSeed,
      avatarImage,
      avatarAlt = "Profile",
      onAvatarClick,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const defaultActions: SectionHeaderAction[] = [
      { icon: "RefreshCw", label: "Refresh", ariaLabel: "Refresh" },
      { icon: "Bell", label: "Notifications", ariaLabel: "Notifications" },
    ]

    const headerActions = actions.length > 0 ? actions : defaultActions

    return (
      <header
        ref={ref}
        data-slot="section-header"
        className={cn("section-header", className)}
        aria-label={ariaLabel || "Section header"}
        {...props}
      >
        <div className="section-header__left">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onBackClick}
              aria-label="Go back"
              className="section-header__back-btn"
            >
              <Icon name="ChevronLeft" size={20} aria-hidden="true" />
            </Button>
          )}
          <h1 className="section-header__title">{title}</h1>
        </div>
        <div className="section-header__right">
          {showSearch && (
            <div className="section-header__search">
              <SearchInput
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                onClear={onSearchClear}
                placeholder={searchPlaceholder}
                className="section-header__search-input"
              />
            </div>
          )}
          {headerActions.map((action, index) => (
            <Button
              key={index}
              variant="secondary"
              size="icon-sm"
              onClick={action.onClick}
              aria-label={action.ariaLabel || action.label}
              className="section-header__action-btn"
            >
              <Icon name={action.icon} size={20} aria-hidden="true" />
            </Button>
          ))}
          {(avatarSeed || avatarImage) && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onAvatarClick}
              aria-label="Account menu"
              className="section-header__avatar-btn"
            >
              <Avatar size="sm" seed={avatarSeed} useNiceAvatar={!!avatarSeed}>
                {avatarImage && (
                  <AvatarImage src={avatarImage} alt={avatarAlt} />
                )}
                <AvatarFallback seed={avatarSeed}>
                  {avatarAlt?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          )}
        </div>
      </header>
    )
  }
)

SectionHeader.displayName = "SectionHeader"

