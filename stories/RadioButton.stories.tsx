import type { Meta, StoryObj } from "@storybook/react"
import { RadioButton } from "@/components/ui/radio-button"
import { useState } from "react"

const meta = {
  title: "Atoms/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const BasicStates: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <RadioButton checked={false} />
        <span className="text-sm text-muted-foreground">Unchecked</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RadioButton checked={true} />
        <span className="text-sm text-muted-foreground">Checked</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RadioButton checked={false} disabled={true} />
        <span className="text-sm text-muted-foreground">Disabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RadioButton checked={true} disabled={true} />
        <span className="text-sm text-muted-foreground">Checked & Disabled</span>
      </div>
    </div>
  ),
}

export const InteractiveSingle: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="flex items-center gap-3">
        <RadioButton checked={checked} onChange={setChecked} />
        <label
          className="text-foreground cursor-pointer"
          onClick={() => setChecked(!checked)}
        >
          Click to toggle
        </label>
      </div>
    )
  },
}


