+++
draft = false
date = '2021-03-01'
title = 'Globex Inc'
type = 'experience'
role = 'Software Engineer'
period = 'Mar 2021 — May 2023'
period_begin = '2021-03-01'
period_finish = '2023-05-31'
location = 'New York, NY'
workmode = 'hybrid'
worktype = 'full-time'
technologies = ['TypeScript', 'React', 'Node.js', 'AWS', 'DynamoDB', 'GraphQL']
tasks = [
  'Built a customer-facing dashboard used by 10k+ daily active users with React and TypeScript',
  'Developed RESTful and GraphQL APIs serving mobile and web clients',
  'Implemented CI/CD pipelines with GitHub Actions, reducing release cycle from weekly to daily',
  'Optimized database queries resulting in 60% reduction in API response latency',
]
+++

## Overview

Worked as a full-stack engineer on the Product Analytics team at Globex Inc, a B2B analytics platform helping e-commerce companies understand customer behavior and optimize conversion funnels.

## Key Projects

### Customer Analytics Dashboard

Built the primary customer-facing dashboard from the ground up using React, TypeScript, and D3.js for data visualization. The dashboard provides real-time insights into user behavior, cohort analysis, and funnel performance metrics.

Implemented virtual scrolling and lazy-loading patterns to handle datasets with 100k+ rows while keeping the interface responsive. Integrated WebSocket connections for live-updating charts during active campaigns.

### GraphQL API Gateway

Designed and implemented a unified GraphQL API gateway that consolidated 12 separate REST microservices into a single query interface. This reduced the number of network round-trips for the dashboard from 8 to 1 per page load, cutting initial load time by 65%.

Implemented DataLoader patterns to batch and deduplicate database queries, resolving N+1 query issues that were the primary source of API latency.

### CI/CD Pipeline Modernization

Migrated the team from manual deployments to a fully automated CI/CD pipeline using GitHub Actions and AWS CDK. Introduced preview environments for every pull request, enabling designers and product managers to review changes before merging.

## Impact

- Grew the dashboard's daily active users from 2,000 to 10,000 within the first year
- Reduced average page load time from 4.2s to 1.1s through performance optimization
- Decreased production incidents by 50% after implementing automated canary deployments
