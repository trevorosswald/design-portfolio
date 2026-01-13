'use client'

import React, { useState, useEffect } from 'react'

const TYPE_SCALE = [
  { size: '42px', leading: '48px', tracking: '-0.9px' },
  { size: '32px', leading: '38px', tracking: '-0.7px' },
  { size: '26px', leading: '32px', tracking: '-0.55px' },
  { size: '21px', leading: '28px', tracking: '-0.4px' },
  { size: '17px', leading: '24px', tracking: '-0.29px' },
  { size: '15px', leading: '21px', tracking: '-0.21px' },
  { size: '13px', leading: '18px', tracking: '-0.17px' },
]

function LoremRow({ style }: { style: typeof TYPE_SCALE[0] }) {
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Check for desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia('(min-width: 768px)').matches)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const shouldAnimate = isHovering && isDesktop

  return (
    <p 
      className="cursor-default transition-[font-weight] duration-200 ease-out"
      style={{
        fontSize: style.size,
        lineHeight: style.leading,
        letterSpacing: style.tracking,
        fontWeight: shouldAnimate ? 900 : 500,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      Lorem Ipsum
    </p>
  )
}

export default function LorenIpsumLogo() {
  return (
    <div className="flex flex-col items-start text-text-primary p-[12px] h-full">
      {TYPE_SCALE.map((style, i) => (
        <LoremRow key={i} style={style} />
      ))}
    </div>
  )
}
