import type { Meta, StoryObj } from "@storybook/react"
import { AppShell } from "@/components/organisms/app-shell"
import { StatCard } from "@/components/molecules/stat-card"

const meta = {
  title: "Organisms/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

const navigation = [
  { label: "Dashboard", icon: "Home" as const, active: true, onClick: () => {} },
  { label: "Invoices", icon: "FileText" as const, onClick: () => {} },
  { label: "Clients", icon: "Users" as const, onClick: () => {} },
  { label: "Tax", icon: "TrendingUp" as const, onClick: () => {} },
  { label: "Settings", icon: "Settings" as const, onClick: () => {} },
]

const user = {
  name: "John Doe",
  email: "john@example.com",
}

export const Default: Story = {
  args: {
    navigation,
    user,
    children: (
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Renda!</p>
      </div>
    ),
  },
}

export const WithDashboard: Story = {
  args: {
    navigation,
    user,
    children: (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your business</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <StatCard
            symbol="Revenue"
            price="₦2,450,000"
            percent={12.5}
            subtitle="from last month"
            icon="TrendingUp"
            variant="gain"
            size="md"
          />
          <StatCard
            symbol="Outstanding"
            price="₦350,000"
            percent={-5.2}
            subtitle="from last month"
            icon="TrendingDown"
            variant="loss"
            size="md"
          />
          <StatCard
            symbol="Paid"
            price="42"
            percent={8.1}
            subtitle="invoices"
            icon="CheckCircle2"
            variant="gain"
            size="md"
          />
          <StatCard
            symbol="Overdue"
            price="5"
            percent={0}
            subtitle="invoices"
            icon="AlertCircle"
            variant="neutral"
            size="md"
          />
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <p className="text-muted-foreground">Activity feed would appear here</p>
        </div>
      </div>
    ),
  },
}

export const WithCustomLogo: Story = {
  args: {
    navigation,
    user,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Renda
        </span>
      </div>
    ),
    children: (
      <div>
        <h1 className="text-2xl font-bold mb-6">Custom Branding</h1>
        <p className="text-muted-foreground">App shell with custom logo</p>
      </div>
    ),
  },
}

export const WithoutUser: Story = {
  args: {
    navigation,
    children: (
      <div>
        <h1 className="text-2xl font-bold mb-6">App Shell</h1>
        <p className="text-muted-foreground">Without user section</p>
      </div>
    ),
  },
}

