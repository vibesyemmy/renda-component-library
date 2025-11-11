import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Design System/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Renda's typography system using Sora for text and Space Mono for numbers.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const TypographyExample = ({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) => (
  <div className="space-y-2">
    <p className="text-xs text-muted-foreground font-mono">{className}</p>
    <div className={className}>{children}</div>
  </div>
)

export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Font Families</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Renda uses two font families: Sora for text and Space Mono for numbers.
        </p>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Sora (Text Font)</h3>
            <p className="text-base">
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
            <p className="text-sm text-muted-foreground">
              Used for all body text, headings, labels, and UI elements. Provides
              excellent readability and a modern, professional appearance.
            </p>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-mono text-muted-foreground">
                font-family: var(--font-sans), system-ui, sans-serif
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Space Mono (Numbers Font)</h3>
            <p className="text-base font-number">
              ₦2,450,000 • 42 • 12.5% • 1,234.56
            </p>
            <p className="text-sm text-muted-foreground">
              Used for all numeric values, currency amounts, percentages, and
              financial data. Ensures consistent number alignment and readability.
            </p>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-mono text-muted-foreground">
                font-family: var(--font-mono), monospace
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Apply with: <code className="font-mono bg-muted px-1 rounded">font-number</code> class
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const FontSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Font Sizes</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Typography scale for consistent sizing across the application.
        </p>
        
        <div className="space-y-6">
          <TypographyExample
            label="Heading 1"
            className="text-2xl font-bold"
          >
            Heading 1 (32px)
          </TypographyExample>

          <TypographyExample
            label="Heading 2"
            className="text-xl font-bold"
          >
            Heading 2 (24px)
          </TypographyExample>

          <TypographyExample
            label="Heading 3"
            className="text-lg font-semibold"
          >
            Heading 3 (20px)
          </TypographyExample>

          <TypographyExample
            label="Body"
            className="text-base"
          >
            Body text (16px) - Default size for paragraphs and content
          </TypographyExample>

          <TypographyExample
            label="Small"
            className="text-sm"
          >
            Small text (14px) - Used for labels, captions, and secondary information
          </TypographyExample>
        </div>
      </div>
    </div>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Font Weights</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Available font weights for Sora font family.
        </p>
        
        <div className="space-y-4">
          <TypographyExample
            label="Normal (400)"
            className="text-base font-normal"
          >
            Normal weight - Regular body text and content
          </TypographyExample>

          <TypographyExample
            label="Semibold (600)"
            className="text-base font-semibold"
          >
            Semibold weight - Emphasis and medium importance
          </TypographyExample>

          <TypographyExample
            label="Bold (700)"
            className="text-base font-bold"
          >
            Bold weight - Headings and strong emphasis
          </TypographyExample>
        </div>
      </div>
    </div>
  ),
}

export const NumberFormatting: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Number Formatting</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Numbers use Space Mono font for consistent alignment and readability.
        </p>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Currency</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold font-number">₦2,450,000</p>
              <p className="text-xl font-semibold font-number">₦350,000</p>
              <p className="text-base font-number">₦75,000</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              <code className="font-mono bg-muted px-1 rounded">className="font-number"</code>
            </p>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Percentages</h3>
            <div className="space-y-2">
              <p className="text-xl font-semibold font-number text-success">+12.5%</p>
              <p className="text-lg font-number text-destructive">-5.2%</p>
              <p className="text-base font-number">8.1%</p>
            </div>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Counts & Quantities</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold font-number">42</p>
              <p className="text-xl font-semibold font-number">156</p>
              <p className="text-base font-number">1,234</p>
            </div>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Decimals</h3>
            <div className="space-y-2">
              <p className="text-xl font-semibold font-number">1,234.56</p>
              <p className="text-lg font-number">99.99</p>
              <p className="text-base font-number">0.75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Real-world examples of typography in Renda components.
        </p>
        
        <div className="space-y-6">
          {/* Stat Card Example */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Stat Card</h3>
            <div className="bg-card border rounded-md p-6 space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </p>
              <p className="text-2xl font-bold tracking-tight font-number">
                ₦2,450,000
              </p>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium font-number text-success">
                  +12.5%
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Numbers use <code className="font-mono bg-muted px-1 rounded">font-number</code> class
            </p>
          </div>

          {/* Invoice Amount Example */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Invoice Amount</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Subtotal:</span>
                <span className="text-base font-semibold font-number">₦250,000</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">VAT (7.5%):</span>
                <span className="text-base font-semibold font-number">₦18,750</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t">
                <span className="text-base font-semibold">Total:</span>
                <span className="text-xl font-bold font-number">₦268,750</span>
              </div>
            </div>
          </div>

          {/* Table Example */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Data Table</h3>
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-semibold">Invoice #</th>
                    <th className="text-left p-3 text-sm font-semibold">Amount</th>
                    <th className="text-left p-3 text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 text-sm">INV-001</td>
                    <td className="p-3 text-sm font-number">₦250,000</td>
                    <td className="p-3 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-success/10 text-success text-xs font-semibold">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 text-sm">INV-002</td>
                    <td className="p-3 text-sm font-number">₦150,000</td>
                    <td className="p-3 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
                        Sent
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Complete Typography Scale</h2>
        <p className="text-sm text-muted-foreground mb-6">
          All available typography combinations.
        </p>
        
        <div className="space-y-8">
          {/* Headings */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Headings</h3>
            <div className="space-y-4">
              <TypographyExample
                label="H1"
                className="text-2xl font-bold"
              >
                Heading 1 - 32px Bold
              </TypographyExample>
              <TypographyExample
                label="H2"
                className="text-xl font-bold"
              >
                Heading 2 - 24px Bold
              </TypographyExample>
              <TypographyExample
                label="H3"
                className="text-lg font-semibold"
              >
                Heading 3 - 20px Semibold
              </TypographyExample>
            </div>
          </section>

          {/* Body Text */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Body Text</h3>
            <div className="space-y-4">
              <TypographyExample
                label="Base"
                className="text-base"
              >
                Base text (16px) - Default body text size
              </TypographyExample>
              <TypographyExample
                label="Small"
                className="text-sm"
              >
                Small text (14px) - Labels, captions, helper text
              </TypographyExample>
            </div>
          </section>

          {/* Numbers */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Numbers (Space Mono)</h3>
            <div className="space-y-4">
              <TypographyExample
                label="Large Number"
                className="text-2xl font-bold font-number"
              >
                ₦2,450,000
              </TypographyExample>
              <TypographyExample
                label="Medium Number"
                className="text-xl font-semibold font-number"
              >
                ₦350,000
              </TypographyExample>
              <TypographyExample
                label="Base Number"
                className="text-base font-number"
              >
                ₦75,000
              </TypographyExample>
              <TypographyExample
                label="Small Number"
                className="text-sm font-number"
              >
                12.5%
              </TypographyExample>
            </div>
          </section>
        </div>
      </div>
    </div>
  ),
}

export const CSSVariables: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">CSS Variables</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Typography CSS variables available in the design system.
        </p>
        
        <div className="bg-muted/50 rounded-md p-6 font-mono text-sm space-y-2">
          <div>
            <span className="text-muted-foreground">--font-sans:</span>{" "}
            <span className="text-foreground">var(--font-sans), system-ui, sans-serif</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-mono:</span>{" "}
            <span className="text-foreground">var(--font-mono), monospace</span>
          </div>
          <div className="pt-4 border-t mt-4">
            <span className="text-muted-foreground">--font-size-sm:</span>{" "}
            <span className="text-foreground">0.875rem (14px)</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-size-base:</span>{" "}
            <span className="text-foreground">1rem (16px)</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-size-lg:</span>{" "}
            <span className="text-foreground">1.25rem (20px)</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-size-xl:</span>{" "}
            <span className="text-foreground">1.5rem (24px)</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-size-2xl:</span>{" "}
            <span className="text-foreground">2rem (32px)</span>
          </div>
          <div className="pt-4 border-t mt-4">
            <span className="text-muted-foreground">--font-weight-normal:</span>{" "}
            <span className="text-foreground">400</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-weight-semibold:</span>{" "}
            <span className="text-foreground">600</span>
          </div>
          <div>
            <span className="text-muted-foreground">--font-weight-bold:</span>{" "}
            <span className="text-foreground">700</span>
          </div>
          <div className="pt-4 border-t mt-4">
            <span className="text-muted-foreground">--line-height-base:</span>{" "}
            <span className="text-foreground">1.25</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

