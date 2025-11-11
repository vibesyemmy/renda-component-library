import type { Meta, StoryObj } from "@storybook/react"
import { SearchInput } from "@/components/molecules/search-input"
import { useState } from "react"

const meta = {
  title: "Molecules/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
}

export const SearchInvoices: Story = {
  args: {
    placeholder: "Search invoices...",
  },
}

export const SearchClients: Story = {
  args: {
    placeholder: "Search clients by name or email...",
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="w-96">
        <SearchInput
          placeholder="Search invoices..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue("")}
        />
        {value && (
          <p className="text-sm text-muted-foreground mt-2">
            Searching for: "{value}"
          </p>
        )}
      </div>
    )
  },
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <SearchInput placeholder="Search across all invoices..." />
    </div>
  ),
}

export const InToolbar: Story = {
  render: () => {
    const [search, setSearch] = useState("")

    return (
      <div className="w-full max-w-4xl border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Invoices</h2>
          <div className="flex gap-2">
            <SearchInput
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch("")}
              className="w-64"
            />
          </div>
        </div>
        <div className="border rounded p-8 text-center text-muted-foreground">
          {search ? `Searching for: "${search}"` : "Invoice list would appear here"}
        </div>
      </div>
    )
  },
}

