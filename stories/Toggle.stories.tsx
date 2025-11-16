import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"

const meta = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Default (unchecked)",
  },
}

export const CheckedByDefault: Story = {
  args: {
    label: "Default (checked)",
    defaultChecked: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="space-y-2">
        <Toggle
          label="Controlled toggle"
          checked={checked}
          onChange={setChecked}
        />
        <p className="text-sm text-muted-foreground">
          State: {checked ? "On" : "Off"}
        </p>
      </div>
    )
  },
}

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-3">
      <Toggle label="Enable notifications" />
      <Toggle label="Dark mode" defaultChecked />
      <Toggle label="Auto-save" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <Toggle label="Disabled (unchecked)" disabled />
      <Toggle label="Disabled (checked)" disabled defaultChecked />
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Toggle />
      <Toggle defaultChecked />
    </div>
  ),
}


