import React from 'react'
import SectionHeader from './SectionHeader'
import { WorkExperience as WorkExperienceType } from '@/types'

interface WorkExperienceProps {
  experiences: WorkExperienceType[]
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="flex flex-col gap-[32px] items-start w-full">
      <SectionHeader title="Work Experience" />
      <div className="flex flex-col gap-[24px] items-start w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start leading-5 text-sm tracking-[-0.084px] w-full">
            <p className="font-normal shrink-0 text-text-secondary sm:w-[120px]">
              {exp.dateRange}
            </p>
            <div className="flex-1 flex items-center gap-1">
              <span className="font-medium text-text-primary">
                {exp.role} at
              </span>
              <span className="flex items-center gap-0.5">
                {exp.logo && (
                  <span className="flex items-center justify-center w-5 h-5 p-0.5">
                    {exp.logo}
                  </span>
                )}
                <span className="font-medium text-text-primary">
                  {exp.company}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
