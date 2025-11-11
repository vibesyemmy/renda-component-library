"use client"

import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  icon: IconName
  href?: string
  active?: boolean
  onClick?: () => void
}

interface AppShellProps {
  children: React.ReactNode
  navigation: NavItem[]
  logo?: React.ReactNode
  user?: {
    name: string
    email: string
    avatar?: string
  }
  onMenuToggle?: () => void
}

export const AppShell = ({
  children,
  navigation,
  logo,
  user,
  onMenuToggle,
}: AppShellProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
    onMenuToggle?.()
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            {logo || (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="font-bold text-lg">Renda</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.onClick}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      item.active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon name={item.icon} size={20} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Section */}
          {user && (
            <div className="border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <div className="bg-primary text-primary-foreground flex items-center justify-center h-full w-full">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b bg-card flex items-center px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-2"
            onClick={toggleSidebar}
          >
            <Icon name="Menu" size={24} />
          </Button>
          <div className="flex-1" />
          {/* Add additional header content here */}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}

