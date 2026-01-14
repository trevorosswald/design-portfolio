import React from 'react'
import SectionHeader from './SectionHeader'
import Badge from './Badge'
import { Project } from '@/types'

interface SelectedWorksProps {
  projects: Project[]
}

export default function SelectedWorks({ projects }: SelectedWorksProps) {
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
              project.coverComponent
            ) : project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover"
              />
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
    </section>
  )
}
