import type { Meta, StoryObj } from "@storybook/react"
import { SectionHeader } from "@/components/organisms/section-header"
import { useState } from "react"

const meta = {
  title: "Organisms/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "fullwidth",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    showBackButton: {
      control: "boolean",
    },
    avatarSeed: {
      control: "text",
    },
    avatarImage: {
      control: "text",
    },
  },
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Explore",
    avatarSeed: "John Doe",
  },
}

export const WithBackButton: Story = {
  args: {
    title: "Bitcoin",
    showBackButton: true,
    avatarSeed: "Bitcoin",
  },
}

export const CustomActions: Story = {
  args: {
    title: "Dashboard",
    actions: [
      { icon: "Settings", label: "Settings", ariaLabel: "Settings" },
      { icon: "HelpCircle", label: "Help", ariaLabel: "Help" },
    ],
    avatarSeed: "User",
  },
}

export const WithAvatarImage: Story = {
  args: {
    title: "Profile",
    avatarImage: "/avatar_example.png",
    avatarAlt: "Profile",
  },
}

export const LongTitle: Story = {
  args: {
    title: "This is a very long title that should truncate with ellipsis when it exceeds the available space",
    avatarSeed: "Long Title",
  },
}

export const WithSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="Explore"
        avatarSeed="John Doe"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
        searchPlaceholder="Search assets..."
      />
    )
  },
}

export const WithoutSearch: Story = {
  args: {
    title: "Settings",
    showSearch: false,
    avatarSeed: "Settings",
  },
}

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState("explore")
    const [searchValue, setSearchValue] = useState("")

    return (
      <div className="space-y-4">
        {currentPage === "explore" ? (
          <SectionHeader
            title="Explore"
            avatarSeed="John Doe"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearchClear={() => setSearchValue("")}
            onAvatarClick={() => alert("Avatar clicked")}
            actions={[
              {
                icon: "RefreshCw",
                label: "Refresh",
                onClick: () => alert("Refresh clicked"),
              },
              {
                icon: "Bell",
                label: "Notifications",
                onClick: () => alert("Notifications clicked"),
              },
            ]}
          />
        ) : (
          <SectionHeader
            title="Bitcoin"
            showBackButton
            onBackClick={() => setCurrentPage("explore")}
            avatarSeed="Bitcoin"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearchClear={() => setSearchValue("")}
            onAvatarClick={() => alert("Avatar clicked")}
            actions={[
              {
                icon: "RefreshCw",
                label: "Refresh",
                onClick: () => alert("Refresh clicked"),
              },
              {
                icon: "Bell",
                label: "Notifications",
                onClick: () => alert("Notifications clicked"),
              },
            ]}
          />
        )}
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Current page: {currentPage}
          </p>
          <p className="text-sm text-muted-foreground">
            Search value: {searchValue || "(empty)"}
          </p>
          <button
            onClick={() =>
              setCurrentPage(currentPage === "explore" ? "bitcoin" : "explore")
            }
            className="mt-2 text-sm text-primary hover:underline"
          >
            Toggle page
          </button>
        </div>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">
          Standard Variant
        </h3>
        <SectionHeader title="Explore" avatarSeed="John Doe" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">
          With Back Button
        </h3>
        <SectionHeader
          title="Bitcoin"
          showBackButton
          avatarSeed="Bitcoin"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">
          With Custom Actions
        </h3>
        <SectionHeader
          title="Settings"
          actions={[
            { icon: "Download", label: "Download", ariaLabel: "Download" },
            { icon: "Upload", label: "Upload", ariaLabel: "Upload" },
          ]}
          avatarSeed="Settings"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">
          With Avatar Image
        </h3>
        <SectionHeader
          title="Profile"
          avatarImage="/avatar_example.png"
          avatarAlt="Profile"
        />
      </div>
    </div>
  ),
}

