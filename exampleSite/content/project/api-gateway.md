+++
draft = false
date = '2024-01-20'
title = 'API Gateway'
type = 'project'
description = 'A lightweight API gateway with rate limiting, JWT authentication, and request routing. Built for microservices architectures.'
repository = 'https://github.com/johndoe/api-gateway'
languages = ['Go']
tools = ['Redis', 'JWT', 'Docker', 'Prometheus']
+++

## Architecture

```mermaid
graph LR
    Client -->|HTTP| Gateway
    Gateway -->|Auth| JWT[JWT Validator]
    Gateway -->|Rate Limit| Redis[(Redis)]
    Gateway -->|Route| SvcA[Service A]
    Gateway -->|Route| SvcB[Service B]
    Gateway -->|Route| SvcC[Service C]
    Gateway -->|Metrics| Prometheus
```

## Request Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant G as Gateway
    participant R as Redis
    participant S as Service

    C->>G: HTTP Request
    G->>G: Validate JWT
    G->>R: Check Rate Limit
    R-->>G: Allowed
    G->>S: Forward Request
    S-->>G: Response
    G-->>C: Response
```
