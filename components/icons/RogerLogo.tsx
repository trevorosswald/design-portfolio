import React from 'react'

interface RogerLogoProps {
  size?: number
  className?: string
}

export const RogerLogo = ({ size = 16, className }: RogerLogoProps) => {
  // Original SVG is 22x20, calculate width proportionally
  const width = (22 / 20) * size
  
  return (
    <svg 
      width={width} 
      height={size} 
      viewBox="0 0 22 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M10 2.75H18.75V17.25H2.75V10C2.75 5.99594 5.99594 2.75 10 2.75Z" 
        stroke="#B0C836" 
        strokeWidth="1.5"
      />
      <path 
        d="M13.9766 10.1387H12.3301V9.51172C12.1699 9.51172 12.0234 9.52344 11.8906 9.54688C11.7578 9.56641 11.6406 9.60156 11.5391 9.65234C11.4414 9.70312 11.3574 9.77344 11.2871 9.86328C11.2207 9.95312 11.1738 10.0645 11.1465 10.1973V12.3945H12.3828V14H8.42188V12.3945H9.33008V9.53516H8.43359V7.92969H11.1348V8.35742C11.3066 8.2207 11.5 8.11523 11.7148 8.04102C11.9297 7.9668 12.1641 7.92969 12.418 7.92969C12.6758 7.92969 12.9414 7.93164 13.2148 7.93555C13.4883 7.93945 13.7422 7.94141 13.9766 7.94141V10.1387Z" 
        fill="#B0C836"
      />
    </svg>
  )
}

export default RogerLogo
