import React from 'react'
import SectionHeader from './SectionHeader'
import { LinkButton } from './Button'
import { Writing } from '@/types'

interface WritingsProps {
  writings: Writing[]
}

// External link arrow icon
const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Writings({ writings }: WritingsProps) {
  return (
    <section className="flex flex-col gap-[32px] items-start w-full">
      <SectionHeader title="Writings" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full">
        {writings.map((writing, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-1 sm:gap-[24px] items-start w-full">
            <p className="font-normal leading-5 shrink-0 text-sm text-text-secondary tracking-[-0.084px] sm:w-[120px]">
              {writing.comingSoon ? 'Coming Soon' : writing.date}
            </p>
            <div className="flex flex-col gap-[12px] flex-1 items-start">
              <div className="flex flex-col gap-[4px] items-start leading-5 text-sm tracking-[-0.084px] w-full">
                <p className="font-medium text-text-primary">
                  {writing.title}
                </p>
                <p className="font-normal text-text-secondary">
                  {writing.description}
                </p>
              </div>
              {(writing.comingSoon || writing.url) && (
                <LinkButton
                  href={writing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={writing.comingSoon}
                >
                  Read Article
                  <ExternalLinkIcon />
                </LinkButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
