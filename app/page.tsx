"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { StatCard } from "@/components/molecules/stat-card"
import { Icon } from "@/components/ui/icon"

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <h1 className="text-4xl font-bold">Renda Component Library</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, accessible component library built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => window.open("http://localhost:6006", "_blank")}>
              <Icon name="Book" size={16} />
              View Storybook
            </Button>
            <Button variant="outline" onClick={() => toast.info("Component library for Renda invoicing platform")}>
              <Icon name="Info" size={16} />
              About
            </Button>
          </div>
        </div>

        {/* Quick Demo Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Quick Demo</h2>
          
          {/* Stat Cards */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stat Cards</h3>
            <div className="flex flex-wrap gap-4">
              <StatCard
                symbol="Revenue"
                price="₦2,450,000"
                percent={12.5}
                subtitle="from last month"
                icon="TrendingUp"
                variant="gain"
                size="md"
              />
              <StatCard
                symbol="Outstanding"
                price="₦350,000"
                percent={-5.2}
                subtitle="from last month"
                icon="TrendingDown"
                variant="loss"
                size="md"
              />
              <StatCard
                symbol="Paid"
                price="42"
                percent={8.1}
                subtitle="invoices"
                icon="CheckCircle2"
                variant="gain"
                size="md"
              />
              <StatCard
                symbol="Overdue"
                price="5"
                percent={0}
                subtitle="invoices"
                icon="AlertCircle"
                variant="neutral"
                size="md"
              />
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" onClick={() => toast.success("Primary button clicked!")}>
                <Icon name="Plus" size={16} />
                Create Invoice
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">
                <Icon name="Trash2" size={16} />
                Delete
              </Button>
              <Button size="icon">
                <Icon name="Settings" size={20} />
              </Button>
            </div>
          </div>

          {/* Toast Notifications */}
          <div>
            <h3 className="text-lg font-medium mb-4">Toast Notifications</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => toast.success("Invoice created successfully!")}
              >
                <Icon name="CheckCircle2" size={16} />
                Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.error("Failed to send invoice")}
              >
                <Icon name="AlertCircle" size={16} />
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.warning("Invoice is overdue")}
              >
                <Icon name="AlertTriangle" size={16} />
                Warning Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast.info("Payment link copied to clipboard")}
              >
                <Icon name="Info" size={16} />
                Info Toast
              </Button>
            </div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-6 space-y-2">
              <Icon name="Book" size={32} className="text-primary" />
              <h3 className="font-semibold">Storybook</h3>
              <p className="text-sm text-muted-foreground">
                Interactive component documentation with examples
              </p>
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => window.open("http://localhost:6006", "_blank")}
              >
                View Storybook →
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 space-y-2">
              <Icon name="FileText" size={32} className="text-primary" />
              <h3 className="font-semibold">Usage Guide</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive guide with code examples and patterns
              </p>
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => toast.info("Check USAGE_GUIDE.md in the repository")}
              >
                Read Guide →
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 space-y-2">
              <Icon name="Code" size={32} className="text-primary" />
              <h3 className="font-semibold">Implementation Plan</h3>
              <p className="text-sm text-muted-foreground">
                Development roadmap and component checklist
              </p>
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => toast.info("Check plan.md in the repository")}
              >
                View Plan →
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>Built with ❤️ for African SMEs</p>
          <p className="mt-2">
            Renda Component Library • Next.js 16 • React 19 • Tailwind CSS v4 • shadcn/ui
          </p>
        </footer>
      </div>
    </div>
  )
}
