import type { Meta, StoryObj } from "@storybook/react"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { useState } from "react"

const meta = {
  title: "Atoms/FloatingLabelInput",
  component: FloatingLabelInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingLabelInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="First name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("John Doe")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="First name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="Email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error="Please enter a valid email address"
        />
      </div>
    )
  },
}

export const WithHint: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="Password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          hint="Must be at least 8 characters"
        />
      </div>
    )
  },
}

export const NumberInput: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="Quantity"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
        />
      </div>
    )
  },
}

export const CurrencyInput: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="Rate"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="0.01"
          min="0"
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-80 space-y-4">
        <FloatingLabelInput
          label="Item name"
          value="Product Design"
          disabled
        />
      </div>
    )
  },
}

export const MultipleFields: Story = {
  render: () => {
    const [itemName, setItemName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [rate, setRate] = useState("")
    
    return (
      <div className="w-full max-w-4xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput
            label="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <FloatingLabelInput
            label="Hours"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="0"
          />
          <FloatingLabelInput
            label="Rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
      </div>
    )
  },
}

export const InvoiceLineItemExample: Story = {
  render: () => {
    const [itemName, setItemName] = useState("Product Design - Figma Prototype")
    const [hours, setHours] = useState("3")
    const [rate, setRate] = useState("10")
    const [discount, setDiscount] = useState("0")
    
    return (
      <div className="w-full max-w-4xl space-y-4 p-6 border rounded-lg bg-card">
        <h3 className="text-lg font-semibold mb-4">Invoice Line Item</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput
            label="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <FloatingLabelInput
            label="Hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min="0"
          />
          <FloatingLabelInput
            label="Rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput
            label="Discount (%)"
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            min="0"
            max="100"
          />
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground">Amount:</p>
          <p className="text-lg font-semibold">
            SGD {((parseFloat(hours) || 0) * (parseFloat(rate) || 0) * (1 - (parseFloat(discount) || 0) / 100)).toFixed(2)}
          </p>
        </div>
      </div>
    )
  },
}

