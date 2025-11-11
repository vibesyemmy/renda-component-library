import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "@/components/ui/alert"
import { Icon } from "@/components/ui/icon"

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <Icon name="Info" size={16} />
      <div>
        <h5 className="font-semibold">Information</h5>
        <p className="text-sm">This is an informational alert message.</p>
      </div>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <Icon name="AlertCircle" size={16} />
      <div>
        <h5 className="font-semibold">Error</h5>
        <p className="text-sm">Failed to send invoice. Please try again.</p>
      </div>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-96">
      <Icon name="CheckCircle2" size={16} />
      <div>
        <h5 className="font-semibold">Success</h5>
        <p className="text-sm">Invoice created successfully!</p>
      </div>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <Icon name="AlertTriangle" size={16} />
      <div>
        <h5 className="font-semibold">Warning</h5>
        <p className="text-sm">This invoice is overdue by 5 days.</p>
      </div>
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert variant="info" className="w-96">
      <Icon name="Info" size={16} />
      <div>
        <h5 className="font-semibold">Information</h5>
        <p className="text-sm">Payment link has been copied to clipboard.</p>
      </div>
    </Alert>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <Alert className="w-96">
      <Icon name="Info" size={16} />
      <p className="text-sm">Payment link has been copied to clipboard.</p>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert variant="info">
        <Icon name="Info" size={16} />
        <div>
          <h5 className="font-semibold">Info</h5>
          <p className="text-sm">General information message</p>
        </div>
      </Alert>

      <Alert variant="success">
        <Icon name="CheckCircle2" size={16} />
        <div>
          <h5 className="font-semibold">Success</h5>
          <p className="text-sm">Operation completed successfully</p>
        </div>
      </Alert>

      <Alert variant="warning">
        <Icon name="AlertTriangle" size={16} />
        <div>
          <h5 className="font-semibold">Warning</h5>
          <p className="text-sm">Please review before proceeding</p>
        </div>
      </Alert>

      <Alert variant="destructive">
        <Icon name="AlertCircle" size={16} />
        <div>
          <h5 className="font-semibold">Error</h5>
          <p className="text-sm">Something went wrong</p>
        </div>
      </Alert>
    </div>
  ),
}

