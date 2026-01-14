import Intro from '@/components/Intro'
import WorkExperience from '@/components/WorkExperience'
import PersonalProjects from '@/components/PersonalProjects'
import Writings from '@/components/Writings'
import SelectedWorks from '@/components/SelectedWorks'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import RogerCover from '@/components/RogerCover'
import ContractManagerCover from '@/components/ContractManagerCover'
import BushelFulfillmentCover from '@/components/BushelFulfillmentCover'
import FloatingVideoIntro from '@/components/FloatingVideoIntro'
import { PersonalInfo, WorkExperience as WorkExperienceType, Project, Education as EducationType, Writing } from '@/types'

// Content extracted from Figma design
const personalInfo: PersonalInfo = {
  name: 'Trevor Osswald',
  jobTitle: 'Product Designer',
  bio: "I design products and build them too. Right now I'm working on healthcare and claims tools at Experian Health. Before that, ag-tech, fintech, and logistics.",
  personalProjectsBio: "I also build my own products. Right now I'm working an AI-powered Bible listening app called The Sword.",
  email: 'trevorosswald@gmail.com',
  profileImageUrl: '/profile_pic.jpeg',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/trevorosswald',
    instagram: 'https://instagram.com/trevorosswald',
    substack: 'https://trevorosswald.substack.com',
  },
}

const workExperience: WorkExperienceType[] = [
  {
    dateRange: '2023 — Now',
    title: 'Product Designer at Experian Health',
  },
  {
    dateRange: '2021 — 2023',
    title: 'Product Designer at Bushel Powered',
  },
]

const selectedWorks: Project[] = [
  {
    title: 'Contract Manager',
    tagline: 'Healthcare claims and contract management software for payer-provider negotiations.',
    contribution: 'Currently leading the ongoing redesign of Contract Manager, introducing an intuitive interface with streamlined navigation, smart workflows to automate repetitive tasks, and AI-powered insights for faster contract analysis. Implementing our new design system across the product.',
    coverComponent: <ContractManagerCover />,
    tags: ['UX Design', 'Design Systems', 'AI Tools'],
  },
  {
    title: 'Bushel Fulfillment',
    tagline: 'Scale ticket management for direct ship and commercial grain transactions.',
    contribution: 'Designed the grade factor threshold notification system through discovery, prototyping, and usability testing. Enabled grain buyers to set location-based thresholds and receive automated alerts when quality metrics fall outside acceptable ranges, reducing manual monitoring time and preventing costly quality disputes.',
    coverComponent: <BushelFulfillmentCover />,
    tags: ['UX Design', 'User Research', 'Product'],
  },
  {
    title: 'Roger That',
    tagline: 'Digital marketplace bringing transparency to dry bulk shipping.',
    contribution: 'Led design for Roger\'s three platforms, conducting discovery with shippers, carriers, and drivers to inform a comprehensive redesign of the deal booking flow. Enhanced dashboard visibility, search functionality with filters, and communication features that significantly improved efficiency in finding and booking deals for carriers and shippers.',
    coverComponent: <RogerCover />,
    tags: ['UX Design', 'Product', 'B2B'],
  },
]

const personalProjects: Project[] = [
  {
    title: 'The Sword',
    tagline: 'AI powered Bible reading app.',
    link: {
      url: 'https://www.thesword.app/',
      label: 'View App',
    },
  },
  {
    title: 'Loren Ipsum',
    tagline: 'My design system I use for everything.',
    link: {
      url: 'https://www.figma.com/design/KAAWh1heETtlHeEk8txVRc/Loren-Ispem?node-id=30158-276971&t=wYHxGni5krcaF6GW-1',
      label: 'View File',
    },
  },
]

const writings: Writing[] = [
  {
    date: 'Jan 6, 2025',
    title: 'Designers as Builders',
    description: 'Why I stopped handing off designs and started shipping them myself.',
    url: 'https://open.substack.com/pub/trevorosswald/p/designers-as-builders',
  },
  {
    date: '',
    title: 'Moving all my website from Framer to Code.',
    description: 'Why I left Framer behind and rebuilt my portfolio in Next.js.',
    comingSoon: true,
  },
  {
    date: '',
    title: 'Crafting a Design System with Cursor',
    description: 'How I built a component library and design tokens using AI-assisted coding.',
    comingSoon: true,
  },
]

const education: EducationType[] = [
  {
    dateRange: '2020 — 2021',
    degree: 'Arizona State University, BA',
    location: 'Online',
    description: 'After returning from Spain, I transferred to ASU\'s online program and graduated with my Bachelor of Arts through the SCAP program.',
  },
  {
    dateRange: 'Spring of 2019',
    degree: 'Study Abroad',
    location: 'Seville, Spain',
    description: "In the spring of 2019, I studied abroad through Taylor University's program, focusing on Spanish language and fine arts for six months in Seville.",
  },
  {
    dateRange: '2016 — 2019',
    degree: 'Taylor University',
    location: 'Upland, Indiana',
    description: 'I discovered design through street photography and attended Taylor University for three years, studying graphic design and minoring in photography.',
  },
]

export default function Home() {
  return (
    <div className="bg-gray-1 flex items-center px-0 py-8 sm:py-[128px] min-h-screen">
      <div className="flex grow items-center justify-center w-full">
        <div className="flex flex-col gap-16 sm:gap-[64px] items-start max-w-[680px] px-4 w-full">
          <Intro personalInfo={personalInfo} />
          <WorkExperience experiences={workExperience} />
          <PersonalProjects
            projects={personalProjects}
            description="I love building things, exploring new ideas, and using side projects as a way to learn new skills and tools. Here are a few things I have made recently."
            showImages={true}
          />
          <Writings writings={writings} />
          <SelectedWorks projects={selectedWorks} />
          <Education education={education} />
          <Footer personalInfo={personalInfo} />
        </div>
      </div>
      <FloatingVideoIntro />
    </div>
  )
}
