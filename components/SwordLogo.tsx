'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

const SWORD_WIDTH = 80
const SWORD_HEIGHT = 80

// Hue rotation values for color shifts (only on corner hits)
const HUE_ROTATIONS = [0, 30, 90, 180, 270] // normal, gold, green, blue, purple

// Pixel art sword as SVG - converted from individual divs
const SwordSVG = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Handle - dark outlines */}
    <rect x="4.71" y="75.29" width="4.706" height="4.706" fill="#171717"/>
    <rect x="9.41" y="75.29" width="4.706" height="4.706" fill="#171717"/>
    <rect x="0" y="75.29" width="4.706" height="4.706" fill="#171717"/>
    
    {/* Handle - grays */}
    <rect x="4.71" y="70.59" width="4.706" height="4.706" fill="#858585"/>
    <rect x="4.71" y="65.88" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="0" y="70.59" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="0" y="65.88" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="9.41" y="70.59" width="4.706" height="4.706" fill="#171717"/>
    
    {/* Handle - browns */}
    <rect x="9.41" y="65.88" width="4.706" height="4.706" fill="#a07653"/>
    <rect x="9.41" y="61.18" width="4.706" height="4.706" fill="#886349"/>
    <rect x="14.12" y="61.18" width="4.706" height="4.706" fill="#ad7f58"/>
    <rect x="14.12" y="56.47" width="4.706" height="4.706" fill="#886349"/>
    <rect x="18.82" y="56.47" width="4.706" height="4.706" fill="#a07653"/>
    <rect x="14.12" y="65.88" width="4.706" height="4.706" fill="#3f2c22"/>
    <rect x="18.82" y="61.18" width="4.706" height="4.706" fill="#3f2c22"/>
    <rect x="23.53" y="56.47" width="4.706" height="4.706" fill="#3f2c22"/>
    
    {/* Blade guard - grays */}
    <rect x="23.53" y="51.76" width="4.706" height="4.706" fill="#858585"/>
    <rect x="23.53" y="47.06" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="18.82" y="47.06" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="18.82" y="42.35" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="18.82" y="51.76" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="14.12" y="47.06" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="14.12" y="42.35" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="9.41" y="37.65" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="14.12" y="37.65" width="4.706" height="4.706" fill="#858585"/>
    <rect x="9.41" y="32.94" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="14.12" y="32.94" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="18.82" y="37.65" width="4.706" height="4.706" fill="#6f6f6f"/>
    
    {/* Blade - main grays */}
    <rect x="28.24" y="37.65" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="32.94" y="32.94" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="37.65" y="28.24" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="42.35" y="23.53" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="47.06" y="18.82" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="51.76" y="14.12" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="56.47" y="9.41" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="61.18" y="4.71" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="65.88" y="0" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="70.59" y="0" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="75.29" y="0" width="4.706" height="4.706" fill="#6f6f6f"/>
    
    {/* Blade - light highlights */}
    <rect x="28.24" y="51.76" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="28.24" y="47.06" width="4.706" height="4.706" fill="#858585"/>
    <rect x="32.94" y="42.35" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="28.24" y="42.35" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="32.94" y="37.65" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="37.65" y="32.94" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="42.35" y="28.24" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="47.06" y="23.53" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="51.76" y="18.82" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="56.47" y="14.12" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="61.18" y="9.41" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="65.88" y="4.71" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="70.59" y="4.71" width="4.706" height="4.706" fill="#f8f8f8"/>
    <rect x="70.59" y="9.41" width="4.706" height="4.706" fill="#f8f8f8"/>
    
    {/* Blade - medium grays */}
    <rect x="37.65" y="37.65" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="42.35" y="32.94" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="47.06" y="28.24" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="51.76" y="23.53" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="56.47" y="18.82" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="61.18" y="14.12" width="4.706" height="4.706" fill="#8f8f8f"/>
    <rect x="65.88" y="9.41" width="4.706" height="4.706" fill="#8f8f8f"/>
    
    {/* Blade - silver highlights */}
    <rect x="32.94" y="47.06" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="37.65" y="42.35" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="42.35" y="37.65" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="47.06" y="32.94" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="51.76" y="28.24" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="56.47" y="23.53" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="61.18" y="18.82" width="4.706" height="4.706" fill="#c7c7c7"/>
    <rect x="65.88" y="14.12" width="4.706" height="4.706" fill="#c7c7c7"/>
    
    {/* Blade - dark outlines */}
    <rect x="28.24" y="56.47" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="32.94" y="56.47" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="37.65" y="61.18" width="4.706" height="4.706" fill="#6f6f6f"/>
    <rect x="32.94" y="51.76" width="4.706" height="4.706" fill="#171717"/>
    <rect x="37.65" y="47.06" width="4.706" height="4.706" fill="#171717"/>
    <rect x="42.35" y="42.35" width="4.706" height="4.706" fill="#171717"/>
    <rect x="47.06" y="37.65" width="4.706" height="4.706" fill="#171717"/>
    <rect x="51.76" y="32.94" width="4.706" height="4.706" fill="#171717"/>
    <rect x="56.47" y="28.24" width="4.706" height="4.706" fill="#171717"/>
    <rect x="61.18" y="23.53" width="4.706" height="4.706" fill="#171717"/>
    <rect x="65.88" y="18.82" width="4.706" height="4.706" fill="#171717"/>
    <rect x="70.59" y="14.12" width="4.706" height="4.706" fill="#171717"/>
    <rect x="75.29" y="9.41" width="4.706" height="4.706" fill="#171717"/>
    <rect x="75.29" y="4.71" width="4.706" height="4.706" fill="#171717"/>
    <rect x="23.53" y="42.35" width="4.706" height="4.706" fill="#171717"/>
    <rect x="37.65" y="56.47" width="4.706" height="4.706" fill="#171717"/>
    <rect x="42.35" y="61.18" width="4.706" height="4.706" fill="#171717"/>
    <rect x="37.65" y="65.88" width="4.706" height="4.706" fill="#171717"/>
    <rect x="42.35" y="65.88" width="4.706" height="4.706" fill="#171717"/>
    <rect x="28.24" y="61.18" width="4.706" height="4.706" fill="#171717"/>
    <rect x="32.94" y="61.18" width="4.706" height="4.706" fill="#171717"/>
  </svg>
)

export default function SwordLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isReturning, setIsReturning] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const velocityRef = useRef({ dx: 1.2, dy: 0.8 })
  const [hueRotation, setHueRotation] = useState(0)
  const animationRef = useRef<number>()

  // Get container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current?.parentElement) {
        const parent = containerRef.current.parentElement
        setContainerSize({ width: parent.clientWidth, height: parent.clientHeight })
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Calculate centered position
  const getCenteredPosition = useCallback(() => ({
    x: (containerSize.width - SWORD_WIDTH) / 2,
    y: (containerSize.height - SWORD_HEIGHT) / 2,
  }), [containerSize])

  useEffect(() => {
    if (!isHovering) {
      // Stop bouncing animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = undefined
      }
      
      // Trigger smooth return to center
      setIsReturning(true)
      setPosition(getCenteredPosition())
      setHueRotation(0)
      
      // After transition completes, clear returning state
      const timeout = setTimeout(() => {
        setIsReturning(false)
      }, 400)
      
      return () => clearTimeout(timeout)
    }

    // Starting to hover - disable transition and start from center
    setIsReturning(false)
    
    // Initialize position from center when starting to hover
    const startPos = getCenteredPosition()
    setPosition(startPos)

    const animate = () => {
      if (!containerRef.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const container = containerRef.current.parentElement
      if (!container) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      setPosition(prev => {
        if (!prev) return prev
        
        let { x, y } = prev
        let { dx, dy } = velocityRef.current

        // Update position
        x += dx
        y += dy

        let hitX = false
        let hitY = false

        // Check horizontal bounds
        if (x <= 0) {
          x = 0
          dx = Math.abs(dx)
          hitX = true
        } else if (x + SWORD_WIDTH >= containerWidth) {
          x = containerWidth - SWORD_WIDTH
          dx = -Math.abs(dx)
          hitX = true
        }

        // Check vertical bounds
        if (y <= 0) {
          y = 0
          dy = Math.abs(dy)
          hitY = true
        } else if (y + SWORD_HEIGHT >= containerHeight) {
          y = containerHeight - SWORD_HEIGHT
          dy = -Math.abs(dy)
          hitY = true
        }

        // Update velocity ref
        velocityRef.current = { dx, dy }

        // Corner hit! Change color
        if (hitX && hitY) {
          const newHue = HUE_ROTATIONS[Math.floor(Math.random() * HUE_ROTATIONS.length)]
          setHueRotation(newHue)
        }

        return { x, y }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering, containerSize, getCenteredPosition])

  // Use centered position when position is null
  const { x, y } = position ?? getCenteredPosition()

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated sword container */}
      <div
        className="absolute"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          width: SWORD_WIDTH,
          height: SWORD_HEIGHT,
          filter: hueRotation !== 0 ? `hue-rotate(${hueRotation}deg)` : 'none',
          transition: isReturning ? 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), filter 300ms' : 'filter 300ms',
        }}
      >
        <SwordSVG />
      </div>
    </div>
  )
}
