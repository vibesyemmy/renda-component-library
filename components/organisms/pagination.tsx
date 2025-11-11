import * as React from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  if (totalPages <= 1) return null

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const showEllipsis = totalPages > 7

    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages)
      return pages
    }

    if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      return pages
    }

    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    )
    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav
      className={cn("flex items-center justify-center gap-1", className)}
      aria-label="Pagination"
    >
      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        aria-label="Previous page"
      >
        <Icon name="ChevronLeft" size={16} />
      </Button>

      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-muted-foreground"
            >
              ...
            </span>
          )
        }

        const pageNumber = page as number
        const isActive = pageNumber === currentPage

        return (
          <Button
            key={pageNumber}
            variant={isActive ? "default" : "outline"}
            size="icon-sm"
            onClick={() => onPageChange(pageNumber)}
            aria-label={`Page ${pageNumber}`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
      >
        <Icon name="ChevronRight" size={16} />
      </Button>
    </nav>
  )
}

