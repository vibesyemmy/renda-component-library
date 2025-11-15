import * as React from "react"
import { Input } from "@/components/ui/input"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface SearchInputProps
  extends Omit<React.ComponentProps<typeof Input>, "type"> {
  onClear?: () => void
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onClear, value, ...props }, ref) => {
    const hasValue = value && String(value).length > 0

    return (
      <div className="relative search-input-wrapper">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <Icon
            name="Search"
            size={16}
            className="text-[#5b616e]"
            aria-hidden="true"
          />
        </div>
        
        <Input
          ref={ref}
          type="search"
          value={value}
          className={cn("search-input-field", className)}
          data-slot="search-input"
          {...props}
        />

        {hasValue && onClear && (
          <button
            type="button"
            className="absolute right-1 top-1/2 -translate-y-1/2 search-input-clear-btn z-10"
            onClick={onClear}
            aria-label="Clear search"
          >
            <Icon name="X" size={16} className="text-white" aria-hidden="true" />
          </button>
        )}
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

