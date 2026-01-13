'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Button from './Button'
import { PersonalInfo } from '@/types'

interface IntroProps {
  personalInfo: PersonalInfo
}

export default function Intro({ personalInfo }: IntroProps) {
  const [copied, setCopied] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
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

  const openLightbox = () => {
    if (personalInfo.profileImageUrl) {
      setLightboxOpen(true)
    }
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    if (lightboxOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen, closeLightbox])

  return (
    <section className="flex flex-col gap-[32px] w-full">
      <div className="flex flex-col gap-[16px] items-start">
        <button
          onClick={openLightbox}
          className="relative rounded-full shrink-0 w-20 h-20 bg-gray-3 cursor-pointer transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1 overflow-hidden"
          aria-label="View profile picture"
        >
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
        </button>

        {/* Instagram-style Lightbox Modal */}
        {lightboxOpen && personalInfo.profileImageUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Profile picture enlarged"
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-white/80 hover:text-white transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image container */}
            <div
              className="relative animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] rounded-full overflow-hidden">
                <Image
                  src={personalInfo.profileImageUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}
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
