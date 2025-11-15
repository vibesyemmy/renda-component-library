import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar, type SidebarNavItem } from "@/components/organisms/sidebar"
import { useState } from "react"

const meta = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const defaultNavItems: SidebarNavItem[] = [
  { label: "Home", href: "/home", icon: "Home" },
  { label: "My assets", href: "/assets", icon: "Wallet" },
  { label: "Transactions", href: "/transactions", icon: "ArrowLeftRight" },
  { label: "Explore", href: "/explore", icon: "Compass" },
  { label: "Derivatives", href: "/explore-perpetual-futures", icon: "TrendingUp" },
  { label: "More", href: "#more", icon: "MoreHorizontal" },
]

export const Default: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("/explore")

    return (
      <div className="flex h-screen bg-background">
        <Sidebar
          activeItem={activeItem}
          onNavigate={(href) => {
            setActiveItem(href)
            console.log("Navigated to:", href)
          }}
        />
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Sidebar Component Preview</h1>
            <p className="text-muted-foreground mb-8">
              Click on the navigation items to see the active state change.
            </p>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Renda-style navigation design</li>
                  <li>• Active state highlighting</li>
                  <li>• Advanced mode toggle switch</li>
                  <li>• Smooth hover transitions</li>
                  <li>• Fully accessible with ARIA labels</li>
                  <li>• Responsive and clean layout</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h2 className="text-xl font-semibold mb-3">Current Active Item</h2>
                <p className="text-primary font-medium">{activeItem}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const WithAdvancedToggle: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("/home")
    const [advancedMode, setAdvancedMode] = useState(false)

    return (
      <div className="flex h-screen bg-background">
        <Sidebar
          activeItem={activeItem}
          advancedMode={advancedMode}
          onAdvancedToggle={setAdvancedMode}
          onNavigate={(href) => {
            setActiveItem(href)
            console.log("Navigated to:", href)
          }}
        />
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Sidebar with Advanced Toggle</h1>
            <p className="text-muted-foreground mb-8">
              Toggle the Advanced switch to see it update. Current state:{" "}
              <span className="font-semibold text-primary">
                {advancedMode ? "Enabled" : "Disabled"}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  },
}

export const CustomNavigation: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("/dashboard")

    const customNav: SidebarNavItem[] = [
      { label: "Dashboard", href: "/dashboard", icon: "Home" },
      { label: "Invoices", href: "/invoices", icon: "FileText" },
      { label: "Clients", href: "/clients", icon: "Users" },
      { label: "Reports", href: "/reports", icon: "BarChart" },
      { label: "Settings", href: "/settings", icon: "Settings" },
    ]

    return (
      <div className="flex h-screen bg-background">
        <Sidebar
          activeItem={activeItem}
          navigation={customNav}
          onNavigate={(href) => {
            setActiveItem(href)
            console.log("Navigated to:", href)
          }}
        />
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Custom Navigation</h1>
            <p className="text-muted-foreground mb-8">
              Sidebar with custom navigation items for invoicing platform.
            </p>
          </div>
        </div>
      </div>
    )
  },
}

export const WithoutAdvancedToggle: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("/explore")

    return (
      <div className="flex h-screen bg-background">
        <Sidebar
          activeItem={activeItem}
          showAdvancedToggle={false}
          onNavigate={(href) => {
            setActiveItem(href)
            console.log("Navigated to:", href)
          }}
        />
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Sidebar without Advanced Toggle</h1>
            <p className="text-muted-foreground mb-8">
              Sidebar with the advanced toggle hidden.
            </p>
          </div>
        </div>
      </div>
    )
  },
}

export const CustomLogo: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState("/home")

    const customLogo = (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Renda
        </span>
      </div>
    )

    return (
      <div className="flex h-screen bg-background">
        <Sidebar
          activeItem={activeItem}
          logo={customLogo}
          onNavigate={(href) => {
            setActiveItem(href)
            console.log("Navigated to:", href)
          }}
        />
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Custom Logo</h1>
            <p className="text-muted-foreground mb-8">
              Sidebar with a custom logo component.
            </p>
          </div>
        </div>
      </div>
    )
  },
}

