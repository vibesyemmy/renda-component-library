"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export interface Column<T> {
  key: string
  label: string
  render?: (item: T) => React.ReactNode
  sortable?: boolean
  align?: "left" | "right" | "center"
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  selectable?: boolean
  onRowClick?: (item: T) => void
  emptyState?: React.ReactNode
  className?: string
  caption?: string
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  selectable = false,
  onRowClick,
  emptyState,
  className,
  caption,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<Set<string | number>>(
    new Set()
  )
  const [sortConfig, setSortConfig] = React.useState<{
    key: string
    direction: "asc" | "desc"
  } | null>(null)

  const allSelected = data.length > 0 && selectedRows.size === data.length
  const someSelected = selectedRows.size > 0 && selectedRows.size < data.length

  const toggleAll = () => {
    if (allSelected) {
      setSelectedRows(new Set())
      return
    }
    setSelectedRows(new Set(data.map((item) => item.id)))
  }

  const toggleRow = (id: string | number) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
  }

  const handleSort = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      setSortConfig({ key, direction: "asc" })
      return
    }

    if (sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" })
      return
    }

    setSortConfig(null)
  }

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const aValue = (a as any)[sortConfig.key]
      const bValue = (b as any)[sortConfig.key]

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1
      return 0
    })
  }, [data, sortConfig])

  if (data.length === 0 && emptyState) {
    return <div className={className}>{emptyState}</div>
  }

  return (
    <div className={cn("", className)}>
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {selectable && (
              <TableHead className="w-12">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={toggleAll}
                  aria-label="Select all rows"
                />
              </TableHead>
            )}
            {columns.map((column) => (
              <TableHead key={column.key} className={column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "text-left"}>
                {column.sortable ? (
                  <button
                    type="button"
                    onClick={() => handleSort(column.key)}
                    className={cn(
                      "flex items-center gap-2 hover:opacity-80 transition-opacity",
                      column.align === "right" && "ml-auto",
                      column.align === "center" && "mx-auto"
                    )}
                  >
                    {column.label}
                    {sortConfig?.key === column.key && (
                      <Icon
                        name={
                          sortConfig.direction === "asc"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={14}
                      />
                    )}
                  </button>
                ) : (
                  column.label
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className={cn(onRowClick && "cursor-pointer")}
            >
              {selectable && (
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(item.id)}
                    onCheckedChange={() => toggleRow(item.id)}
                    aria-label={`Select row ${item.id}`}
                    onClick={(e) => e.stopPropagation()}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.key} className={column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "text-left"}>
                  {column.render
                    ? column.render(item)
                    : String((item as any)[column.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

