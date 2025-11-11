# Renda Component Library Implementation Plan

## Overview
Building a reusable component library for Renda using Next.js, Tailwind CSS v4, shadcn/ui, and following anti-nesting principles for clean, maintainable code.

## Project Context
- **Product**: Renda - Simple invoices, smart compliance for African SMEs
- **Target**: Mobile-first invoicing SaaS with localized tax calculations
- **Tech Stack**: Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, TypeScript
- **Design System**: Inter font, emerald green primary (#009C5F), warm gold accent (#FFC107)

## Implementation Phases

### ✅ Phase 1: Foundations (COMPLETED)
- [x] Initialize Next.js with TypeScript and Tailwind CSS v4
- [x] Configure Renda design tokens (colors, spacing, typography, border radius)
- [x] Set up shadcn/ui with component structure
- [x] Install dependencies (Feather icons, Framer Motion, Zustand, React Query, React Hook Form, Zod)
- [x] Initialize Storybook for component documentation and visual testing
- [x] Create plan.md tracking document

### Phase 2: Atomic Components
Core UI primitives that form the foundation of all other components.

**Atoms to Implement:**
- [ ] Button (primary, secondary, outline, ghost, destructive variants)
- [ ] Input (text, email, number, password with validation states)
- [ ] Textarea (with character count support)
- [ ] Select (dropdown with search)
- [ ] Checkbox
- [ ] Radio Group
- [ ] Toggle/Switch
- [ ] Badge (status indicators: draft, sent, paid, overdue)
- [ ] Alert (info, success, warning, error)
- [ ] Tooltip
- [ ] Toast (notification system)
- [ ] Icon Wrapper (Feather icons only)
- [ ] Avatar (user profile images)
- [ ] Separator/Divider

**Technical Requirements:**
- Use `class-variance-authority` for variant management
- Maximum 2 levels of nesting (anti-nesting rules)
- Early returns for validation
- Optional chaining for safe property access
- Full TypeScript typing
- Accessibility (ARIA labels, keyboard navigation, focus management)
- Storybook stories with all variants documented

### Phase 3: Molecular Components
Composed components built from atoms for specific use cases.

**Molecules to Implement:**
- [ ] FormField (label + input + error message wrapper)
- [ ] StatCard (dashboard metric card)
- [ ] InvoiceStatusBadge (with color coding)
- [ ] ClientCard (contact info + quick actions)
- [ ] LineItemRow (invoice line item display/edit)
- [ ] EmptyState (no data placeholder)
- [ ] LoadingSpinner (with optional text)
- [ ] SearchInput (with icon and clear button)
- [ ] DatePicker (calendar selection)
- [ ] CurrencyInput (formatted numeric input)
- [ ] FilterGroup (tab-style filters for lists)

**Technical Requirements:**
- Compose from atoms using clean composition patterns
- No prop drilling - use context where appropriate
- Form integration with React Hook Form
- Validation with Zod schemas
- Responsive design (mobile-first)
- Storybook stories showing real-world usage

### Phase 4: Organisms & Templates
Complex, feature-complete components and page layouts.

**Organisms to Implement:**
- [ ] AppShell (sidebar navigation + top bar + content area)
- [ ] Modal/Dialog (with focus trap and backdrop)
- [ ] Drawer/Sheet (slide-in panel for mobile)
- [ ] Table (sortable, filterable data table)
- [ ] Pagination
- [ ] OnboardingWizard (multi-step form flow)
- [ ] InvoiceEditor (line items table + totals + tax breakdown)
- [ ] NavigationMenu (responsive sidebar)
- [ ] DropdownMenu (action menus)
- [ ] Popover (contextual overlays)

**Templates to Implement:**
- [ ] DashboardLayout (with stat cards + recent activity)
- [ ] ListPageLayout (with filters + table + pagination)
- [ ] FormPageLayout (centered form with progress)
- [ ] SettingsLayout (tabs + form sections)

**Technical Requirements:**
- State management with Zustand for complex UI state
- Framer Motion for smooth transitions
- Proper cleanup in useEffect hooks
- Error boundaries for fault tolerance
- Deep accessibility (keyboard shortcuts, screen reader support)
- Responsive breakpoints (mobile, tablet, desktop)

### Phase 5: Quality Assurance & Documentation
Testing, documentation, and finalization.

**Tasks:**
- [ ] Write comprehensive Storybook documentation for all components
- [ ] Add accessibility checklist to each component story
- [ ] Set up Vitest unit tests for utility functions
- [ ] Add integration tests for complex components
- [ ] Create usage guidelines document
- [ ] Document theming/customization approach
- [ ] Add examples for common patterns (forms, data tables, modals)
- [ ] Performance audit (bundle size, render optimization)
- [ ] Create component API reference
- [ ] Add migration guide for future updates

## Design Tokens Reference

### Colors
```css
--color-primary: #009c5f (Emerald Green)
--color-accent: #ffc107 (Warm Gold)
--color-background: #f9fafb (Off White)
--color-foreground: #1e1e1e (Charcoal)
--color-muted: #6b7280 (Cool Gray)
--color-success: #16a34a
--color-warning: #f59e0b
--color-destructive: #ef4444
```

### Spacing Scale
```css
4px, 8px, 12px, 16px, 24px, 32px
```

### Border Radius
```css
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 16px
```

### Typography
```css
Font: Inter (400, 600, 700)
Sizes: 14px, 16px, 20px, 24px, 32px
Line Height: 1.25
```

## Anti-Nesting Guidelines
All code must follow these principles:

1. **Maximum 2-3 levels of nesting**
2. **Use early returns** for validation (guard clauses)
3. **Extract nested logic** into separate functions
4. **Use array methods** instead of nested loops
5. **Use optional chaining** (`?.`) and nullish coalescing (`??`)
6. **Use strategy patterns** for complex conditionals
7. **No functions longer than 20-25 lines** with complex nesting

## File Structure
```
renda-component_library/
├── app/                      # Next.js App Router
│   ├── globals.css          # Design tokens & base styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Demo page
├── components/
│   └── ui/                  # shadcn components (atoms)
├── lib/
│   ├── utils.ts             # Utility functions (cn helper)
│   └── validators.ts        # Zod schemas
├── hooks/                   # Custom React hooks
├── stories/                 # Storybook stories
├── .storybook/             # Storybook configuration
├── components.json          # shadcn configuration
└── plan.md                 # This file
```

## Next Steps
1. Add core shadcn components (button, input, badge, etc.)
2. Create Storybook stories for each atomic component
3. Build custom atoms specific to Renda (icon wrapper, stat card)
4. Compose molecules from atoms
5. Implement complex organisms and templates
6. Add comprehensive documentation and tests

## Notes
- Focus on code quality over speed
- Every component must be accessible (AA compliance)
- Mobile-first responsive design
- Keep components framework-agnostic where possible
- Document all props and variants in Storybook
- Use Feather icons exclusively (per user preference)
- Future: Figma tokens can be added later by exporting from tailwind.config

