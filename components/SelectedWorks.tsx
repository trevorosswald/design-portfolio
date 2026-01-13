'use client'

import React, { useState, useEffect, useCallback } from 'react'
import SectionHeader from './SectionHeader'
import Badge from './Badge'
import { Project } from '@/types'

interface SelectedWorksProps {
  projects: Project[]
}

export default function SelectedWorks({ projects }: SelectedWorksProps) {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  // Detect desktop (768px+) and update on resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const openLightbox = (index: number) => {
    if (isDesktop) {
      setLightboxOpen(index)
    }
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(null)
  }, [])

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    if (lightboxOpen !== null) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen, closeLightbox])

  return (
    <section className="flex flex-col gap-[32px] items-start w-full">
      <SectionHeader title="Selected Works" />
      <div className="flex flex-col gap-[48px] items-start w-full">
        {projects.map((project, index) => (
          <article key={index} className="flex flex-col gap-[24px] items-start w-full">
            {/* Header: Title + Tagline */}
            <div className="flex flex-col gap-1 items-start leading-5 text-sm tracking-[-0.084px] w-full">
              <p className="font-medium text-text-primary">
                {project.title}
              </p>
              <p className="font-normal text-text-secondary">
                {project.tagline}
              </p>
            </div>

            {/* Visual: Screenshot/Image */}
            {project.coverComponent ? (
              isDesktop ? (
                <button
                  onClick={() => openLightbox(index)}
                  className="cover-interactive w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1"
                  aria-label={`View ${project.title} project details`}
                >
                  {project.coverComponent}
                </button>
              ) : (
                project.coverComponent
              )
            ) : project.imageUrl ? (
              isDesktop ? (
                <button
                  onClick={() => openLightbox(index)}
                  className="cover-interactive w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1 overflow-hidden"
                  aria-label={`View ${project.title} project details`}
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="cover-content w-full h-auto object-cover transition-transform duration-200"
                  />
                </button>
              ) : (
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto object-cover"
                />
              )
            ) : (
              <div className="bg-gray-3 w-full h-[360px]" />
            )}

            {/* Contribution and Tags - tighter spacing */}
            <div className="flex flex-col gap-[12px] items-start w-full">
              {/* Contribution: What you did */}
              {project.contribution && (
                <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px] w-full">
                  {project.contribution}
                </p>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex gap-2 items-start">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex}>{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Desktop-only Lightbox Modal */}
      {isDesktop && lightboxOpen !== null && projects[lightboxOpen] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${projects[lightboxOpen].title} project enlarged`}
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

          {/* Content container */}
          <div
            className="lightbox-mode relative animate-scaleIn w-[90vw] max-w-[1080px]"
            onClick={(e) => e.stopPropagation()}
            style={{ aspectRatio: '540 / 384' }}
          >
            {projects[lightboxOpen].coverComponent ? (
              <div className="w-full h-full flex items-center justify-center">
                {projects[lightboxOpen].coverComponent}
              </div>
            ) : projects[lightboxOpen].imageUrl ? (
              <img
                src={projects[lightboxOpen].imageUrl}
                alt={projects[lightboxOpen].title}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : null}
          </div>
        </div>
      )}
    </section>
  )
}
