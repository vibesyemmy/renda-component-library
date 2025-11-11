import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Create Invoice",
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
}

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    children: "View Details",
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    children: "Options",
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    children: "Learn more",
    variant: "link",
  },
}

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon name="Plus" size={16} />
        Create Invoice
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    children: <Icon name="Settings" size={20} />,
    size: "icon",
  },
}

export const Loading: Story = {
  args: {
    children: (
      <>
        <Icon name="Loader2" size={16} className="animate-spin" />
        Loading...
      </>
    ),
    disabled: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-96">
      <Button className="w-full">Full Width Button</Button>
    </div>
  ),
}

