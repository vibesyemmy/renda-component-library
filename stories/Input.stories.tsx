import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Label } from "@/components/ui/label"
import { Icon } from "@/components/ui/icon"

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your email",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const Password: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="password">Password</Label>
      <PasswordInput id="password" placeholder="••••••••" />
    </div>
  ),
}

export const PasswordWithToggle: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-toggle">Password with Toggle</Label>
        <PasswordInput id="password-toggle" placeholder="Enter password" showToggle={true} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-no-toggle">Password without Toggle</Label>
        <PasswordInput id="password-no-toggle" placeholder="Enter password" showToggle={false} />
      </div>
    </div>
  ),
}

export const Number: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="amount">Amount</Label>
      <Input id="amount" type="number" placeholder="0.00" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithError: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="email-error">Email Address</Label>
      <Input
        id="email-error"
        type="email"
        placeholder="you@example.com"
        className="border-destructive"
        aria-invalid="true"
      />
      <p className="text-sm text-destructive">Please enter a valid email address</p>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="search">Search</Label>
      <div className="relative">
        <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <Input id="search" placeholder="Search invoices..." className="pl-9" />
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="full">Full Width Input</Label>
      <Input id="full" placeholder="This input takes full width" className="w-full" />
    </div>
  ),
}

