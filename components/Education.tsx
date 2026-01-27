import React from 'react'
import SectionHeader from './SectionHeader'
import { Education as EducationType } from '@/types'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="flex flex-col gap-[32px] items-start w-full">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-[32px] items-start w-full">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-1 items-start w-full">
            <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
              {edu.dateRange}
            </p>
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="font-semibold leading-[22px] text-base text-text-primary tracking-[-0.208px]">
                  {edu.degree}
                </p>
                <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
                  {edu.location}
                </p>
              </div>
              <p className="font-normal leading-5 text-sm text-text-secondary tracking-[-0.084px]">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
