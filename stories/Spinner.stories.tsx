import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
}

export const LoadingInvoices: Story = {
  args: {
    label: "Loading invoices...",
    size: "default",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Spinner size="sm" label="Small" />
      <Spinner size="default" label="Default" />
      <Spinner size="lg" label="Large" />
      <Spinner size="xl" label="Extra Large" />
    </div>
  ),
}

