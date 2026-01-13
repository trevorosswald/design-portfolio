import React from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <h2 className="font-semibold leading-[22px] text-base text-text-primary tracking-[-0.208px]">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-8" />
      </div>
      {description && (
        <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px] w-full">
          {description}
        </p>
      )}
    </div>
  )
}
