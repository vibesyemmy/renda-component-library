import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <div className="w-96">
      <Textarea placeholder="Enter your message..." />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Enter your message..." rows={4} />
    </div>
  ),
}

export const WithCharacterCount: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        placeholder="Enter description..."
        showCharCount
        rows={4}
      />
    </div>
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="limited">Limited Text (100 characters)</Label>
      <Textarea
        id="limited"
        placeholder="Enter text (max 100 characters)..."
        maxLength={100}
        showCharCount
        rows={4}
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="w-96 space-y-2">
        <Label htmlFor="controlled">Controlled Textarea</Label>
        <Textarea
          id="controlled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          rows={4}
          showCharCount
        />
        <p className="text-sm text-muted-foreground">
          Current value: {value || "(empty)"}
        </p>
      </div>
    )
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <Label>Small (2 rows)</Label>
        <Textarea placeholder="Small textarea..." rows={2} />
      </div>
      <div className="space-y-2">
        <Label>Medium (4 rows)</Label>
        <Textarea placeholder="Medium textarea..." rows={4} />
      </div>
      <div className="space-y-2">
        <Label>Large (6 rows)</Label>
        <Textarea placeholder="Large textarea..." rows={6} />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="disabled">Disabled Textarea</Label>
      <Textarea
        id="disabled"
        placeholder="This is disabled..."
        disabled
        defaultValue="This textarea is disabled"
        rows={4}
      />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="error">Description</Label>
      <Textarea
        id="error"
        placeholder="Enter description..."
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive/20"
        rows={4}
      />
      <p className="text-sm text-destructive">This field is required</p>
    </div>
  ),
}

export const CharacterCountStates: Story = {
  render: () => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("A".repeat(90))
    const [value3, setValue3] = useState("A".repeat(100))

    return (
      <div className="w-96 space-y-6">
        <div className="space-y-2">
          <Label>Normal (0/100)</Label>
          <Textarea
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            maxLength={100}
            showCharCount
            rows={3}
            placeholder="Type here..."
          />
        </div>
        <div className="space-y-2">
          <Label>Near Limit (90/100) - Warning</Label>
          <Textarea
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            maxLength={100}
            showCharCount
            rows={3}
            placeholder="Type here..."
          />
        </div>
        <div className="space-y-2">
          <Label>At Limit (100/100) - Error</Label>
          <Textarea
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            maxLength={100}
            showCharCount
            rows={3}
            placeholder="Type here..."
          />
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      notes: "",
      description: "",
    })

    return (
      <div className="w-96 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="notes">Invoice Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            placeholder="Optional message to include on invoice..."
            rows={3}
            showCharCount
            maxLength={200}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Item Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Enter detailed description..."
            rows={4}
            showCharCount
            maxLength={500}
          />
        </div>
      </div>
    )
  },
}

