import type { Meta, StoryObj } from "@storybook/react"
import { DataTable, type Column } from "@/components/organisms/data-table"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { EmptyState } from "@/components/molecules/empty-state"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled"

interface Invoice {
  id: string
  number: string
  client: string
  amount: number
  status: InvoiceStatus
  date: string
}

const statusConfig: Record<
  InvoiceStatus,
  { label: string; icon: string; className: string }
> = {
  draft: {
    label: "Draft",
    icon: "Pencil",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  sent: {
    label: "Sent",
    icon: "Send",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  paid: {
    label: "Paid",
    icon: "CheckCircle2",
    className: "bg-success/10 text-success border-success/20",
  },
  overdue: {
    label: "Overdue",
    icon: "AlertCircle",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  cancelled: {
    label: "Cancelled",
    icon: "XCircle",
    className: "bg-muted text-muted-foreground border-muted",
  },
}

const StatusBadge = ({ status }: { status: InvoiceStatus }) => {
  const config = statusConfig[status]
  if (!config) return null

  return (
    <Badge variant="outline" className={cn("gap-1", config.className)}>
      <Icon name={config.icon as any} size={12} />
      {config.label}
    </Badge>
  )
}

const sampleInvoices: Invoice[] = [
  {
    id: "1",
    number: "INV-001",
    client: "Acme Corp",
    amount: 250000,
    status: "paid",
    date: "2025-01-15",
  },
  {
    id: "2",
    number: "INV-002",
    client: "Tech Solutions",
    amount: 150000,
    status: "sent",
    date: "2025-02-01",
  },
  {
    id: "3",
    number: "INV-003",
    client: "Creative Agency",
    amount: 75000,
    status: "overdue",
    date: "2024-12-20",
  },
  {
    id: "4",
    number: "INV-004",
    client: "StartUp Inc",
    amount: 320000,
    status: "draft",
    date: "2025-02-10",
  },
  {
    id: "5",
    number: "INV-005",
    client: "Global Ltd",
    amount: 180000,
    status: "paid",
    date: "2025-01-28",
  },
]

const columns: Column<Invoice>[] = [
  {
    key: "number",
    label: "Invoice #",
    sortable: true,
  },
  {
    key: "client",
    label: "Client",
    sortable: true,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    render: (invoice) => `₦${invoice.amount.toLocaleString()}`,
  },
  {
    key: "date",
    label: "Date",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    render: (invoice) => <StatusBadge status={invoice.status} />,
  },
  {
    key: "actions",
    label: "Actions",
    render: () => (
      <div className="flex gap-1">
        <Button variant="ghost" size="icon-sm">
          <Icon name="Eye" size={14} />
        </Button>
        <Button variant="ghost" size="icon-sm">
          <Icon name="Pencil" size={14} />
        </Button>
      </div>
    ),
  },
]

const meta = {
  title: "Organisms/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: sampleInvoices,
    columns,
  },
}

export const Selectable: Story = {
  args: {
    data: sampleInvoices,
    columns,
    selectable: true,
  },
}

export const WithRowClick: Story = {
  args: {
    data: sampleInvoices,
    columns,
    onRowClick: (invoice) => alert(`Clicked invoice: ${invoice.number}`),
  },
}

export const EmptyTable: Story = {
  args: {
    data: [],
    columns,
    emptyState: (
      <EmptyState
        icon="FileText"
        title="No invoices yet"
        description="Get started by creating your first invoice"
        action={{
          label: "Create Invoice",
          onClick: () => alert("Create invoice"),
        }}
      />
    ),
  },
}

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: String(i + 1),
      number: `INV-${String(i + 1).padStart(3, "0")}`,
      client: `Client ${i + 1}`,
      amount: Math.floor(Math.random() * 500000) + 50000,
      status: ["draft", "sent", "paid", "overdue"][Math.floor(Math.random() * 4)] as InvoiceStatus,
      date: new Date(2025, 0, Math.floor(Math.random() * 28) + 1).toISOString().split("T")[0],
    })),
    columns,
    selectable: true,
  },
}

