+++
draft = false
date = '2023-06-01'
title = 'Acme Corp'
type = 'experience'
role = 'Senior Software Engineer'
period = 'Jun 2023 — Present'
period_begin = '2023-06-01'
period_finish = ''
location = 'San Francisco, CA'
workmode = 'remote'
worktype = 'full-time'
technologies = ['Go', 'PostgreSQL', 'Kubernetes', 'gRPC', 'Terraform', 'Redis']
tasks = [
  'Designed and implemented a real-time event processing pipeline handling 50k events/sec',
  'Led migration from monolith to microservices architecture, reducing deployment times by 70%',
  'Mentored a team of 4 junior engineers through code reviews and pair programming sessions',
  'Established observability standards using OpenTelemetry, improving incident response time by 40%',
]
+++

## Overview

Joined Acme Corp as a Senior Software Engineer on the Platform Engineering team, responsible for building and maintaining the core infrastructure that powers the company's SaaS product. The platform serves over 2 million end users across 30+ enterprise clients.

## Key Projects

### Event Processing Pipeline

Designed a high-throughput event processing system built on top of Apache Kafka and Go microservices. The pipeline ingests clickstream data, user activity logs, and system telemetry in real-time, enabling downstream analytics and alerting workflows.

The system handles sustained loads of 50,000 events per second with sub-100ms end-to-end latency. Implemented backpressure mechanisms and dead-letter queues to ensure zero data loss during traffic spikes.

### Monolith to Microservices Migration

Led a phased migration strategy to decompose a 200k-line Go monolith into domain-driven microservices. Introduced gRPC for inter-service communication with Protocol Buffers for schema evolution. The migration reduced average deployment time from 45 minutes to under 12 minutes and enabled independent team deployments.

### Observability Platform

Rolled out a company-wide observability stack using OpenTelemetry, Grafana, and Prometheus. Defined SLIs/SLOs for all critical services and built automated alerting that reduced mean time to detection (MTTD) from 15 minutes to under 3 minutes.

## Impact

- Reduced infrastructure costs by 25% through right-sizing Kubernetes workloads and implementing horizontal pod autoscaling
- Improved platform reliability from 99.5% to 99.95% uptime over 12 months
- Established engineering best practices adopted across 5 product teams
