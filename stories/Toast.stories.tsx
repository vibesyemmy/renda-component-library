import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from "@/components/ui/toast"

const meta = {
  title: "Atoms/Toast",
  component: ToastContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <ToastContainer />
      </div>
    ),
  ],
} satisfies Meta<typeof ToastContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Invoice created successfully!")}>
      Show Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button onClick={() => toast.error("Failed to send invoice")}>
      Show Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button onClick={() => toast.warning("Invoice is overdue")}>
      Show Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button onClick={() => toast.info("Payment link copied to clipboard")}>
      Show Info Toast
    </Button>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Button
      onClick={() => toast.success("Your invoice has been sent to the client", "Success")}
    >
      Show Toast with Title
    </Button>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button onClick={() => toast.success("Operation completed successfully")}>
        Success
      </Button>
      <Button onClick={() => toast.error("Something went wrong")}>Error</Button>
      <Button onClick={() => toast.warning("Please review before proceeding")}>
        Warning
      </Button>
      <Button onClick={() => toast.info("New update available")}>Info</Button>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.info("First notification")
        setTimeout(() => toast.success("Second notification"), 500)
        setTimeout(() => toast.warning("Third notification"), 1000)
      }}
    >
      Show Multiple Toasts
    </Button>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button onClick={() => toast.info("Quick message (1s)", undefined, 1000)}>
        1 Second Toast
      </Button>
      <Button onClick={() => toast.info("Normal message (5s)", undefined, 5000)}>
        5 Second Toast
      </Button>
      <Button onClick={() => toast.info("Long message (10s)", undefined, 10000)}>
        10 Second Toast
      </Button>
    </div>
  ),
}

