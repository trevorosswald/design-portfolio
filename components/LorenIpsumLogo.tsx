'use client'

import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setStyleIndex((prev) => (prev + 1) % FONT_STYLES.length)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  const current = FONT_STYLES[styleIndex]

  return (
    <div className="flex items-center justify-center bg-[#5bb98c] rounded h-full">
      <p 
        className="text-[24px] leading-[32px] tracking-[-0.46px] text-[#171717]"
        style={{ 
          fontFamily: current.family,
          fontWeight: current.weight,
          fontStyle: current.italic ? 'italic' : 'normal'
        }}
      >
        Loren Ipsum
      </p>
    </div>
  )
}
