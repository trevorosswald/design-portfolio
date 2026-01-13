'use client'

import React, { useRef, useState, useEffect, ReactNode } from 'react'

interface CoverScalerProps {
  children: ReactNode
  width?: number
  height?: number
}

/**
 * CoverScaler - Scales content to fit container width while maintaining aspect ratio.
 * Used for portfolio project cover images/mockups.
 */
export default function CoverScaler({ 
  children, 
  width = 540, 
  height = 384 
}: CoverScalerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setScale(containerWidth / width)
      }
      // Check if mobile (below sm breakpoint = 640px)
      setIsMobile(window.innerWidth < 640)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [width])

  // Desktop: use aspect ratio (54px horizontal padding, 32px vertical padding)
  // Mobile: use exact scaled height to avoid excess vertical space
  const desktopOuterWidth = width + 54 * 2   // 648
  const desktopOuterHeight = height + 32 * 2 // 448
  const scaledHeight = height * scale
  
  return (
    <div 
      className="cover-wrapper bg-gray-3 rounded-lg w-full p-3 sm:px-[54px] sm:py-8"
      style={!isMobile ? { aspectRatio: `${desktopOuterWidth}/${desktopOuterHeight}` } : undefined}
    >
      <div 
        ref={containerRef}
        className={`w-full relative rounded flex items-center justify-center ${!isMobile ? 'h-full' : ''}`}
        style={isMobile ? { height: `${scaledHeight}px` } : undefined}
      >
        <div 
          className="cover-content origin-center"
          style={{ transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
