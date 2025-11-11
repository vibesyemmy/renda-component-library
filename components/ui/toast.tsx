"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToastStore, type Toast, type ToastType } from "@/lib/toast-store"

const toastIcons: Record<ToastType, React.ComponentType<{ size?: number }>> = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const toastStyles: Record<ToastType, string> = {
  success: "bg-success/10 border-success/20 text-success",
  error: "bg-destructive/10 border-destructive/20 text-destructive",
  warning: "bg-warning/10 border-warning/20 text-warning",
  info: "bg-primary/10 border-primary/20 text-primary",
}

const ToastItem = ({ toast }: { toast: Toast }) => {
  const removeToast = useToastStore((state) => state.removeToast)
  const IconComponent = toastIcons[toast.type]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className={cn(
        "flex items-start gap-3 rounded-md border p-4 shadow-lg min-w-[300px] max-w-md",
        toastStyles[toast.type]
      )}
    >
      <IconComponent size={20} className="shrink-0 mt-0.5" />
      
      <div className="flex-1 space-y-1">
        {toast.title && (
          <p className="font-semibold text-sm leading-none">{toast.title}</p>
        )}
        <p className="text-sm opacity-90">{toast.message}</p>
      </div>

      <button
        onClick={() => removeToast(toast.id)}
        className="shrink-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Close toast"
      >
        <X size={16} />
      </button>
    </motion.div>
  )
}

export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts)

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export { useToastStore, toast } from "@/lib/toast-store"

