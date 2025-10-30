"use client"

import { useEffect, useState } from "react"

export function useScrollStartProgress(maxDistance: number = 240): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = typeof window !== 'undefined' ? window.scrollY : 0
      const p = Math.min(1, Math.max(0, y / maxDistance))
      setProgress(p)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [maxDistance])

  return progress
} 