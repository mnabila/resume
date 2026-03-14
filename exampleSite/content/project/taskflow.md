+++
draft = false
date = '2024-06-01'
title = 'TaskFlow'
type = 'project'
description = 'A CLI task runner and dependency graph executor inspired by Make, written in Go. Supports parallel execution, file-based caching, and YAML configuration.'
repository = 'https://github.com/johndoe/taskflow'
languages = ['Go']
tools = ['Cobra', 'DAG', 'YAML']
+++

TaskFlow is a modern build tool that replaces Makefiles with a cleaner YAML syntax. It builds a directed acyclic graph of tasks and executes them in parallel where possible.

## Features

- Parallel task execution based on dependency graph
- File-based caching to skip unchanged tasks
- Simple YAML configuration
- Cross-platform support
