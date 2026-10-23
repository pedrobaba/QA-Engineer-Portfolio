# Day 61 — Git & GitHub for QA

## Overview

Day 61 focused on using Git and GitHub to manage QA documentation and collaborate safely with other testers.

The goal was to understand the Git workflow, use essential commands, manage branches and pull requests, inspect changes, and handle push rejections and merge conflicts.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Explain the difference between Git and GitHub
- Understand the working directory, staging area, local repository, and remote repository
- Use `git status`, `git add`, `git commit`, `git push`, and `git diff`
- Understand branches and pull requests
- Handle rejected pushes safely
- Resolve merge conflicts without losing work
- Keep unrelated or unfinished changes out of commits
- Write clear commit messages for QA work

## 1. Git vs GitHub

**Git** is a version control system that tracks changes to files and stores commit history.

**GitHub** is an online platform that hosts Git repositories and supports collaboration, pull requests, reviews, and issue tracking.

Example:

- Git tracks changes to a test-case file on my computer.
- GitHub stores the remote repository so other team members can access the project.

## 2. The Git Workflow

The basic workflow is:

1. Working directory — where files are created or edited.
2. Staging area — where selected changes are prepared for the next commit.
3. Local repository — where commits are saved.
4. Remote repository — where changes are shared, such as on GitHub.

Common workflow:

```bash
git status
git add Notes/Day-61-Git-and-GitHub-for-QA.md
git diff --staged
git commit -m "Day 61: Document Git and GitHub workflow"
git push
```

The staged diff should be reviewed before committing.

## 3. Essential Git Commands

| Command | Purpose |
|---|---|
| `git status` | Shows changed, staged, and untracked files |
| `git add <file>` | Stages a selected file |
| `git add .` | Stages changes in the current directory and its subdirectories |
| `git diff` | Shows unstaged changes |
| `git diff --staged` | Shows changes staged for the next commit |
| `git commit -m "message"` | Saves staged changes as a local commit |
| `git push` | Sends local commits to the remote repository |
| `git pull` | Fetches and integrates remote changes |
| `git fetch` | Downloads remote updates without integrating them into the current branch |
| `git branch` | Lists local branches |
| `git switch <branch>` | Switches branches |

## 4. Branches and Pull Requests

A branch allows a tester to work on changes separately from the main branch.

Example:

```bash
git switch -c day-61-git-practice
```

A pull request allows team members to review proposed changes before merging them into a target branch.

A typical collaboration flow is:

1. Create a branch.
2. Make and test changes.
3. Stage and commit the intended files.
4. Push the branch.
5. Open a pull request.
6. Address review feedback.
7. Merge after approval.

## 5. Handling a Rejected Push

A push can be rejected when the remote branch contains commits that are not in the local branch.

A safe response is to inspect the repository state, fetch remote updates, integrate them appropriately, resolve any conflicts, run relevant checks, and push again.

Do not force-push as a default solution. It can overwrite or discard other people's work.

## 6. Merge Conflicts

A merge conflict can occur when Git cannot automatically combine overlapping changes.

Safe resolution:

1. Read Git's conflict message.
2. Open the affected file.
3. Inspect the conflicting sections.
4. Agree on the correct combined content.
5. Remove conflict markers after resolving the content.
6. Review the complete file.
7. Run relevant checks.
8. Stage and commit the resolution.

For QA documentation, this helps prevent accidental loss of test steps, expected results, or bug-report details.

## 7. Writing Clear Commit Messages

A commit message should describe the change.

Examples:

```text
Add API authentication test cases
Update expected results in checkout tests
Document cross-browser testing findings
Fix incorrect steps in login test cases
```

Avoid vague messages such as `update`, `changes`, or `stuff`.

## 8. Avoiding Unrelated Changes

Before committing:

```bash
git status
```

Stage only the intended file or files, then inspect:

```bash
git diff --staged
```

Do not delete an unrelated file just because it should not be part of the commit. Leave it untouched unless there is a valid reason to remove it.

## Key Takeaways

1. Git tracks file history; GitHub hosts and supports collaboration around Git repositories.
2. `git status` helps identify what has changed.
3. The staging area lets me select the changes intended for a commit.
4. `git diff` and `git diff --staged` help me review changes before saving them.
5. Branches support isolated work, while pull requests support review.
6. Push rejections and merge conflicts should be handled carefully.
7. Clear commit messages make QA work easier to understand.
8. A good commit contains the intended changes—not unrelated or unfinished work.

## QA Relevance

QA engineers use version control to maintain test cases, test plans, bug-report templates, automation scripts, and supporting documentation. Safe Git practices improve traceability, collaboration, and the reliability of shared QA assets.
