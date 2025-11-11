import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "@/components/organisms/pagination"
import { useState } from "react"

const meta = {
  title: "Organisms/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
}

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
}

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
}

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
}

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
}

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 20

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  },
}

export const WithContent: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const itemsPerPage = 5

    const allItems = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }))

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = allItems.slice(startIndex, endIndex)

    return (
      <div className="w-full max-w-2xl space-y-4">
        <div className="border rounded-lg divide-y">
          {currentItems.map((item) => (
            <div key={item.id} className="p-4">
              {item.name}
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  },
}

