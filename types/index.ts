export interface WorkExperience {
  dateRange: string
  title: string
}

export interface Project {
  title: string
  tagline: string // One-liner: what the product is
  contribution?: string // Your specific work and impact
  imageUrl?: string
  coverComponent?: React.ReactNode // Custom cover component (e.g., RogerCover)
  tags?: string[]
  link?: {
    url: string
    label: string
  }
}

export interface Education {
  dateRange: string
  degree: string
  location: string
  description: string
}

export interface PersonalInfo {
  name: string
  jobTitle: string
  bio: string
  personalProjectsBio?: string
  email: string
  profileImageUrl?: string
  socialLinks: {
    linkedin?: string
    instagram?: string
    substack?: string
  }
}

export interface Writing {
  date: string
  title: string
  description: string
  url?: string
  comingSoon?: boolean
}
