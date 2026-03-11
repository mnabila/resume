+++
draft = false
date = '2024-05-08'
title = 'Smaller Images with Docker Multi-Stage Builds'
type = 'blog'
description = 'How to use multi-stage Docker builds to produce minimal production images without sacrificing build tooling.'
tags = ['Docker', 'DevOps']
+++

Multi-stage builds let you use a full build environment while shipping only the final binary.

## The problem

A typical Go Dockerfile produces a 1GB+ image:

```dockerfile
FROM golang:1.22
WORKDIR /app
COPY . .
RUN go build -o server .
CMD ["./server"]
```

## The fix

Use a multi-stage build:

```dockerfile
FROM golang:1.22 AS builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -o server .

FROM alpine:3.19
COPY --from=builder /app/server /server
CMD ["/server"]
```

The final image drops to ~15MB. Even smaller with `scratch` if you don't need a shell.

## When to use it

Multi-stage builds are ideal for compiled languages (Go, Rust, C++) and for frontend apps where you need Node.js to build but only serve static files in production.
