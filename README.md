# Renda Component Library

A comprehensive, accessible component library for the Renda invoicing platform. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## 🎯 Overview

This component library provides reusable, accessible UI components following Renda's brand guidelines and anti-nesting coding principles. All components are mobile-first, fully typed with TypeScript, and documented in Storybook.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Run Next.js dev server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

### Viewing Components

Start Storybook to browse and interact with all components:

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore the component library.

## 📦 Component Categories

### Atoms (Primitives)
Basic building blocks that cannot be broken down further:
- **Button** - Primary, secondary, outline, ghost, and destructive variants
- **Input** - Text, email, number, password inputs with validation states
- **Badge** - Status indicators for invoices and labels
- **Icon** - Feather icon wrapper for consistent iconography
- **Toast** - Notification system with success, error, warning, info types
- **Spinner** - Loading indicators in multiple sizes
- **Alert** - Contextual feedback messages
- **Avatar** - User profile images
- **Checkbox, Radio, Switch** - Form controls
- **Textarea, Select** - Form inputs
- **Label, Separator** - Layout helpers
- **Tooltip** - Contextual help

### Molecules (Composed Components)
Components composed from atoms for specific use cases:
- **FormField** - Label + input + error message wrapper
- **InputField** - Complete input with integrated validation
- **TextareaField** - Complete textarea with integrated validation
- **StatCard** - Dashboard metric cards with trends
- **InvoiceStatusBadge** - Color-coded invoice status indicators
- **EmptyState** - No-data placeholders with call-to-action
- **SearchInput** - Search field with clear functionality

### Organisms (Complex Components)
Feature-complete, complex components:
- **AppShell** - Complete application layout with sidebar and navigation
- **DataTable** - Sortable, selectable data tables
- **Pagination** - Page navigation with ellipsis

## 🎨 Design System

### Brand Colors

```css
--color-primary: #009c5f     /* Emerald Green */
--color-accent: #ffc107      /* Warm Gold */
--color-success: #16a34a
--color-warning: #f59e0b
--color-destructive: #ef4444
--color-background: #f9fafb  /* Off White */
--color-foreground: #1e1e1e  /* Charcoal */
```

### Typography

- **Font Family**: Inter (400, 600, 700)
- **Sizes**: 14px, 16px, 20px, 24px, 32px
- **Line Height**: 1.25

### Spacing Scale

4px, 8px, 12px, 16px, 24px, 32px

### Border Radius

- `sm`: 6px
- `md`: 10px
- `lg`: 16px

## 💻 Usage Examples

### Button

```tsx
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

<Button variant="default">
  <Icon name="Plus" size={16} />
  Create Invoice
</Button>
```

### Form Field

```tsx
import { InputField } from "@/components/molecules/form-field"

<InputField
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  error="Please enter a valid email"
  required
/>
```

### Stat Card

```tsx
import { StatCard } from "@/components/molecules/stat-card"

<StatCard
  title="Total Revenue"
  value="₦2,450,000"
  icon="DollarSign"
  variant="primary"
  trend={{ value: 12.5, label: "from last month" }}
/>
```

### Toast Notifications

```tsx
import { toast } from "@/components/ui/toast"

toast.success("Invoice created successfully!")
toast.error("Failed to send invoice")
toast.warning("Invoice is overdue")
toast.info("Payment link copied")
```

### Data Table

```tsx
import { DataTable } from "@/components/organisms/data-table"
import { InvoiceStatusBadge } from "@/components/molecules/invoice-status-badge"

const columns = [
  { key: "number", label: "Invoice #", sortable: true },
  { key: "client", label: "Client", sortable: true },
  {
    key: "status",
    label: "Status",
    render: (invoice) => <InvoiceStatusBadge status={invoice.status} />
  }
]

<DataTable
  data={invoices}
  columns={columns}
  selectable
  onRowClick={(invoice) => console.log(invoice)}
/>
```

### App Shell

```tsx
import { AppShell } from "@/components/organisms/app-shell"

const navigation = [
  { label: "Dashboard", icon: "Home", active: true, onClick: () => {} },
  { label: "Invoices", icon: "FileText", onClick: () => {} },
  { label: "Clients", icon: "Users", onClick: () => {} },
]

const user = {
  name: "John Doe",
  email: "john@example.com"
}

<AppShell navigation={navigation} user={user}>
  <YourPageContent />
</AppShell>
```

## ♿ Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader friendly with ARIA labels
- ✅ Focus management for modals and dialogs
- ✅ Color contrast ratios > 4.5:1
- ✅ Semantic HTML structure

## 🧪 Testing

Run tests:

```bash
npm test
```

Components include:
- Unit tests for utility functions
- Integration tests for complex components
- Accessibility tests in Storybook

## 📝 Code Guidelines

This library follows strict anti-nesting principles:

1. **Maximum 2-3 levels of nesting**
2. **Early returns** for validation (guard clauses)
3. **Extract nested logic** into separate functions
4. **Array methods** instead of nested loops
5. **Optional chaining** (`?.`) and nullish coalescing (`??`)
6. **Strategy patterns** for complex conditionals

## 🔧 Customization

### Extending Components

All components accept `className` props for custom styling:

```tsx
<Button className="w-full">Full Width Button</Button>
```

### Theme Customization

Modify design tokens in `app/globals.css`:

```css
@theme {
  --color-primary: #your-color;
  --radius-md: 12px;
}
```

## 📚 Documentation

- **Storybook**: Interactive component documentation at `http://localhost:6006`
- **Plan.md**: Implementation roadmap and checklist
- **Type Definitions**: Full TypeScript support with IntelliSense

## 🤝 Contributing

1. Follow the anti-nesting guidelines
2. Add Storybook stories for new components
3. Include TypeScript types
4. Test accessibility with keyboard and screen readers
5. Update this README with new components

## 📄 License

Private - For Renda project use only

## 🔗 Related Projects

- **renda-backend**: Backend API and services
- **renda-frontend**: Main application using this component library

---

Built with ❤️ for African SMEs
