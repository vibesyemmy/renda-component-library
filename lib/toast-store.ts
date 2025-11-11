import { create } from "zustand"

export type ToastType = "success" | "error" | "warning" | "info"

export interface Toast {
  id: string
  type: ToastType
  title?: string
  message: string
  duration?: number
}

interface ToastStore {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(7)
    const newToast = { ...toast, id }
    
    set((state) => ({
      toasts: [...state.toasts, newToast]
    }))
    
    const duration = toast.duration ?? 5000
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id)
        }))
      }, duration)
    }
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    })),
}))

export const toast = {
  success: (message: string, title?: string, duration?: number) =>
    useToastStore.getState().addToast({ type: "success", message, title, duration }),
  error: (message: string, title?: string, duration?: number) =>
    useToastStore.getState().addToast({ type: "error", message, title, duration }),
  warning: (message: string, title?: string, duration?: number) =>
    useToastStore.getState().addToast({ type: "warning", message, title, duration }),
  info: (message: string, title?: string, duration?: number) =>
    useToastStore.getState().addToast({ type: "info", message, title, duration }),
}

