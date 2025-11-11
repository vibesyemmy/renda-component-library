import type { Meta, StoryObj } from "@storybook/react"
import { FormField, InputField, TextareaField } from "@/components/molecules/form-field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

const meta = {
  title: "Molecules/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const WithInput: Story = {
  render: () => (
    <div className="w-96">
      <FormField label="Email Address" required>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-96">
      <FormField
        label="Email Address"
        error="Please enter a valid email address"
        required
      >
        <Input type="email" placeholder="you@example.com" defaultValue="invalid" />
      </FormField>
    </div>
  ),
}

export const WithHint: Story = {
  render: () => (
    <div className="w-96">
      <FormField
        label="Business Name"
        hint="This will appear on your invoices"
        required
      >
        <Input placeholder="Acme Corp" />
      </FormField>
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className="w-96">
      <FormField label="Invoice Notes" hint="Optional message to include on invoice">
        <Textarea placeholder="Thank you for your business!" rows={4} />
      </FormField>
    </div>
  ),
}

export const InputFieldComponent: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <InputField label="Full Name" placeholder="John Doe" required />
      <InputField label="Email" type="email" placeholder="john@example.com" required />
      <InputField
        label="Phone"
        type="tel"
        placeholder="+234 800 000 0000"
        hint="Include country code"
      />
    </div>
  ),
}

export const TextareaFieldComponent: Story = {
  render: () => (
    <div className="w-96">
      <TextareaField
        label="Description"
        placeholder="Enter item description..."
        rows={4}
        hint="Provide detailed information about the item"
      />
    </div>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <InputField
        label="Business Name"
        placeholder="Your Business"
        required
        hint="This will appear on your invoices"
      />
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
      />
      <InputField
        label="VAT Rate"
        type="number"
        placeholder="7.5"
        hint="Enter VAT percentage"
      />
      <TextareaField
        label="Default Invoice Terms"
        placeholder="Payment is due within 30 days..."
        rows={3}
      />
    </div>
  ),
}

