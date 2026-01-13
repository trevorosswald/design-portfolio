import React from 'react'

// Arrow Up Right - used for external links
export const ArrowUpRightIcon = ({ color = "currentColor", size = 11 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.67 11.33L11.33 4.67M11.33 4.67H4.67M11.33 4.67V11.33"/>
  </svg>
)
