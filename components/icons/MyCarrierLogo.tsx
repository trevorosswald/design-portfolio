import React from 'react'

interface MyCarrierLogoProps {
  size?: number
  className?: string
}

export const MyCarrierLogo = ({ size = 16, className }: MyCarrierLogoProps) => {
  // Original SVG is 20x16, calculate width proportionally
  const width = (20 / 16) * size

  return (
    <img
      src="/MyCarrier_Logo.svg"
      alt="MyCarrier"
      width={width}
      height={size}
      className={className}
    />
  )
}

export default MyCarrierLogo
