import type { Meta, StoryObj } from "@storybook/react"
import { ClientCard } from "@/components/molecules/client-card"
import { useState } from "react"

const meta = {
  title: "Molecules/ClientCard",
  component: ClientCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClientCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    name: "John Doe",
    company: "Acme Corporation",
    email: "john.doe@acme.com",
    phone: "+234 800 000 0000",
  },
}

export const WithAvatar: Story = {
  args: {
    name: "Jane Smith",
    company: "Tech Solutions Ltd",
    email: "jane.smith@techsolutions.com",
    phone: "+234 800 111 1111",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
}

export const WithActions: Story = {
  args: {
    name: "Michael Johnson",
    company: "Global Industries",
    email: "michael@global.com",
    phone: "+234 800 222 2222",
    onEdit: () => alert("Edit clicked"),
    onDelete: () => alert("Delete clicked"),
  },
}

export const CustomActions: Story = {
  args: {
    name: "Sarah Williams",
    company: "Creative Agency",
    email: "sarah@creative.com",
    phone: "+234 800 333 3333",
    actions: [
      {
        label: "View Details",
        icon: "Eye",
        onClick: () => alert("View details"),
        variant: "ghost",
      },
      {
        label: "Send Invoice",
        icon: "Send",
        onClick: () => alert("Send invoice"),
        variant: "ghost",
      },
      {
        label: "Edit",
        icon: "Edit",
        onClick: () => alert("Edit"),
        variant: "ghost",
      },
      {
        label: "Delete",
        icon: "Trash2",
        onClick: () => alert("Delete"),
        variant: "ghost",
      },
    ],
  },
}

export const Clickable: Story = {
  args: {
    name: "David Brown",
    company: "Finance Corp",
    email: "david@finance.com",
    phone: "+234 800 444 4444",
    onClick: () => alert("Card clicked - navigate to client details"),
    onEdit: () => alert("Edit clicked"),
  },
}

export const Compact: Story = {
  args: {
    name: "Emily Davis",
    company: "Design Studio",
    variant: "compact",
    onEdit: () => alert("Edit clicked"),
    onDelete: () => alert("Delete clicked"),
  },
}

export const MinimalInfo: Story = {
  args: {
    name: "Robert Taylor",
    email: "robert@example.com",
    onEdit: () => alert("Edit clicked"),
  },
}

export const WithAvatarSeed: Story = {
  args: {
    name: "Lisa Anderson",
    company: "Marketing Pro",
    email: "lisa@marketing.com",
    phone: "+234 800 555 5555",
    avatarSeed: "Lisa Anderson",
    onEdit: () => alert("Edit clicked"),
  },
}

export const MultipleCards: Story = {
  render: () => {
    const clients = [
      {
        name: "John Doe",
        company: "Acme Corporation",
        email: "john@acme.com",
        phone: "+234 800 000 0000",
        onEdit: () => alert("Edit John"),
        onDelete: () => alert("Delete John"),
      },
      {
        name: "Jane Smith",
        company: "Tech Solutions",
        email: "jane@tech.com",
        phone: "+234 800 111 1111",
        avatar: "https://i.pravatar.cc/150?img=12",
        onEdit: () => alert("Edit Jane"),
        onDelete: () => alert("Delete Jane"),
      },
      {
        name: "Michael Johnson",
        company: "Global Industries",
        email: "michael@global.com",
        phone: "+234 800 222 2222",
        onEdit: () => alert("Edit Michael"),
        onDelete: () => alert("Delete Michael"),
      },
    ]

    return (
      <div className="w-full max-w-2xl space-y-3">
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>
    )
  },
}

export const GridLayout: Story = {
  render: () => {
    const clients = [
      {
        name: "Sarah Williams",
        company: "Creative Agency",
        email: "sarah@creative.com",
        onEdit: () => alert("Edit Sarah"),
      },
      {
        name: "David Brown",
        company: "Finance Corp",
        email: "david@finance.com",
        onEdit: () => alert("Edit David"),
      },
      {
        name: "Emily Davis",
        company: "Design Studio",
        email: "emily@design.com",
        onEdit: () => alert("Edit Emily"),
      },
      {
        name: "Robert Taylor",
        company: "Consulting Group",
        email: "robert@consulting.com",
        onEdit: () => alert("Edit Robert"),
      },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>
    )
  },
}

export const WithAllActions: Story = {
  args: {
    name: "Complete Client",
    company: "Full Service Company",
    email: "client@company.com",
    phone: "+234 800 999 9999",
    actions: [
      {
        label: "View",
        icon: "Eye",
        onClick: () => alert("View"),
        variant: "ghost",
      },
      {
        label: "Send Invoice",
        icon: "Send",
        onClick: () => alert("Send Invoice"),
        variant: "ghost",
      },
      {
        label: "Edit",
        icon: "Edit",
        onClick: () => alert("Edit"),
        variant: "ghost",
      },
      {
        label: "Delete",
        icon: "Trash2",
        onClick: () => alert("Delete"),
        variant: "ghost",
      },
    ],
  },
}

