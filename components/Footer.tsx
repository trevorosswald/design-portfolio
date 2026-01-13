import React from 'react'
import { PersonalInfo } from '@/types'

interface FooterProps {
  personalInfo: PersonalInfo
}

export default function Footer({ personalInfo }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col gap-[24px] items-start w-full">
      <div className="flex gap-[12px] items-start font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
        {personalInfo.socialLinks.instagram && (
          <a
            href={personalInfo.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            Instagram
          </a>
        )}
        {personalInfo.socialLinks.linkedin && (
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            LinkedIn
          </a>
        )}
        {personalInfo.socialLinks.substack && (
          <a
            href={personalInfo.socialLinks.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            Substack
          </a>
        )}
      </div>
      <div className="flex flex-col items-start">
        <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
          All rights reserved © {currentYear} {personalInfo.name}
        </p>
      </div>
    </footer>
  )
}
