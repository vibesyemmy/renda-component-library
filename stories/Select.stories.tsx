import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@/components/ui/select"
import { SelectWithSearch } from "@/components/ui/select-with-search"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const meta = {
  title: "Atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// Basic Select Stories
export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <Label htmlFor="select-basic">Choose an option</Label>
      <Select>
        <SelectTrigger id="select-basic">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("")

    return (
      <div className="w-[200px] space-y-2">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="date">Date</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Selected: {value || "None"}
        </p>
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="mx">Mexico</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="fr">France</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Select disabled>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="With disabled items" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2" disabled>
            Option 2 (Disabled)
          </SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Select>
        <SelectTrigger className="w-[200px]" size="sm">
          <SelectValue placeholder="Small size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px]" size="default">
          <SelectValue placeholder="Default size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

// SelectWithSearch Stories
export const WithSearch: Story = {
  render: () => {
    const options = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "elderberry", label: "Elderberry" },
      { value: "fig", label: "Fig" },
      { value: "grape", label: "Grape" },
    ]

    return (
      <div className="w-[200px] space-y-2">
        <Label>Searchable Select</Label>
        <SelectWithSearch
          options={options}
          placeholder="Search fruits..."
          searchPlaceholder="Type to search..."
        />
      </div>
    )
  },
}

export const SearchableControlled: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const countries = [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
      { value: "it", label: "Italy" },
      { value: "es", label: "Spain" },
      { value: "nl", label: "Netherlands" },
      { value: "be", label: "Belgium" },
    ]

    return (
      <div className="w-[250px] space-y-2">
        <Label>Country</Label>
        <SelectWithSearch
          options={countries}
          value={value}
          onValueChange={setValue}
          placeholder="Select a country..."
          searchPlaceholder="Search countries..."
        />
        {value && (
          <p className="text-sm text-muted-foreground">
            Selected: {countries.find((c) => c.value === value)?.label}
          </p>
        )}
      </div>
    )
  },
}

export const SearchableLargeList: Story = {
  render: () => {
    const currencies = Array.from({ length: 50 }, (_, i) => ({
      value: `currency-${i + 1}`,
      label: `Currency ${i + 1}`,
    }))

    return (
      <div className="w-[250px] space-y-2">
        <Label>Currency (50 options)</Label>
        <SelectWithSearch
          options={currencies}
          placeholder="Select currency..."
          searchPlaceholder="Search currencies..."
          emptyMessage="No currencies found"
        />
      </div>
    )
  },
}

export const SearchableWithGroups: Story = {
  render: () => {
    const allOptions = [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
    ]

    return (
      <div className="w-[250px] space-y-2">
        <Label>Country with Group Label</Label>
        <SelectWithSearch
          options={allOptions}
          placeholder="Select country..."
          searchPlaceholder="Search countries..."
          groupLabel="Countries"
        />
      </div>
    )
  },
}

export const SearchableDisabled: Story = {
  render: () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ]

    return (
      <div className="space-y-4">
        <div className="w-[200px] space-y-2">
          <Label>Disabled Select</Label>
          <SelectWithSearch
            options={options}
            disabled
            placeholder="Disabled..."
          />
        </div>
        <div className="w-[200px] space-y-2">
          <Label>With Disabled Items</Label>
          <SelectWithSearch
            options={options}
            placeholder="Select..."
            searchPlaceholder="Search..."
          />
        </div>
      </div>
    )
  },
}

