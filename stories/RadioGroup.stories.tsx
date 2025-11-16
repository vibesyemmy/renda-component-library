import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const meta = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
]

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState("option1")

    return (
      <div className="w-96">
        <RadioGroup
          options={basicOptions}
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState("option1")

    const options = [
      {
        value: "option1",
        label: "Option 1",
        description: "This is the first option with a detailed description",
      },
      {
        value: "option2",
        label: "Option 2",
        description: "This is the second option with more information",
      },
      {
        value: "option3",
        label: "Option 3",
        description: "This is the third option with additional details",
      },
    ]

    return (
      <div className="w-96">
        <RadioGroup
          options={options}
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState("small")

    const sizeOptions = [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ]

    return (
      <div className="w-96">
        <Label className="mb-4 block">Size</Label>
        <RadioGroup
          options={sizeOptions}
          value={value}
          onValueChange={setValue}
          orientation="horizontal"
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("option1")

    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ]

    return (
      <div className="w-96 space-y-6">
        <div>
          <Label className="mb-4 block">With Disabled Items</Label>
          <RadioGroup
            options={options}
            value={value}
            onValueChange={setValue}
          />
        </div>
        <div>
          <Label className="mb-4 block">Entire Group Disabled</Label>
          <RadioGroup
            options={basicOptions}
            value={value}
            onValueChange={setValue}
            disabled
          />
        </div>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("")

    const paymentOptions = [
      {
        value: "card",
        label: "Credit Card",
        description: "Pay with Visa, Mastercard, or Amex",
      },
      {
        value: "bank",
        label: "Bank Transfer",
        description: "Direct transfer from your bank account",
      },
      {
        value: "crypto",
        label: "Cryptocurrency",
        description: "Pay with Bitcoin, Ethereum, or USDC",
      },
    ]

    return (
      <div className="w-96 space-y-4">
        <RadioGroup
          options={paymentOptions}
          value={value}
          onValueChange={setValue}
        />
        {value && (
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Selected: <strong>{paymentOptions.find((o) => o.value === value)?.label}</strong>
            </p>
          </div>
        )}
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState("")
    const [shippingSpeed, setShippingSpeed] = useState("standard")

    const paymentOptions = [
      {
        value: "card",
        label: "Credit Card",
        description: "Secure payment via Stripe",
      },
      {
        value: "paypal",
        label: "PayPal",
        description: "Pay with your PayPal account",
      },
      {
        value: "bank",
        label: "Bank Transfer",
        description: "Direct bank transfer",
      },
    ]

    const shippingOptions = [
      { value: "standard", label: "Standard (5-7 days)" },
      { value: "express", label: "Express (2-3 days)" },
      { value: "overnight", label: "Overnight (1 day)" },
    ]

    return (
      <div className="w-96 space-y-6">
        <div>
          <Label className="mb-4 block text-base font-semibold">
            Payment Method
          </Label>
          <RadioGroup
            options={paymentOptions}
            value={paymentMethod}
            onValueChange={setPaymentMethod}
          />
        </div>
        <div>
          <Label className="mb-4 block text-base font-semibold">
            Shipping Speed
          </Label>
          <RadioGroup
            options={shippingOptions}
            value={shippingSpeed}
            onValueChange={setShippingSpeed}
          />
        </div>
      </div>
    )
  },
}

export const Compact: Story = {
  render: () => {
    const [value, setValue] = useState("apple")

    const fruits = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "elderberry", label: "Elderberry" },
    ]

    return (
      <div className="w-64">
        <RadioGroup
          options={fruits}
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState("")

    const options = [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "maybe", label: "Maybe" },
    ]

    return (
      <div className="w-96 space-y-2">
        <Label className="text-base font-semibold">
          Do you agree to the terms?
        </Label>
        <RadioGroup
          options={options}
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

