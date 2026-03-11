+++
draft = false
date = '2023-09-05'
title = 'A Better Git Workflow with Worktrees'
type = 'blog'
description = 'How git worktrees let you work on multiple branches simultaneously without stashing or switching context.'
tags = ['Git', 'Tooling']
+++

If you frequently switch between branches, git worktrees eliminate the context-switching overhead.

## The problem

Switching branches means:
- Stashing uncommitted work
- Waiting for build tools to re-process changed files
- Losing your editor state

## The solution

Git worktrees let you check out multiple branches at once, each in its own directory:

```bash
git worktree add ../feature-auth feature/auth
git worktree add ../hotfix-login hotfix/login
```

Now you have three directories, each on a different branch, all sharing the same `.git` history.

## My workflow

```bash
# Main branch stays in the original directory
cd ~/code/myproject

# Feature work in a worktree
cd ~/code/myproject-feature-auth

# Quick fix in another worktree
cd ~/code/myproject-hotfix-login
```

Each directory has its own `node_modules`, build cache, and editor session. No stashing, no rebuilding.

## Cleanup

```bash
git worktree remove ../feature-auth
```

Simple and effective. Once you try worktrees, you won't go back to `git stash`.
