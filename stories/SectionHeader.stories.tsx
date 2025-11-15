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
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="Explore"
        avatarSeed="John Doe"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
      />
    )
  },
}

export const WithBackButton: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="Bitcoin"
        showBackButton
        avatarSeed="Bitcoin"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
      />
    )
  },
}

export const CustomActions: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="Dashboard"
        actions={[
          { icon: "Settings", label: "Settings", ariaLabel: "Settings" },
          { icon: "HelpCircle", label: "Help", ariaLabel: "Help" },
        ]}
        avatarSeed="User"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
      />
    )
  },
}

export const WithAvatarImage: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="Profile"
        avatarImage="/avatar_example.png"
        avatarAlt="Profile"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
      />
    )
  },
}

export const LongTitle: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <SectionHeader
        title="This is a very long title that should truncate with ellipsis when it exceeds the available space"
        avatarSeed="Long Title"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={() => setSearchValue("")}
      />
    )
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
  render: () => {
    const [searchValue1, setSearchValue1] = useState("")
    const [searchValue2, setSearchValue2] = useState("")
    const [searchValue3, setSearchValue3] = useState("")
    const [searchValue4, setSearchValue4] = useState("")

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium mb-2 text-muted-foreground">
            Standard Variant
          </h3>
          <SectionHeader
            title="Explore"
            avatarSeed="John Doe"
            searchValue={searchValue1}
            onSearchChange={setSearchValue1}
            onSearchClear={() => setSearchValue1("")}
          />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2 text-muted-foreground">
            With Back Button
          </h3>
          <SectionHeader
            title="Bitcoin"
            showBackButton
            avatarSeed="Bitcoin"
            searchValue={searchValue2}
            onSearchChange={setSearchValue2}
            onSearchClear={() => setSearchValue2("")}
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
            searchValue={searchValue3}
            onSearchChange={setSearchValue3}
            onSearchClear={() => setSearchValue3("")}
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
            searchValue={searchValue4}
            onSearchChange={setSearchValue4}
            onSearchClear={() => setSearchValue4("")}
          />
        </div>
      </div>
    )
  },
}

