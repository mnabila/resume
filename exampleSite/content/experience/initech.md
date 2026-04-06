+++
draft = false
date = '2019-08-01'
title = 'Initech'
type = 'experience'
role = 'Junior Software Engineer'
period = 'Aug 2019 — Feb 2021'
period_begin = '2019-08-01'
period_finish = '2021-02-28'
location = 'Austin, TX'
workmode = 'onsite'
worktype = 'full-time'
technologies = ['Python', 'Django', 'PostgreSQL', 'Docker', 'Celery', 'RabbitMQ']
tasks = [
  'Developed internal tools automating manual data entry workflows, saving 20 hours/week',
  'Built and maintained RESTful APIs consumed by partner integrations',
  'Wrote comprehensive unit and integration tests achieving 85% code coverage',
]
+++

## Overview

Started my professional career at Initech as a Junior Software Engineer on the Internal Tools team. Initech is a mid-size fintech company providing payment processing solutions for small businesses. The team was responsible for building and maintaining internal applications that supported operations, compliance, and partner onboarding.

## Key Projects

### Data Entry Automation Platform

Built a workflow automation platform using Django and Celery that replaced manual data entry processes across three departments. The system ingested CSV and Excel files, validated records against business rules, and pushed clean data into the core platform via internal APIs.

Added a task queue with RabbitMQ to handle large batch imports asynchronously, preventing timeouts on files with 50k+ rows. Built a progress tracking UI so operations staff could monitor import status in real-time.

### Partner Integration API

Developed a set of RESTful APIs that enabled third-party partners to programmatically submit merchant applications and retrieve processing status. Implemented OAuth 2.0 authentication, rate limiting, and comprehensive request logging for audit compliance.

Wrote detailed API documentation using OpenAPI/Swagger that reduced partner onboarding time from 2 weeks to 3 days.

### Testing Infrastructure

Championed the adoption of automated testing across the team. Set up pytest with factory-based fixtures, integrated test coverage reporting into the CI pipeline, and established a team guideline requiring 80% minimum coverage for all new code.

## Impact

- Automated workflows saved the operations team approximately 20 hours per week
- Partner API enabled 15 new integrations in the first 6 months
- Test coverage increased from 35% to 85% across the Internal Tools codebase
