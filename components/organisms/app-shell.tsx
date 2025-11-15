"use client"

import * as React from "react"
import { Icon, type IconName } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { SectionHeader, type SectionHeaderAction } from "@/components/organisms/section-header"
import { Sidebar, type SidebarNavItem } from "@/components/organisms/sidebar"
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
  headerTitle?: string
  headerActions?: SectionHeaderAction[]
  showSearch?: boolean
  searchValue?: string
  onSearchChange?: (value: string) => void
  onSearchClear?: () => void
  searchPlaceholder?: string
  activeItem?: string
  onNavigate?: (href: string) => void
  showAdvancedToggle?: boolean
  advancedMode?: boolean
  onAdvancedToggle?: (enabled: boolean) => void
}

export const AppShell = ({
  children,
  navigation,
  logo,
  user,
  onMenuToggle,
  headerTitle = "Dashboard",
  headerActions,
  showSearch = true,
  searchValue,
  onSearchChange,
  onSearchClear,
  searchPlaceholder = "Search...",
  activeItem,
  onNavigate,
  showAdvancedToggle = true,
  advancedMode = false,
  onAdvancedToggle,
}: AppShellProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  
  // Determine initial active item from props or navigation
  const getInitialActiveItem = () => {
    if (activeItem) return activeItem
    const activeNavItem = navigation.find((item) => item.active)
    if (activeNavItem?.href) return activeNavItem.href
    return navigation[0]?.href || "/home"
  }
  
  const [currentActiveItem, setCurrentActiveItem] = React.useState(getInitialActiveItem())

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
    onMenuToggle?.()
  }

  const handleNavigate = (href: string) => {
    setCurrentActiveItem(href)
    onNavigate?.(href)
    
    // Find and call onClick handler if exists
    const navItem = navigation.find((item) => item.href === href)
    navItem?.onClick?.()
    
    // Close sidebar on mobile after navigation
    if (isSidebarOpen) {
      setIsSidebarOpen(false)
    }
  }

  // Convert NavItem[] to SidebarNavItem[]
  const sidebarNavigation: SidebarNavItem[] = navigation.map((item) => ({
    label: item.label,
    href: item.href || `#${item.label.toLowerCase().replace(/\s+/g, "-")}`,
    icon: item.icon,
    isActive: item.active || currentActiveItem === item.href,
  }))

  const defaultLogo = logo || (
    <img
      src="/logo/logo-with-text-light.svg"
      alt="Renda"
      className="h-8 w-auto"
    />
  )

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar
          activeItem={currentActiveItem}
          onNavigate={handleNavigate}
          navigation={sidebarNavigation}
          logo={defaultLogo}
          showAdvancedToggle={showAdvancedToggle}
          advancedMode={advancedMode}
          onAdvancedToggle={onAdvancedToggle}
        />
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
        {/* Top Bar - Mobile */}
        <div className="lg:hidden">
          <header className="h-16 border-b bg-card flex items-center px-4">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <Icon name="Menu" size={20} />
            </Button>
            <div className="flex-1" />
          </header>
        </div>

        {/* Section Header - Desktop */}
        <div className="hidden lg:block">
          <SectionHeader
            title={headerTitle}
            showSearch={showSearch}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onSearchClear={onSearchClear}
            searchPlaceholder={searchPlaceholder}
            actions={headerActions}
            avatarSeed={user?.name}
            avatarImage={user?.avatar}
            avatarAlt={user?.name}
          />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
