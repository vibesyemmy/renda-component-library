import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "@/components/ui/icon"

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [
        // Basic Actions
        "Check",
        "X",
        "Plus",
        "Minus",
        "Edit",
        "Pencil",
        "Trash2",
        "Save",
        "Copy",
        "Share",
        "Download",
        "Upload",
        "Send",
        "Search",
        "Filter",
        "MoreHorizontal",
        "MoreVertical",
        // Navigation
        "ChevronDown",
        "ChevronUp",
        "ChevronLeft",
        "ChevronRight",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Menu",
        "Home",
        "Navigation",
        // User & Account
        "User",
        "Users",
        "UserPlus",
        "UserMinus",
        "UserCheck",
        "UserX",
        "LogIn",
        "LogOut",
        "Lock",
        "Unlock",
        "Shield",
        "ShieldCheck",
        // Communication
        "Mail",
        "MailOpen",
        "MessageSquare",
        "MessageCircle",
        "Phone",
        "PhoneCall",
        "Video",
        "VideoOff",
        // Files & Documents
        "FileText",
        "File",
        "FilePlus",
        "FileEdit",
        "Folder",
        "FolderPlus",
        "FolderOpen",
        "Image",
        "FileImage",
        "FileCode",
        // Status & Feedback
        "CheckCircle",
        "CheckCircle2",
        "AlertCircle",
        "AlertTriangle",
        "Info",
        "XCircle",
        "HelpCircle",
        "Loader2",
        "RefreshCw",
        // Finance & Business
        "DollarSign",
        "CreditCard",
        "Wallet",
        "TrendingUp",
        "TrendingDown",
        "BarChart",
        "PieChart",
        "Receipt",
        // Location & Time
        "MapPin",
        "Map",
        "Globe",
        "Calendar",
        "Clock",
        "Timer",
        "Bell",
        "BellOff",
        // Media & Content
        "Camera",
        "Music",
        "Play",
        "Pause",
        "Stop",
        "SkipForward",
        "SkipBack",
        "Volume2",
        "VolumeX",
        // Settings & Tools
        "Settings",
        "Cog",
        "Wrench",
        "Sliders",
        "Zap",
        "Power",
        // Visibility
        "Eye",
        "EyeOff",
      ],
    },
    size: {
      control: { type: "number", min: 12, max: 64, step: 4 },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Check",
    size: 24,
  },
}

export const Small: Story = {
  args: {
    name: "Check",
    size: 16,
  },
}

export const Large: Story = {
  args: {
    name: "Check",
    size: 48,
  },
}

export const CommonIcons: Story = {
  render: () => {
    const commonIcons = [
      // Basic Actions
      "Check",
      "X",
      "Plus",
      "Minus",
      "Edit",
      "Pencil",
      "Trash2",
      "Save",
      "Copy",
      "Share",
      "Download",
      "Upload",
      "Send",
      "Search",
      "Filter",
      "MoreHorizontal",
      "MoreVertical",
      // Navigation
      "ChevronDown",
      "ChevronUp",
      "ChevronLeft",
      "ChevronRight",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Menu",
      "Home",
      "Navigation",
      // User & Account
      "User",
      "Users",
      "UserPlus",
      "UserMinus",
      "UserCheck",
      "UserX",
      "LogIn",
      "LogOut",
      "Lock",
      "Unlock",
      "Shield",
      "ShieldCheck",
      // Communication
      "Mail",
      "MailOpen",
      "MessageSquare",
      "MessageCircle",
      "Phone",
      "PhoneCall",
      "Video",
      "VideoOff",
      // Files & Documents
      "FileText",
      "File",
      "FilePlus",
      "FileEdit",
      "Folder",
      "FolderPlus",
      "FolderOpen",
      "Image",
      "FileImage",
      "FileCode",
      // Status & Feedback
      "CheckCircle",
      "CheckCircle2",
      "AlertCircle",
      "AlertTriangle",
      "Info",
      "XCircle",
      "HelpCircle",
      "Loader2",
      "RefreshCw",
      // Finance & Business
      "DollarSign",
      "CreditCard",
      "Wallet",
      "TrendingUp",
      "TrendingDown",
      "BarChart",
      "PieChart",
      "Receipt",
      // Location & Time
      "MapPin",
      "Map",
      "Globe",
      "Calendar",
      "Clock",
      "Timer",
      "Bell",
      "BellOff",
      // Media & Content
      "Camera",
      "Music",
      "Play",
      "Pause",
      "Stop",
      "SkipForward",
      "SkipBack",
      "Volume2",
      "VolumeX",
      // Settings & Tools
      "Settings",
      "Cog",
      "Wrench",
      "Sliders",
      "Zap",
      "Power",
      // Visibility
      "Eye",
      "EyeOff",
    ]

    return (
      <div className="grid grid-cols-8 gap-4">
        {commonIcons.map((iconName) => (
          <div key={iconName} className="flex flex-col items-center gap-2 p-2">
            <Icon name={iconName as any} size={24} />
            <span className="text-xs text-muted-foreground text-center">{iconName}</span>
          </div>
        ))}
      </div>
    )
  },
}

export const WithColor: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="CheckCircle2" size={32} className="text-success" />
      <Icon name="AlertCircle" size={32} className="text-destructive" />
      <Icon name="AlertTriangle" size={32} className="text-warning" />
      <Icon name="Info" size={32} className="text-primary" />
    </div>
  ),
}

export const InvoiceIcons: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <Icon name="FileText" size={32} />
        <span className="text-sm">Invoice</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="DollarSign" size={32} />
        <span className="text-sm">Payment</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Users" size={32} />
        <span className="text-sm">Client</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="TrendingUp" size={32} />
        <span className="text-sm">Tax</span>
      </div>
    </div>
  ),
}

