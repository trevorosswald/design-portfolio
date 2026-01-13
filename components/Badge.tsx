import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center justify-center h-5 px-2 rounded-full text-xs font-medium text-text-primary bg-gray-1 border border-border-primary ${className}`}>
      {children}
    </span>
  )
}
