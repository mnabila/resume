# Resume

A minimal, warm-toned Hugo theme for personal resume and portfolio sites. Built with Tailwind CSS v4.

## Features

- **Resume Sections** — Experience, education, skills, and projects with structured front matter
- **Blog** — Full blog support with reading time, tags, and table of contents
- **Responsive** — Mobile-first design with hamburger navigation
- **Taxonomies** — Languages, tools, and tags with dedicated listing pages
- **SEO** — Open Graph, Twitter Cards, and JSON-LD structured data (Person, BlogPosting, CreativeWork)
- **Mermaid Diagrams** — Automatic CDN loading for mermaid code blocks
- **Scroll Animations** — Subtle reveal animations that respect `prefers-reduced-motion`
- **Accessibility** — Skip-to-content link, semantic HTML, ARIA labels, focus states

## Requirements

- Hugo >= 0.146.0 (extended version not required)
- Node.js (for Tailwind CSS)

## Installation

Add the theme to your Hugo site:

```bash
git submodule add https://github.com/mnabila/resume.git themes/resume
```

Install dependencies:

```bash
cd themes/resume
npm install
```

Set the theme in your `hugo.toml`:

```toml
theme = 'resume'
```

## Configuration

```toml
baseURL = 'https://example.org/'
languageCode = 'en-US'
title = 'Jane Doe — Software Engineer'
theme = 'resume'

[module]
  [module.hugoVersion]
    extended = false
    min = '0.146.0'
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'

[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats\.json'
    target = 'css'
  [[build.cachebusters]]
    source = '(postcss|tailwind)\.config\.js'
    target = 'css'

[params]
  tagline = "Building things for the web"
  [params.author]
    name = "Jane Doe"
    description = "Software engineer with 5+ years of experience building web applications."
    image = "https://api.dicebear.com/9.x/avataaars/svg?seed=Jane"
  [params.social]
    github = "https://github.com/janedoe"
    gitlab = "https://gitlab.com/janedoe"
    telegram = "https://t.me/janedoe"
    linkedin = "https://linkedin.com/in/janedoe"
    email = "mailto:jane@example.com"

[markup]
  [markup.highlight]
    noClasses = false
    lineNos = false
    guessSyntax = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4
    ordered = false

[taxonomies]
  tag = 'tags'
  language = 'languages'
  tool = 'tools'
```

## Content Structure

```
content/
├── about.md
├── blog/
│   ├── _index.md
│   └── my-post.md
├── education/
│   ├── _index.md
│   └── university.md
├── experience/
│   ├── _index.md
│   └── company.md
├── project/
│   ├── _index.md
│   └── my-project.md
└── skill/
    ├── _index.md
    └── frontend.md
```

## Development

Run the dev server from your site root (not the theme directory):

```bash
hugo server
```

Build for production:

```bash
hugo --minify
```

Hugo handles Tailwind CSS compilation via its asset pipeline (`css.TailwindCSS`). No separate build step is needed.

## Design

- **Fonts**: Fraunces (serif headings) + Manrope (sans body) + JetBrains Mono (code)
- **Colors**: Cream background, terracotta accent, warm amber tags, white cards with soft shadows
- **Layout**: Single-column resume flow on homepage, card grids for projects and blog

## License

[MIT](LICENSE) &copy; M. Nabil Adani
