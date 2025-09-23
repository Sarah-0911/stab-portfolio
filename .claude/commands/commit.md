---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Conventions

- **feat**: add a new feature
- **fix**: fix a bug
- **chore**: maintenance or configuration
- **docs**: documentation changes
- **refactor**: refactoring without changing functionality
- **test**: adding or updating tests

## Your task

Based on the above changes, create a **single-line, concise git commit message** following **Conventional Commits**:

- Format: `<type>: <short description>`
- Include the main file or feature name if relevant
- **Do NOT include any extra text, metadata, emojis, or "Co-Authored-By" lines**
- Only generate the commit message itself, one line per commit

### Example

- Modified files: `Contact.astro`, `Form.astro`
- Changes: added Contact component, refactored form logic

Expected output:
- feat: add Contact.astro component
- refactor: update Form.astro logic
