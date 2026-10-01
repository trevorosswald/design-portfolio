# Trevor Osswald — Design Portfolio

A single-page portfolio built with Next.js, React, and TypeScript. The page uses
the original live site's narrow, left-aligned text column with five short
paragraphs covering Trevor's background, career, projects, education, and contact
information. The biography is written in first person, with no separate name
header or updated footer.

Typography is 14px Helvetica with a 20px line height. Links have faint underlines,
and light and dark appearance follow the system setting automatically.

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Validation and production

```bash
npm run lint
npm run build
npm start
```

## Editing the portfolio

- `app/page.tsx` contains the biography and inline project/contact links.
- `app/portfolio.css` contains the page layout and link styling.
- `app/globals.css` contains global typography, system themes, and retained project-cover tokens.
- `app/layout.tsx` contains the page metadata and existing Visitors analytics.

External website links open in a new tab. Email opens the visitor's mail app.
Hosting remains on the existing Vercel project.

Earlier portfolio components, portrait, and project assets remain in the
repository for future use but are not displayed on the homepage.
