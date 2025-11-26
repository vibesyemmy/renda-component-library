import type { Meta, StoryObj } from "@storybook/react"
import { Banner } from "@/components/organisms/banner"
import { useState } from "react"

const meta = {
  title: "Organisms/Banner",
  component: Banner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "cookie", "info", "success", "warning", "destructive"],
      description: "Visual style variant of the banner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    position: {
      control: "select",
      options: ["inline", "top", "bottom"],
      description: "Position of the banner on the page",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inline" },
      },
    },
    title: {
      control: "text",
      description: "Optional title text for the banner",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "Main content text or React node for the banner",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
    icon: {
      control: "text",
      description: "Icon name from lucide-react to display",
      table: {
        type: { summary: "IconName" },
      },
    },
    showDismiss: {
      control: "boolean",
      description: "Whether to show the dismiss button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onDismiss: {
      action: "dismissed",
      description: "Callback function when banner is dismissed",
      table: {
        type: { summary: "() => void" },
      },
    },
    actions: {
      control: "object",
      description: "Array of action buttons to display",
      table: {
        type: { summary: "BannerAction[]" },
      },
    },
    link: {
      control: "object",
      description: "Optional link to display in the banner",
      table: {
        type: { summary: "BannerLink" },
      },
    },
    customizeLink: {
      control: "object",
      description: "Optional customize link (used in cookie variant)",
      table: {
        type: { summary: "BannerLink" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        type: { summary: "string" },
      },
    },
    "aria-label": {
      control: "text",
      description: "Accessibility label for the banner",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

// Default Story - Uses Controls
export const Default: Story = {
  args: {
    variant: "default",
    position: "inline",
    title: "Banner Title",
    description: "This is a default banner with configurable properties. Use the controls panel to customize it.",
    showDismiss: true,
    onDismiss: () => alert("Banner dismissed"),
  },
}

// Cookie Banner Variant
export const CookieBanner: Story = {
  parameters: {
    layout: "fullscreen",
    padding: 0,
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", paddingBottom: "120px" }}>
        <div style={{ padding: "20px" }}>
          <p className="text-sm text-muted-foreground mb-4">
            Scroll down to see the cookie banner at the bottom of the viewport.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) {
      return (
        <div style={{ padding: "20px" }}>
          <div className="text-sm text-muted-foreground">Cookie banner dismissed</div>
        </div>
      )
    }

    return (
      <Banner
        variant="cookie"
        position="bottom"
        description={
          <>
            We use cookies to make your interactions with our website more meaningful. They help us better understand how our websites are used, so we can tailor content for you. For more information about the different cookies we are using, read the{" "}
            <a
              href="#"
              className="text-primary underline underline-offset-4 hover:opacity-80 font-medium"
              onClick={(e) => {
                e.preventDefault()
                alert("Cookie Policy link clicked")
              }}
            >
              Cookie Policy
            </a>
            . To change your cookie settings and preferences, click the{" "}
            <strong className="text-primary font-medium">Customize Cookies</strong> button.
          </>
        }
        showDismiss
        onDismiss={() => setDismissed(true)}
        customizeLink={{
          label: "Customize Cookies",
          href: "#",
          onClick: (e) => {
            e.preventDefault()
            alert("Customize Cookies clicked")
          },
        }}
        actions={[
          {
            label: "Reject",
            onClick: () => {
              alert("Cookies rejected")
              setDismissed(true)
            },
            variant: "outline",
            size: "default",
          },
          {
            label: "Accept",
            onClick: () => {
              alert("Cookies accepted")
              setDismissed(true)
            },
            variant: "default",
            size: "default",
          },
        ]}
      />
    )
  },
}

// Cookie Banner Inline
export const CookieBannerInline: Story = {
  args: {
    title: "Stress me out",
    icon: "",
    showDismiss: false
  },

  render: () => (
    <div className="space-y-4 max-w-4xl">
      <Banner
        variant="cookie"
        position="inline"
        description={
          <>
            We use cookies to make your interactions with our website more meaningful. They help us better understand how our websites are used, so we can tailor content for you. For more information about the different cookies we are using, read the{" "}
            <a
              href="#"
              className="text-primary underline underline-offset-4 hover:opacity-80 font-medium"
              onClick={(e) => {
                e.preventDefault()
                alert("Cookie Policy link clicked")
              }}
            >
              Cookie Policy
            </a>
            . To change your cookie settings and preferences, click the{" "}
            <strong className="text-primary font-medium">Customize Cookies</strong> button.
          </>
        }
        showDismiss
        onDismiss={() => alert("Dismissed")}
        customizeLink={{
          label: "Customize Cookies",
          href: "#",
          onClick: (e) => {
            e.preventDefault()
            alert("Customize Cookies clicked")
          },
        }}
        actions={[
          {
            label: "Reject",
            onClick: () => alert("Rejected"),
            variant: "outline",
            size: "default",
          },
          {
            label: "Accept",
            onClick: () => alert("Accepted"),
            variant: "default",
            size: "default",
          },
        ]}
      />
    </div>
  )
}

// Info Banner
export const InfoBanner: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="info"
        position="inline"
        icon="Info"
        title="New feature available"
        description="We've just released a new dashboard feature. Check it out in your settings."
        showDismiss
        onDismiss={() => alert("Dismissed")}
        actions={[
          {
            label: "Learn More",
            onClick: () => alert("Learn more clicked"),
            variant: "default",
            size: "default",
          },
        ]}
      />
    </div>
  ),
}

// Success Banner
export const SuccessBanner: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="success"
        position="inline"
        icon="CheckCircle"
        title="Payment successful"
        description="Your invoice has been paid successfully. The payment will be reflected in your account within 24 hours."
        showDismiss
        onDismiss={() => alert("Dismissed")}
      />
    </div>
  ),
}

// Warning Banner
export const WarningBanner: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="warning"
        position="inline"
        icon="AlertTriangle"
        title="Action required"
        description="Your subscription will expire in 7 days. Please renew to continue using our services."
        showDismiss
        onDismiss={() => alert("Dismissed")}
        actions={[
          {
            label: "Renew Now",
            onClick: () => alert("Renew clicked"),
            variant: "default",
            size: "default",
          },
        ]}
      />
    </div>
  ),
}

// Destructive Banner
export const DestructiveBanner: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="destructive"
        position="inline"
        icon="AlertCircle"
        title="Error occurred"
        description="We couldn't process your request. Please try again or contact support if the problem persists."
        showDismiss
        onDismiss={() => alert("Dismissed")}
        actions={[
          {
            label: "Try Again",
            onClick: () => alert("Try again clicked"),
            variant: "default",
            size: "default",
          },
          {
            label: "Contact Support",
            onClick: () => alert("Contact support clicked"),
            variant: "outline",
            size: "default",
          },
        ]}
      />
    </div>
  ),
}

// Default Banner
export const DefaultBanner: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        position="inline"
        title="Welcome to Renda"
        description="Get started by creating your first invoice. It only takes a few minutes."
        showDismiss
        onDismiss={() => alert("Dismissed")}
        actions={[
          {
            label: "Get Started",
            onClick: () => alert("Get started clicked"),
            variant: "default",
            size: "default",
          },
        ]}
      />
    </div>
  ),
}

// Banner with Custom Icon
export const BannerWithCustomIcon: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="info"
        position="inline"
        icon="Bell"
        title="Notifications enabled"
        description="You'll receive email notifications for important updates and reminders."
        showDismiss
        onDismiss={() => alert("Dismissed")}
      />
    </div>
  ),
}

// Banner with Multiple Actions
export const BannerWithMultipleActions: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="info"
        position="inline"
        icon="Info"
        title="Update available"
        description="A new version of the app is available with improved features and bug fixes."
        showDismiss
        onDismiss={() => alert("Dismissed")}
        actions={[
          {
            label: "Update Now",
            onClick: () => alert("Update clicked"),
            variant: "default",
            size: "default",
          },
          {
            label: "Later",
            onClick: () => alert("Later clicked"),
            variant: "outline",
            size: "default",
          },
          {
            label: "Learn More",
            onClick: () => alert("Learn more clicked"),
            variant: "ghost",
            size: "default",
          },
        ]}
      />
    </div>
  ),
}

// Banner with Link Only
export const BannerWithLinkOnly: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="info"
        position="inline"
        description="Check out our new features and improvements in the latest update."
        link={{
          label: "Read release notes",
          href: "#",
          target: "_blank",
        }}
        showDismiss
        onDismiss={() => alert("Dismissed")}
      />
    </div>
  ),
}

// Banner without Dismiss
export const BannerWithoutDismiss: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="success"
        position="inline"
        icon="CheckCircle"
        title="Changes saved"
        description="Your preferences have been updated successfully."
      />
    </div>
  ),
}

// Banner with React Node Description
export const BannerWithReactNodeDescription: Story = {
  render: () => (
    <div className="max-w-4xl">
      <Banner
        variant="warning"
        position="inline"
        icon="AlertTriangle"
        title="Maintenance scheduled"
        description={
          <div>
            <p className="mb-2">We'll be performing scheduled maintenance on:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Date: March 15, 2024</li>
              <li>Time: 2:00 AM - 4:00 AM EST</li>
              <li>Duration: Approximately 2 hours</li>
            </ul>
          </div>
        }
        showDismiss
        onDismiss={() => alert("Dismissed")}
      />
    </div>
  ),
}

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-4xl">
      <Banner
        variant="default"
        position="inline"
        title="Default Banner"
        description="This is a default banner with neutral styling."
        showDismiss
        onDismiss={() => {}}
      />
      <Banner
        variant="cookie"
        position="inline"
        title="Cookie Banner"
        description="We use cookies to enhance your experience."
        showDismiss
        onDismiss={() => {}}
      />
      <Banner
        variant="info"
        position="inline"
        icon="Info"
        title="Info Banner"
        description="This is an informational banner."
        showDismiss
        onDismiss={() => {}}
      />
      <Banner
        variant="success"
        position="inline"
        icon="CheckCircle"
        title="Success Banner"
        description="Operation completed successfully."
        showDismiss
        onDismiss={() => {}}
      />
      <Banner
        variant="warning"
        position="inline"
        icon="AlertTriangle"
        title="Warning Banner"
        description="Please review this important information."
        showDismiss
        onDismiss={() => {}}
      />
      <Banner
        variant="destructive"
        position="inline"
        icon="AlertCircle"
        title="Error Banner"
        description="An error occurred. Please try again."
        showDismiss
        onDismiss={() => {}}
      />
    </div>
  ),
}

