import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback seed="JD">JD</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Avatar seed="John Doe" useNiceAvatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const WithInitials: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback seed="John Doe">{getInitials("John Doe")}</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xs">
          <AvatarFallback seed="JD">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback seed="JD">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md">
          <AvatarFallback seed="JD">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback seed="JD">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xl">
          <AvatarFallback seed="JD">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xl</span>
      </div>
    </div>
  ),
}

export const SizesWithImages: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xs" seed="Alice" useNiceAvatar>
          <AvatarFallback seed="Alice">AL</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm" seed="Bob" useNiceAvatar>
          <AvatarFallback seed="Bob">BO</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" seed="Charlie" useNiceAvatar>
          <AvatarFallback seed="Charlie">CH</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" seed="Diana" useNiceAvatar>
          <AvatarFallback seed="Diana">DI</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xl" seed="Edward" useNiceAvatar>
          <AvatarFallback seed="Edward">ED</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xl</span>
      </div>
    </div>
  ),
}

export const WithNiceAvatar: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar seed="John Doe" useNiceAvatar size="md" />
      <Avatar seed="Jane Smith" useNiceAvatar size="md" />
      <Avatar seed="Bob Johnson" useNiceAvatar size="md" />
      <Avatar seed="Alice Williams" useNiceAvatar size="md" />
      <Avatar seed="Charlie Brown" useNiceAvatar size="md" />
    </div>
  ),
}

export const NiceAvatarSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar seed={`User ${size}`} useNiceAvatar size={size} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const InitialsExamples: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback seed="John Doe">{getInitials("John Doe")}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback seed="Jane Smith">{getInitials("Jane Smith")}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback seed="Bob Johnson">{getInitials("Bob Johnson")}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback seed="Alice Williams">{getInitials("Alice Williams")}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback seed="Charlie Brown">{getInitials("Charlie Brown")}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const ImageExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Nice Avatars:</span>
        <Avatar seed="John" useNiceAvatar />
        <Avatar seed="Jane" useNiceAvatar />
        <Avatar seed="Bob" useNiceAvatar />
        <Avatar seed="Alice" useNiceAvatar />
        <Avatar seed="Charlie" useNiceAvatar />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Regular Images:</span>
        <Avatar>
          <AvatarImage src="/avatar_example.png" alt="Sample Avatar" />
          <AvatarFallback seed="Sample Avatar">SA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/avatar_example.png" alt="Sample Avatar 2" />
          <AvatarFallback seed="Sample Avatar 2">SA2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/avatar_example.png" alt="Sample Avatar 3" />
          <AvatarFallback seed="Sample Avatar 3">SA3</AvatarFallback>
        </Avatar>
      </div>
    </div>
  ),
}

export const FallbackBehavior: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar seed="Valid User" useNiceAvatar>
            <AvatarFallback seed="Valid User">VF</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">With Nice Avatar</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarImage src="https://invalid-url.com/image.jpg" alt="Invalid" />
            <AvatarFallback seed="Invalid User">IF</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">Fallback (Invalid URL)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarFallback seed="No Avatar">NO</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">Initials Only</span>
        </div>
      </div>
    </div>
  ),
}

export const InTable: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar size="sm" seed="John Doe" useNiceAvatar>
                  <AvatarFallback seed="John Doe">JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
            </TableCell>
            <TableCell>john.doe@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarImage src="/avatar_example.png" alt="Jane Smith" />
                  <AvatarFallback seed="Jane Smith">JS</AvatarFallback>
                </Avatar>
                <span>Jane Smith</span>
              </div>
            </TableCell>
            <TableCell>jane.smith@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar size="sm" seed="Bob Johnson" useNiceAvatar>
                  <AvatarFallback seed="Bob Johnson">BJ</AvatarFallback>
                </Avatar>
                <span>Bob Johnson</span>
              </div>
            </TableCell>
            <TableCell>bob.johnson@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

