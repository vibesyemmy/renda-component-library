import type { Meta, StoryObj } from "@storybook/react"
import { EmptyState } from "@/components/molecules/empty-state"

const meta = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "No invoices yet",
    description: "Get started by creating your first invoice",
  },
}

export const WithAction: Story = {
  args: {
    icon: "FileText",
    title: "No invoices yet",
    description: "Get started by creating your first invoice",
    action: {
      label: "Create Invoice",
      onClick: () => alert("Create invoice clicked"),
    },
  },
}

export const NoClients: Story = {
  args: {
    icon: "Users",
    title: "No clients added",
    description: "Add your first client to start creating invoices",
    action: {
      label: "Add Client",
      onClick: () => alert("Add client clicked"),
    },
  },
}

export const NoSearchResults: Story = {
  args: {
    icon: "Search",
    title: "No results found",
    description: "Try adjusting your search or filters to find what you're looking for",
  },
}

export const NoPayments: Story = {
  args: {
    icon: "DollarSign",
    title: "No payments received",
    description: "Payments will appear here once your invoices are paid",
  },
}

export const NoTaxRecords: Story = {
  args: {
    icon: "TrendingUp",
    title: "No tax records",
    description: "Tax summaries will be generated based on your invoices",
  },
}

export const InContainer: Story = {
  render: () => (
    <div className="w-full max-w-2xl border rounded-lg min-h-96 flex items-center justify-center">
      <EmptyState
        icon="Inbox"
        title="No items to display"
        description="Your list is currently empty. Add items to get started."
        action={{
          label: "Add Item",
          onClick: () => alert("Add item clicked"),
        }}
      />
    </div>
  ),
}

