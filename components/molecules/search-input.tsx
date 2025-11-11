import * as React from "react"
import { Input } from "@/components/ui/input"
import { Icon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SearchInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  onClear?: () => void
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onClear, value, ...props }, ref) => {
    const hasValue = value && String(value).length > 0

    return (
      <div className="relative">
        <Icon
          name="Search"
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        
        <Input
          ref={ref}
          type="search"
          value={value}
          className={cn("pl-9 pr-9", className)}
          {...props}
        />

        {hasValue && onClear && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={onClear}
            aria-label="Clear search"
          >
            <Icon name="X" size={14} />
          </Button>
        )}
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

