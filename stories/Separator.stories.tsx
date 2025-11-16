import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="text-foreground">Content above</div>
      <Separator />
      <div className="text-foreground">Content below</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-32">
      <div className="text-foreground">Left</div>
      <Separator orientation="vertical" />
      <div className="text-foreground">Right</div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <Card className="w-96">
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-foreground">Section Title</h3>
          <p className="text-sm text-muted-foreground">
            This is some content in the first section.
          </p>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold text-foreground">Another Section</h3>
          <p className="text-sm text-muted-foreground">
            This is content in the second section.
          </p>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold text-foreground">Third Section</h3>
          <p className="text-sm text-muted-foreground">
            This is content in the third section.
          </p>
        </div>
      </div>
    </Card>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="w-96">
      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>
    </div>
  ),
}

export const MultipleSeparators: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-2">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          Content for section 1
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold text-foreground mb-2">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          Content for section 2
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold text-foreground mb-2">Section 3</h3>
        <p className="text-sm text-muted-foreground">
          Content for section 3
        </p>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <p className="text-foreground">Default separator</p>
        <Separator className="my-4" />
      </div>
      <div>
        <p className="text-foreground">Thicker separator</p>
        <Separator className="my-4 h-0.5" />
      </div>
      <div>
        <p className="text-foreground">Colored separator</p>
        <Separator className="my-4 bg-primary" />
      </div>
      <div>
        <p className="text-foreground">Dashed separator</p>
        <Separator className="my-4 border-dashed border-t" />
      </div>
    </div>
  ),
}

export const VerticalLayout: Story = {
  render: () => (
    <div className="flex items-stretch h-48">
      <Card className="flex-1 rounded-r-none border-r-0">
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2">Left Panel</h3>
          <p className="text-sm text-muted-foreground">
            Content in the left panel
          </p>
        </div>
      </Card>
      <Separator orientation="vertical" />
      <Card className="flex-1 rounded-l-none border-l-0">
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2">Right Panel</h3>
          <p className="text-sm text-muted-foreground">
            Content in the right panel
          </p>
        </div>
      </Card>
    </div>
  ),
}

export const FormSections: Story = {
  render: () => (
    <Card className="w-96">
      <form className="p-6 space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold text-foreground mb-4">Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                Subscribe to newsletter
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="notifications" />
              <Label htmlFor="notifications" className="text-sm cursor-pointer">
                Enable notifications
              </Label>
            </div>
          </div>
        </div>
      </form>
    </Card>
  ),
}

export const ListSeparators: Story = {
  render: () => (
    <Card className="w-96">
      <div className="space-y-0 divide-y">
        <div className="p-4">
          <div className="font-medium text-foreground">Item 1</div>
          <div className="text-sm text-muted-foreground">Description for item 1</div>
        </div>
        <Separator />
        <div className="p-4">
          <div className="font-medium text-foreground">Item 2</div>
          <div className="text-sm text-muted-foreground">Description for item 2</div>
        </div>
        <Separator />
        <div className="p-4">
          <div className="font-medium text-foreground">Item 3</div>
          <div className="text-sm text-muted-foreground">Description for item 3</div>
        </div>
      </div>
    </Card>
  ),
}

