'use client'

import { useState, useEffect, useRef } from 'react'

const FONT_STYLES = [
  { family: 'Inter, sans-serif', weight: 400, italic: false },
  { family: 'Georgia, serif', weight: 700, italic: true },
  { family: 'Courier, monospace', weight: 400, italic: false },
  { family: 'Inter, sans-serif', weight: 700, italic: false },
  { family: 'Georgia, serif', weight: 400, italic: false },
  { family: 'Courier, monospace', weight: 700, italic: true },
  { family: 'Inter, sans-serif', weight: 500, italic: true },
  { family: 'Georgia, serif', weight: 400, italic: true },
  { family: 'Courier, monospace', weight: 400, italic: true },
]

export default function LorenIpsumLogo() {
  const [styleIndex, setStyleIndex] = useState(0)
  const [fontSize, setFontSize] = useState(24)
  const containerRef = useRef<HTMLDivElement>(null)

  // Cycle through font styles
  useEffect(() => {
    const interval = setInterval(() => {
      setStyleIndex((prev) => (prev + 1) % FONT_STYLES.length)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  // Scale font size based on container width
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth
        // Base: 24px at 208px width, scale proportionally
        const newSize = Math.max(12, (width / 208) * 24)
        setFontSize(newSize)
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const current = FONT_STYLES[styleIndex]

  return (
    <div ref={containerRef} className="flex items-center justify-center bg-[#5bb98c] rounded h-full">
      <p 
        className="tracking-[-0.02em] text-[#171717]"
        style={{ 
          fontFamily: current.family,
          fontWeight: current.weight,
          fontStyle: current.italic ? 'italic' : 'normal',
          fontSize: `${fontSize}px`,
          lineHeight: 1.33,
        }}
      >
        Loren Ipsum
      </p>
    </div>
  )
}
