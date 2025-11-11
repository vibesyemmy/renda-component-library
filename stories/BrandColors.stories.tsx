import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Design System/Brand Colors",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Renda's brand color palette. Use these colors consistently across all components and interfaces.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorSwatch = ({
  name,
  value,
  description,
  className,
}: {
  name: string
  value: string
  description?: string
  className?: string
}) => (
  <div className="space-y-3">
    <div
      className={`h-24 w-full rounded-md border shadow-sm ${className}`}
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="font-semibold text-sm">{name}</p>
      <p className="text-xs text-muted-foreground font-mono mt-1">{value}</p>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  </div>
)

export const PrimaryColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Primary Brand Colors</h2>
        <p className="text-sm text-muted-foreground mb-6">
          These are the core brand colors that represent Renda's identity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorSwatch
            name="Coinbase Blue (Primary)"
            value="#0052ff"
            description="Main brand color - Coinbase blue, represents trust, technology, and financial innovation"
            className="bg-[#0052ff]"
          />
          <ColorSwatch
            name="Coinbase Accent Blue"
            value="#4285f4"
            description="Secondary brand color - lighter blue accent for highlights and secondary actions"
            className="bg-[#4285f4]"
          />
        </div>
      </div>
    </div>
  ),
}

export const NeutralColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Neutral Colors</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Used for backgrounds, text, and UI elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorSwatch
            name="Off White (Background)"
            value="#f9fafb"
            description="Main background color"
            className="bg-[#f9fafb] border-2"
          />
          <ColorSwatch
            name="Charcoal (Foreground)"
            value="#1e1e1e"
            description="Primary text color"
            className="bg-[#1e1e1e]"
          />
          <ColorSwatch
            name="Cool Gray (Muted)"
            value="#6b7280"
            description="Secondary text and muted elements"
            className="bg-[#6b7280]"
          />
        </div>
      </div>
    </div>
  ),
}

export const StatusColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Status Colors</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Used to communicate system states, feedback, and alerts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorSwatch
            name="Success"
            value="#16a34a"
            description="Positive actions, completed states, confirmations"
            className="bg-[#16a34a]"
          />
          <ColorSwatch
            name="Warning"
            value="#f59e0b"
            description="Caution, pending states, important notices"
            className="bg-[#f59e0b]"
          />
          <ColorSwatch
            name="Destructive"
            value="#ef4444"
            description="Errors, destructive actions, critical alerts"
            className="bg-[#ef4444]"
          />
        </div>
      </div>
    </div>
  ),
}

export const ColorPalette: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Renda Brand Color Palette</h2>
        <p className="text-muted-foreground">
          Complete color system for the Renda invoicing platform. All colors are
          designed to meet WCAG AA accessibility standards.
        </p>
      </div>

      <div className="space-y-8">
        {/* Primary Colors */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Primary Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ColorSwatch
              name="Coinbase Blue"
              value="#0052ff"
              description="Primary brand color - Use for primary CTAs, links, and brand elements"
              className="bg-[#0052ff]"
            />
            <ColorSwatch
              name="Coinbase Accent Blue"
              value="#4285f4"
              description="Accent color - Use for highlights, badges, and secondary actions"
              className="bg-[#4285f4]"
            />
          </div>
        </section>

        {/* Neutral Colors */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Neutral Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorSwatch
              name="Off White"
              value="#f9fafb"
              description="Background color"
              className="bg-[#f9fafb] border-2"
            />
            <ColorSwatch
              name="Charcoal"
              value="#1e1e1e"
              description="Primary text color"
              className="bg-[#1e1e1e]"
            />
            <ColorSwatch
              name="Cool Gray"
              value="#6b7280"
              description="Muted text and secondary elements"
              className="bg-[#6b7280]"
            />
          </div>
        </section>

        {/* Status Colors */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Status Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColorSwatch
              name="Success"
              value="#16a34a"
              description="Success states, completed actions"
              className="bg-[#16a34a]"
            />
            <ColorSwatch
              name="Warning"
              value="#f59e0b"
              description="Warnings, pending states"
              className="bg-[#f59e0b]"
            />
            <ColorSwatch
              name="Destructive"
              value="#ef4444"
              description="Errors, destructive actions"
              className="bg-[#ef4444]"
            />
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-primary mb-1">
                Primary Color Usage
              </p>
              <p className="text-sm text-muted-foreground">
                Use primary color (#0052ff) for main call-to-action buttons,
                links, and brand elements.
              </p>
            </div>

            <div className="p-4 rounded-md bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium mb-1">Accent Color Usage</p>
              <p className="text-sm text-muted-foreground">
                Use accent color (#4285f4) for highlights, badges, and secondary
                interactive elements.
              </p>
            </div>

            <div className="p-4 rounded-md bg-success/10 border border-success/20">
              <p className="text-sm font-medium text-success mb-1">
                Success State
              </p>
              <p className="text-sm text-muted-foreground">
                Use success color (#16a34a) for positive feedback, completed
                states, and confirmations.
              </p>
            </div>
          </div>
        </section>

        {/* CSS Variables */}
        <section>
          <h3 className="text-lg font-semibold mb-4">CSS Variables</h3>
          <div className="bg-muted/50 rounded-md p-4 font-mono text-sm">
            <pre className="space-y-1">
              <div>
                <span className="text-muted-foreground">--color-primary:</span>{" "}
                <span className="text-primary">#0052ff</span>
              </div>
              <div>
                <span className="text-muted-foreground">--color-accent:</span>{" "}
                <span className="text-accent">#4285f4</span>
              </div>
              <div>
                <span className="text-muted-foreground">--color-success:</span>{" "}
                <span className="text-success">#16a34a</span>
              </div>
              <div>
                <span className="text-muted-foreground">--color-warning:</span>{" "}
                <span className="text-warning">#f59e0b</span>
              </div>
              <div>
                <span className="text-muted-foreground">
                  --color-destructive:
                </span>{" "}
                <span className="text-destructive">#ef4444</span>
              </div>
            </pre>
          </div>
        </section>
      </div>
    </div>
  ),
}

