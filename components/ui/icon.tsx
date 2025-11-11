import * as React from "react"
import * as LucideIcons from "lucide-react"
import { cn } from "@/lib/utils"

export type IconName = keyof typeof LucideIcons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number | string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 16, className, ...props }, ref) => {
    const IconComponent = LucideIcons[name]
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in Lucide icons`)
      return null
    }

    return (
      <IconComponent
        ref={ref}
        size={size}
        className={cn("shrink-0", className)}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon }

