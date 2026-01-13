import React from 'react'
import SectionHeader from './SectionHeader'
import SwordLogo from './SwordLogo'
import LorenIpsumLogo from './LorenIpsumLogo'
import { LinkButton } from './Button'
import { ArrowUpRightIcon } from './icons'
import { Project } from '@/types'

interface PersonalProjectsProps {
  projects: Project[]
  description: string
  showImages?: boolean
}

export default function PersonalProjects({
  projects,
  description,
  showImages = false,
}: PersonalProjectsProps) {
  return (
    <section className="flex flex-col gap-[32px] items-start w-full">
      <SectionHeader title="Personal Projects" description={description} />
      
      {showImages ? (
        <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] items-start w-full">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-[12px] items-start w-full sm:flex-1">
              <div 
                className="aspect-[208/160] rounded w-full overflow-hidden"
                style={{ 
                  backgroundColor: 
                    project.title === 'The Sword' ? 'var(--brown-4)' : 
                    project.title === 'Loren Ipsum' ? 'var(--green-8)' : 
                    'var(--gray-3)' 
                }}
              >
                {project.title === 'The Sword' && <SwordLogo />}
                {project.title === 'Loren Ipsum' && <LorenIpsumLogo />}
              </div>
              <div className="flex flex-col gap-[4px] items-start leading-5 text-sm tracking-[-0.084px] w-full">
                <p className="font-medium text-text-primary">
                  {project.title}
                </p>
                <p className="font-normal text-text-secondary">
                  {project.tagline}
                </p>
              </div>
              {project.link && (
                <LinkButton
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  {project.link.label}
                  <ArrowUpRightIcon size={11} />
                </LinkButton>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-start w-full">
          {/* Render projects in rows of 2 */}
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-8 items-start w-full">
              {projects.slice(rowIndex * 2, rowIndex * 2 + 2).map((project, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1 items-start leading-5 flex-1 px-4 py-3 rounded-md bg-button-secondary text-sm tracking-[-0.084px]">
                  <p className="font-medium text-text-primary">
                    {project.title}
                  </p>
                  <p className="font-normal text-text-secondary">
                    {project.tagline}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
