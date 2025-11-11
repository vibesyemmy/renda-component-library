# Renda Component Library - Usage Guide

## Table of Contents

1. [Installation](#installation)
2. [Component Patterns](#component-patterns)
3. [Form Handling](#form-handling)
4. [State Management](#state-management)
5. [Styling & Theming](#styling--theming)
6. [Accessibility](#accessibility)
7. [Common Patterns](#common-patterns)

## Installation

### In Your Renda Frontend Project

```bash
# If using as a separate package (future)
npm install @renda/components

# Current setup - use path reference
"dependencies": {
  "@renda/components": "file:../renda-component_library"
}
```

### Import Components

```tsx
// Individual imports (recommended)
import { Button } from "@renda/components"
import { InputField } from "@renda/components"
import { toast } from "@renda/components"

// Or from index
import { Button, InputField, toast } from "@renda/components"
```

## Component Patterns

### Button Usage

```tsx
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

// Primary action
<Button variant="default">Create Invoice</Button>

// With icon
<Button>
  <Icon name="Plus" size={16} />
  Create Invoice
</Button>

// Icon only
<Button size="icon">
  <Icon name="Settings" size={20} />
</Button>

// Loading state
<Button disabled>
  <Icon name="Loader" size={16} className="animate-spin" />
  Creating...
</Button>

// Destructive action
<Button variant="destructive">Delete Invoice</Button>
```

### Icon Usage

```tsx
import { Icon } from "@/components/ui/icon"

// Basic icon
<Icon name="Check" size={20} />

// With color
<Icon name="CheckCircle" className="text-success" />

// In button
<Button>
  <Icon name="Download" />
  Download PDF
</Button>
```

## Form Handling

### With React Hook Form

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { InputField, Button } from "@renda/components"

const schema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Invalid email address"),
  vatRate: z.number().min(0).max(100),
})

type FormData = z.infer<typeof schema>

function BusinessForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Business Name"
        {...register("businessName")}
        error={errors.businessName?.message}
        required
      />
      
      <InputField
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        required
      />
      
      <InputField
        label="VAT Rate (%)"
        type="number"
        {...register("vatRate", { valueAsNumber: true })}
        error={errors.vatRate?.message}
      />

      <Button type="submit">Save Settings</Button>
    </form>
  )
}
```

### Manual Form Handling

```tsx
import { useState } from "react"
import { InputField, Button, toast } from "@renda/components"

function SimpleForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.includes("@")) {
      setError("Invalid email address")
      return
    }

    toast.success("Email saved successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## State Management

### Toast Notifications

```tsx
import { toast } from "@/components/ui/toast"

// Success
toast.success("Invoice created successfully!")

// Error
toast.error("Failed to send invoice")

// Warning
toast.warning("Invoice is overdue")

// Info
toast.info("Payment link copied to clipboard")

// With title
toast.success("Your invoice has been sent", "Success")

// Custom duration
toast.info("Quick message", undefined, 2000) // 2 seconds
```

### Remember to add ToastContainer

```tsx
// In your root layout
import { ToastContainer } from "@/components/ui/toast"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
```

## Styling & Theming

### Using Tailwind Classes

```tsx
// Extend component styles
<Button className="w-full">Full Width Button</Button>

// Custom spacing
<StatCard className="mb-4" />

// Responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <StatCard title="Revenue" value="₦2.5M" />
</div>
```

### Custom Color Variants

```tsx
// Use theme colors
<Badge className="bg-success text-white">Paid</Badge>

// Custom badge
<Badge className="bg-blue-100 text-blue-700 border-blue-200">
  Custom Status
</Badge>
```

## Accessibility

### Keyboard Navigation

All components support keyboard navigation:
- **Tab**: Move focus between interactive elements
- **Enter/Space**: Activate buttons and checkboxes
- **Escape**: Close modals and dropdowns
- **Arrow keys**: Navigate through lists and menus

### Screen Reader Support

```tsx
// Always provide aria-label for icon buttons
<Button size="icon" aria-label="Delete invoice">
  <Icon name="Trash2" />
</Button>

// Use proper form labels
<InputField label="Email Address" /> // Creates accessible label automatically

// Add descriptions for complex interactions
<Button aria-describedby="delete-help">
  Delete
</Button>
<p id="delete-help" className="sr-only">
  This action cannot be undone
</p>
```

### Focus Management

```tsx
// Focus trap in modals (handled automatically by Dialog component)
<Dialog>
  <DialogContent>
    {/* Focus stays within dialog */}
  </DialogContent>
</Dialog>
```

## Common Patterns

### Dashboard Layout

```tsx
import { AppShell, StatCard } from "@renda/components"

function Dashboard() {
  const navigation = [
    { label: "Dashboard", icon: "Home", active: true },
    { label: "Invoices", icon: "FileText" },
    { label: "Clients", icon: "Users" },
  ]

  const user = {
    name: "John Doe",
    email: "john@example.com"
  }

  return (
    <AppShell navigation={navigation} user={user}>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Revenue"
            value="₦2,450,000"
            icon="DollarSign"
            variant="primary"
          />
          {/* More stat cards */}
        </div>
      </div>
    </AppShell>
  )
}
```

### Data Table with Pagination

```tsx
import { useState } from "react"
import { DataTable, Pagination, SearchInput } from "@renda/components"

function InvoiceList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState("")
  
  const itemsPerPage = 10
  const totalPages = Math.ceil(invoices.length / itemsPerPage)
  
  const currentInvoices = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Invoices</h1>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
          placeholder="Search invoices..."
        />
      </div>

      <DataTable
        data={currentInvoices}
        columns={columns}
        selectable
        onRowClick={(invoice) => console.log(invoice)}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
```

### Empty States

```tsx
import { EmptyState } from "@renda/components"

function InvoiceList() {
  if (invoices.length === 0) {
    return (
      <EmptyState
        icon="FileText"
        title="No invoices yet"
        description="Get started by creating your first invoice"
        action={{
          label: "Create Invoice",
          onClick: () => router.push("/invoices/new")
        }}
      />
    )
  }

  return <DataTable data={invoices} columns={columns} />
}
```

### Loading States

```tsx
import { Spinner } from "@renda/components"

function InvoiceList() {
  const { data: invoices, isLoading } = useQuery("invoices", fetchInvoices)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" label="Loading invoices..." />
      </div>
    )
  }

  return <DataTable data={invoices} columns={columns} />
}
```

### Error Handling

```tsx
import { Alert, Button } from "@renda/components"

function InvoiceList() {
  const { data, error, refetch } = useQuery("invoices", fetchInvoices)

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <Icon name="AlertCircle" size={16} />
        <div>
          <h5 className="font-semibold">Error loading invoices</h5>
          <p className="text-sm">{error.message}</p>
          <Button onClick={refetch} className="mt-2" size="sm">
            Try Again
          </Button>
        </div>
      </Alert>
    )
  }

  return <DataTable data={data} columns={columns} />
}
```

## Best Practices

1. **Always use TypeScript** - All components are fully typed
2. **Follow anti-nesting rules** - Keep code flat with early returns
3. **Use semantic HTML** - Components provide proper structure
4. **Test accessibility** - Use keyboard and screen readers
5. **Provide meaningful labels** - Help users understand interactions
6. **Handle loading states** - Show spinners during async operations
7. **Handle empty states** - Guide users when no data exists
8. **Handle errors gracefully** - Show helpful error messages
9. **Use toast notifications** - Provide feedback for user actions
10. **Keep mobile-first** - Design for small screens first

## Support

For issues or questions:
1. Check Storybook documentation
2. Review this usage guide
3. Contact the Renda development team

