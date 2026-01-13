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
            <p className="flex-1 font-medium text-text-primary">
              {exp.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
