'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import { PersonalInfo } from '@/types'

interface IntroProps {
  personalInfo: PersonalInfo
}

export default function Intro({ personalInfo }: IntroProps) {
  const [copied, setCopied] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section className="flex flex-col gap-[32px] w-full">
      <div className="flex flex-col gap-[16px] items-start">
        <div className="relative rounded-full shrink-0 w-20 h-20 bg-gray-3 overflow-hidden">
          {personalInfo.profileImageUrl && !imageError ? (
            <Image
              src={personalInfo.profileImageUrl}
              alt={personalInfo.name}
              fill
              sizes="80px"
              className="object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary font-semibold text-xl">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h1 className="font-semibold leading-[22px] text-base text-text-primary tracking-[-0.208px]">
            {personalInfo.name}
          </h1>
          <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
            {personalInfo.jobTitle}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex flex-col gap-[4px] font-normal text-text-secondary tracking-[-0.084px] w-full">
          <p className="leading-5 text-sm w-full">
            {personalInfo.bio}
          </p>
        </div>
        
        <div className="flex gap-[12px] items-start">
          <Button variant="secondary" onClick={handleCopyEmail} className="min-w-[106px]">
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M2.5 8.5L6 12L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </>
            ) : 'Copy Email'}
          </Button>
          <Button 
            variant="ghost"
            data-cal-link="trevorosswald/intro-call"
            data-cal-namespace="intro-call"
            data-cal-config='{"layout":"month_view","theme":"auto"}'
          >
            Book Intro Call
          </Button>
        </div>
      </div>
    </section>
  )
}
