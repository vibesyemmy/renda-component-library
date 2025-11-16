"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icon, type IconName } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface ClientCardAction {
  label: string
  icon?: IconName
  onClick: () => void
  variant?: "default" | "outline" | "ghost" | "destructive"
}

export interface ClientCardProps {
  name: string
  company?: string
  email?: string
  phone?: string
  avatar?: string
  avatarSeed?: string
  actions?: ClientCardAction[]
  onClick?: () => void
  onEdit?: () => void
  onDelete?: () => void
  variant?: "default" | "compact"
  className?: string
  "data-id"?: string
}

export const ClientCard = React.forwardRef<HTMLDivElement, ClientCardProps>(
  (
    {
      name,
      company,
      email,
      phone,
      avatar,
      avatarSeed,
      actions,
      onClick,
      onEdit,
      onDelete,
      variant = "default",
      className,
      "data-id": dataId,
    },
    ref
  ) => {
    const defaultActions: ClientCardAction[] = []

    if (onEdit) {
      defaultActions.push({
        label: "Edit",
        icon: "Edit",
        onClick: onEdit,
        variant: "ghost",
      })
    }

    if (onDelete) {
      defaultActions.push({
        label: "Delete",
        icon: "Trash2",
        onClick: onDelete,
        variant: "ghost",
      })
    }

    const allActions = actions || defaultActions

    const handleCardClick = (e: React.MouseEvent) => {
      // Don't trigger card click if clicking on action buttons
      if ((e.target as HTMLElement).closest("button")) {
        return
      }
      onClick?.()
    }

    return (
      <Card
        ref={ref}
        data-id={dataId}
        className={cn(
          "p-4 transition-colors",
          onClick && "cursor-pointer hover:bg-muted/50",
          variant === "compact" && "p-3",
          className
        )}
        onClick={handleCardClick}
      >
        <div className={cn("flex gap-4", variant === "compact" ? "items-center" : "items-start")}>
          {/* Avatar */}
          <div className="shrink-0">
            <Avatar size="md" seed={avatarSeed || name}>
              {avatar && <AvatarImage src={avatar} alt={name} />}
              <AvatarFallback seed={avatarSeed || name}>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground truncate">
                  {name}
                </h3>
                {company && variant !== "compact" && (
                  <p className="text-sm text-muted-foreground truncate">
                    {company}
                  </p>
                )}
              </div>
            </div>

            {variant !== "compact" && (
              <div className="mt-2 space-y-1">
                {email && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Mail" size={14} className="shrink-0 text-muted-foreground/40" />
                    <span className="truncate">{email}</span>
                  </div>
                )}
                {phone && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Phone" size={14} className="shrink-0 text-muted-foreground/40" />
                    <span className="truncate">{phone}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {allActions.length > 0 && (
            <div className="shrink-0 flex items-center gap-1">
              {allActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "ghost"}
                  size="icon-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    action.onClick()
                  }}
                  aria-label={action.label}
                  title={action.label}
                >
                  {action.icon && <Icon name={action.icon} size={16} />}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Card>
    )
  }
)

ClientCard.displayName = "ClientCard"

