+++
draft = false
date = '2024-01-15'
title = 'How I Structure Go Projects'
type = 'blog'
description = 'An opinionated guide to organizing Go codebases that balances simplicity with scalability.'
tags = ['Go', 'Architecture']
+++

There's no single "right" way to structure a Go project, but here's what has worked well for me across several production services.

## Layout

```
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handler/
│   ├── service/
│   ├── repository/
│   └── model/
├── pkg/
│   └── httputil/
├── migrations/
├── Dockerfile
└── go.mod
```

## Key principles

1. **`cmd/` for entry points** — Each binary gets its own subdirectory
2. **`internal/` for private code** — Go enforces this boundary at the compiler level
3. **`pkg/` only if you mean it** — Only put code here if it's genuinely reusable by other projects
4. **Flat within packages** — Avoid deep nesting; a package with 5 files is better than 5 nested packages with 1 file each

## Dependency flow

```
handler → service → repository → database
```

Each layer depends only on the one below it. Interfaces are defined by the consumer, not the provider.

Keep it simple. You can always add structure later — you can't easily remove it.
