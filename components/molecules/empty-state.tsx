import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon = "Inbox", title, description, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center py-12 px-4 text-center",
          className
        )}
        {...props}
      >
        <div className="rounded-full bg-primary p-6 mb-16">
          <Icon name={icon} size={48} className="text-white" />
        </div>

        <h3 className="text-display-lg font-normal mb-2">{title}</h3>

        {description && (
          <p className="text-sm text-muted-foreground max-w-md mb-6">
            {description}
          </p>
        )}

        {action && (
          <Button onClick={action.onClick}>
            <Icon name="Plus" size={16} />
            {action.label}
          </Button>
        )}
      </div>
    )
  }
)

EmptyState.displayName = "EmptyState"

