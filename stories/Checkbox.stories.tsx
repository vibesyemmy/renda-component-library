import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const BasicStates: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Checkbox />
        <span className="text-sm text-muted-foreground">Unchecked</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox checked />
        <span className="text-sm text-muted-foreground">Checked</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox disabled />
        <span className="text-sm text-muted-foreground">Disabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox checked disabled />
        <span className="text-sm text-muted-foreground">Checked & Disabled</span>
      </div>
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-2">
      <Checkbox indeterminate />
      <span className="text-sm text-muted-foreground">Indeterminate (Select All)</span>
    </div>
  ),
}

export const WithLabels: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(true)
    const [checked3, setChecked3] = useState(false)

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="terms"
            checked={checked1}
            onCheckedChange={setChecked1}
          />
          <Label htmlFor="terms" className="cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="newsletter"
            checked={checked2}
            onCheckedChange={setChecked2}
          />
          <Label htmlFor="newsletter" className="cursor-pointer">
            Subscribe to newsletter
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="marketing"
            checked={checked3}
            onCheckedChange={setChecked3}
          />
          <Label htmlFor="marketing" className="cursor-pointer">
            Receive marketing emails
          </Label>
        </div>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="controlled" className="cursor-pointer">
            Controlled checkbox
          </Label>
        </div>
        <p className="text-sm text-muted-foreground">
          State: {checked ? "Checked" : "Unchecked"}
        </p>
      </div>
    )
  },
}

export const DataTableExample: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
    const [selectAll, setSelectAll] = useState(false)

    const items = [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
      { id: "3", name: "Item 3" },
    ]

    const allSelected = items.length > 0 && selectedRows.size === items.length
    const someSelected = selectedRows.size > 0 && selectedRows.size < items.length

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(new Set(items.map((item) => item.id)))
      } else {
        setSelectedRows(new Set())
      }
      setSelectAll(checked)
    }

    const handleRowToggle = (id: string) => {
      const newSelected = new Set(selectedRows)
      if (newSelected.has(id)) {
        newSelected.delete(id)
      } else {
        newSelected.add(id)
      }
      setSelectedRows(newSelected)
    }

    return (
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b">
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onCheckedChange={handleSelectAll}
              aria-label="Select all rows"
            />
            <Label className="font-semibold">Select All</Label>
          </div>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 hover:bg-muted rounded"
              >
                <Checkbox
                  checked={selectedRows.has(item.id)}
                  onCheckedChange={() => handleRowToggle(item.id)}
                  aria-label={`Select ${item.name}`}
                />
                <Label className="cursor-pointer">{item.name}</Label>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
            Selected: {selectedRows.size} of {items.length}
          </div>
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      privacy: false,
      cookies: true,
    })

    return (
      <div className="space-y-4 p-4 border rounded-lg">
        <h3 className="font-semibold mb-4">Privacy Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, terms: checked as boolean })
              }
            />
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the terms and conditions
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, privacy: checked as boolean })
              }
            />
            <Label htmlFor="privacy" className="cursor-pointer">
              I accept the privacy policy
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="cookies"
              checked={formData.cookies}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, cookies: checked as boolean })
              }
            />
            <Label htmlFor="cookies" className="cursor-pointer">
              Allow cookies for analytics
            </Label>
          </div>
        </div>
      </div>
    )
  },
}

