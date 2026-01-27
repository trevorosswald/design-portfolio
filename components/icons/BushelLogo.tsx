import React from 'react'

interface BushelLogoProps {
  size?: number
  className?: string
}

export const BushelLogo = ({ size = 16, className }: BushelLogoProps) => {
  // Original SVG is 13x16, calculate width proportionally
  const width = (13 / 16) * size
  
  return (
    <svg 
      width={width} 
      height={size} 
      viewBox="0 0 13 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#bushel-clip)">
        <path d="M12.2217 0H0.776898C0.285887 0 0 0.222849 0 0.669958V10.585C0 12.0557 0.362362 16 6.5 16C12.6376 16 13 12.0557 13 10.585V0.669958C13 0.223319 12.7406 0 12.2217 0ZM6.02257 12.3092C3.75441 12.3092 3.75513 10.1675 3.75513 10.1675V8.96474C6.02257 8.96474 6.02257 11.2712 6.02257 11.2712V12.3092ZM6.02257 8.27186C3.75048 8.27186 3.75513 5.82687 3.75513 5.82687V2.50353C6.02257 2.50353 6.02257 4.8103 6.02257 4.8103V8.27186ZM6.93919 4.80994C6.93919 4.80994 6.93919 2.50353 9.20664 2.50353V3.70592C9.20664 3.70592 9.20664 5.84767 6.93919 5.84767V4.80994ZM9.24487 10.1484C9.24487 10.1484 9.24487 12.2905 6.97743 12.2905V8.82863C6.97743 8.82863 6.97743 6.52186 9.24487 6.52186V10.1484Z" fill="#F2BC23"/>
      </g>
      <defs>
        <clipPath id="bushel-clip">
          <rect width="13" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default BushelLogo
