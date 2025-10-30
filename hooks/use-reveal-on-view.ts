"use client"

import { useEffect, useRef } from "react"

export function useRevealOnView(classWhenVisible: string = "is-visible") {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"))

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.getAttribute("data-delay")
            if (delay) {
              el.style.animationDelay = `${parseInt(delay, 10)}ms`
            }
            el.classList.add(classWhenVisible)
            io.unobserve(el)
          }
        }
      },
      { root: null, threshold: 0.15 }
    )

    elements.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [classWhenVisible])

  return { containerRef }
} 