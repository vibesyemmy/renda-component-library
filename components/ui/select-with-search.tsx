"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./select"
import { Input } from "./input"
import { Icon } from "./icon"
import { cn } from "@/lib/utils"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectWithSearchProps {
  options: SelectOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  disabled?: boolean
  className?: string
  groupLabel?: string
  emptyMessage?: string
  "data-id"?: string
}

export const SelectWithSearch = React.forwardRef<
  HTMLButtonElement,
  SelectWithSearchProps
>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = "Select an option...",
      searchPlaceholder = "Search...",
      disabled = false,
      className,
      groupLabel,
      emptyMessage = "No options found",
      "data-id": dataId,
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const searchInputRef = React.useRef<HTMLInputElement>(null)

    // Filter options based on search query
    const filteredOptions = React.useMemo(() => {
      if (!searchQuery.trim()) return options
      const query = searchQuery.toLowerCase()
      return options.filter(
        (option) => option.label.toLowerCase().includes(query)
      )
    }, [options, searchQuery])

    // Focus search input when dropdown opens
    React.useEffect(() => {
      if (open && searchInputRef.current) {
        // Small delay to ensure the dropdown is rendered
        setTimeout(() => {
          searchInputRef.current?.focus()
        }, 100)
      } else {
        // Clear search when dropdown closes
        setSearchQuery("")
      }
    }, [open])

    const selectedOption = options.find((opt) => opt.value === value)

    return (
      <Select
        value={value}
        onValueChange={onValueChange}
        open={open}
        onOpenChange={setOpen}
        disabled={disabled}
        data-id={dataId}
      >
        <SelectTrigger ref={ref} className={className}>
          <SelectValue placeholder={placeholder}>
            {selectedOption?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <div className="p-2 border-b">
            <div className="relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon
                  name="Search"
                  size={16}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <Input
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  // Prevent closing dropdown when typing
                  if (e.key === "Escape") {
                    e.stopPropagation()
                    setOpen(false)
                  }
                }}
              />
            </div>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {groupLabel && (
              <>
                <SelectGroup>
                  <SelectLabel>{groupLabel}</SelectLabel>
                </SelectGroup>
                <SelectSeparator />
              </>
            )}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                {emptyMessage}
              </div>
            )}
          </div>
        </SelectContent>
      </Select>
    )
  }
)

SelectWithSearch.displayName = "SelectWithSearch"

