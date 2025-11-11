import type { Meta, StoryObj } from "@storybook/react"
import { DataTable, type Column } from "@/components/organisms/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { EmptyState } from "@/components/molecules/empty-state"
import { cn } from "@/lib/utils"

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled"

interface Invoice {
  id: string
  number: string
  client: string
  avatar?: string
  amount: number
  status: InvoiceStatus
  date: string
}

const statusConfig: Record<
  InvoiceStatus,
  { label: string; icon: string; variant: "default" | "secondary" | "destructive" | "outline"; className?: string }
> = {
  draft: {
    label: "Draft",
    icon: "Pencil",
    variant: "outline",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  sent: {
    label: "Sent",
    icon: "Send",
    variant: "default",
    className: "bg-blue-500",
  },
  paid: {
    label: "Paid",
    icon: "CheckCircle2",
    variant: "default",
    className: "bg-success",
  },
  overdue: {
    label: "Overdue",
    icon: "AlertCircle",
    variant: "destructive",
  },
  cancelled: {
    label: "Cancelled",
    icon: "XCircle",
    variant: "outline",
    className: "bg-muted text-muted-foreground border-muted",
  },
}

const StatusBadge = ({ status }: { status: InvoiceStatus }) => {
  const config = statusConfig[status]
  if (!config) return null

  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  )
}

const sampleInvoices: Invoice[] = [
  {
    id: "1",
    number: "INV-001",
    client: "Acme Corp",
    avatar: "acme", // Use as seed for nice avatar
    amount: 250000,
    status: "paid",
    date: "2025-01-15",
  },
  {
    id: "2",
    number: "INV-002",
    client: "Tech Solutions",
    avatar: "tech", // Use as seed for nice avatar
    amount: 150000,
    status: "sent",
    date: "2025-02-01",
  },
  {
    id: "3",
    number: "INV-003",
    client: "Creative Agency",
    avatar: "creative", // Use as seed for nice avatar
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
    avatar: "global", // Use as seed for nice avatar
    amount: 180000,
    status: "paid",
    date: "2025-01-28",
  },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, "0")
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

const columns: Column<Invoice>[] = [
  {
    key: "client",
    label: "Client",
    sortable: true,
    render: (invoice) => (
      <div className="flex items-center gap-3">
        <Avatar size="sm" seed={invoice.client} useNiceAvatar={!!invoice.avatar}>
          {!invoice.avatar && (
            <AvatarFallback seed={invoice.client}>{getInitials(invoice.client)}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col">
          <div className="font-medium text-sm">{invoice.client}</div>
          <div className="text-xs text-muted-foreground font-normal">{invoice.number}</div>
        </div>
      </div>
    ),
  },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    align: "right",
    render: (invoice) => `₦${invoice.amount.toLocaleString()}`,
  },
  {
    key: "date",
    label: "Date",
    sortable: true,
    render: (invoice) => formatDate(invoice.date),
  },
  {
    key: "status",
    label: "Status",
    render: (invoice) => <StatusBadge status={invoice.status} />,
  },
  {
    key: "actions",
    label: "Actions",
    align: "right",
    render: () => (
      <div className="flex gap-1 justify-end">
        <Button variant="ghost" size="icon-sm" aria-label="View">
          <Icon name="Eye" size={14} />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Edit">
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
    caption: "Invoices — All invoices",
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
      avatar: i % 3 === 0 ? `client-${i + 1}` : undefined,
      amount: Math.floor(Math.random() * 500000) + 50000,
      status: ["draft", "sent", "paid", "overdue"][Math.floor(Math.random() * 4)] as InvoiceStatus,
      date: new Date(2025, 0, Math.floor(Math.random() * 28) + 1).toISOString().split("T")[0],
    })),
    columns,
    selectable: true,
  },
}

