# Design Portfolio

A Next.js portfolio website built with TypeScript and Tailwind CSS, implementing a custom design system with dark mode support.

## Features

- **Design System Integration**: All colors, spacing, and typography use CSS variables matching the Figma design system
- **Dark Mode**: Automatic dark mode support via system preference detection
- **Responsive Design**: Centered layout with max-width 680px
- **Copy Email**: One-click email copying functionality
- **TypeScript**: Full type safety throughout the codebase

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── Intro.tsx           # Profile intro section
│   ├── WorkExperience.tsx  # Work experience timeline
│   ├── SelectedWorks.tsx   # Featured projects
│   ├── PersonalProjects.tsx # Personal projects section
│   ├── Education.tsx       # Education timeline
│   ├── Writings.tsx        # Blog writings section
│   ├── Footer.tsx          # Footer with social links
│   ├── SectionHeader.tsx   # Reusable section header
│   ├── Button.tsx          # Reusable button component
│   └── Badge.tsx           # Tag/badge component
└── types/
    └── index.ts            # TypeScript type definitions
```

## Design System

All design tokens are defined as CSS variables in `app/globals.css`:

- **Colors**: Text, Gray scale, Button, Icon, Border
- **Spacing**: 0, 4, 6, 8, 12, 16, 24, 32, 48, 64, 192
- **Radius**: 0, 4, 6, 8, 16, 64
- **Typography**: Inter font (Regular 400, Medium 500, Semi Bold 600)

Dark mode colors are automatically applied based on system preference.

## Customization

### Update Content

Edit the content in `app/page.tsx`:

- `personalInfo`: Your name, bio, email, social links
- `workExperience`: Work history
- `selectedWorks`: Featured projects
- `personalProjects`: Personal projects
- `education`: Education history

### Update Email

Change the email address in `app/page.tsx` in the `personalInfo` object.

### Add Cal.com Integration

The "Book Intro Call" button is ready for Cal.com modal integration. Update `components/Intro.tsx` to add the modal functionality.

## Next Steps

- Replace placeholder images with actual project images
- Implement Cal.com modal for "Book Intro Call" button
- Add SEO metadata and Open Graph tags
- Optimize images and performance
- Add animations and transitions
