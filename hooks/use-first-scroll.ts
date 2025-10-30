"use client"

import { useEffect, useState } from "react"

export function useFirstScroll(): boolean {
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    if (activated) return

    const handleFirst = () => {
      setActivated(true)
    }

    // Listen to common user scroll gestures
    window.addEventListener("wheel", handleFirst, { passive: true })
    window.addEventListener("touchmove", handleFirst, { passive: true })
    window.addEventListener("scroll", handleFirst, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleFirst)
      window.removeEventListener("touchmove", handleFirst)
      window.removeEventListener("scroll", handleFirst)
    }
  }, [activated])

  return activated
} 