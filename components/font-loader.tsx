"use client"

import { useEffect } from "react"

export function FontLoader() {
  useEffect(() => {
    if (typeof document === "undefined") return

    const existingLink = document.getElementById("renda-google-fonts")
    if (existingLink) return

    // Preconnect to Google Fonts
    const preconnect1 = document.createElement("link")
    preconnect1.rel = "preconnect"
    preconnect1.href = "https://fonts.googleapis.com"
    document.head.appendChild(preconnect1)

    const preconnect2 = document.createElement("link")
    preconnect2.rel = "preconnect"
    preconnect2.href = "https://fonts.gstatic.com"
    preconnect2.crossOrigin = "anonymous"
    document.head.appendChild(preconnect2)

    // Load fonts
    const fontLink = document.createElement("link")
    fontLink.id = "renda-google-fonts"
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Sora:wght@400;600;700&display=swap"
    fontLink.rel = "stylesheet"
    document.head.appendChild(fontLink)
  }, [])

  return null
}

