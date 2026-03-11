+++
draft = false
date = '2023-11-30'
title = "What's New in Tailwind CSS v4"
type = 'blog'
description = 'A look at the major changes in Tailwind CSS v4: native CSS layers, lightning-fast builds, and a simplified configuration model.'
tags = ['CSS', 'Frontend', 'Tailwind']
+++

Tailwind CSS v4 is a ground-up rewrite with significant improvements.

## Zero-config CSS

No more `tailwind.config.js` for most projects. Configuration moves into CSS using `@theme`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;
  --color-primary: #3b82f6;
}
```

## Performance

The new engine (Oxide) is written in Rust and is 10x faster than v3. Full builds complete in milliseconds instead of seconds.

## Native CSS features

v4 leans into modern CSS:

- `@layer` for cascade control
- `color-mix()` for opacity variants
- `@property` for animated custom properties

## Migration

Most v3 projects upgrade smoothly. The main breaking changes are:

- Config moves from JS to CSS `@theme`
- Some utility names changed (e.g., `bg-opacity-50` → `bg-blue-500/50`)
- `@apply` still works but is discouraged in favor of component extraction

The developer experience improvement is substantial — faster feedback loops and less configuration boilerplate.
