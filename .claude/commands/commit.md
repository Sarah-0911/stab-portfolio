---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Generate and execute a git commit command
---

## Context

- Current git status: !`git status`
- Current diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Conventions

- **feat**: add a new feature
- **fix**: fix a bug
- **chore**: maintenance/config tasks
- **docs**: documentation changes
- **refactor**: refactoring without changing functionality
- **test**: adding/updating tests

## Your task

Based on the above changes, generate a **single-line git commit command** and **execute it automatically**:

- Format: `git commit -m "<type>: <short description>"`
- Include the main file or feature name if relevant
- **Do NOT include extra text, metadata, or "Co-Authored-By" lines**
- The output **must be executed as a Bash command**, not just printed

### Example

- Modified files: `Contact.astro`, `Form.astro`
- Changes: added Contact component, refactored form logic

Expected output:
- git commit -m "feat: add Contact.astro component"
- git commit -m "refactor: update Form.astro logic"
