# Day 61 Practical Project — Git & GitHub QA Workflow

## Objective

Practice a safe version-control workflow for QA documentation and demonstrate how to inspect, stage, commit, and share changes.

## Scenario

A QA team maintains test cases and bug-report templates in a shared GitHub repository. I need to update one test case without including unrelated unfinished work.

## Workflow Checklist

- [ ] Check the repository state with `git status`.
- [ ] Review the files that have changed.
- [ ] Stage only the intended QA file.
- [ ] Inspect the staged changes with `git diff --staged`.
- [ ] Confirm that unrelated or unfinished changes are excluded.
- [ ] Commit the intended change with a descriptive message.
- [ ] Push the commit to the appropriate remote branch.
- [ ] Confirm the commit appears in the repository history.

## Example Commands

Replace the example path with the actual file being updated.

```bash
git status
git add path/to/test-case.md
git diff --staged
git commit -m "Update QA test case"
git push
```

## Merge Conflict Practice

If two testers edit the same section of a file:

1. Identify the file reported by Git.
2. Inspect the conflicting content.
3. Agree on the correct combined version.
4. Remove conflict markers after resolving the content.
5. Review the complete file.
6. Stage the resolved file and commit the resolution.

## Expected Outcome

The intended QA documentation change is committed and shared without accidentally including unrelated work or discarding a teammate's changes.

## Evidence to Capture

If this workflow is performed in the actual repository, capture:

- `git status` before staging
- The staged diff
- The successful commit output
- The final repository status

Do not label simulated exercises as live repository evidence. Only add screenshots or terminal output from actions actually performed.

## Reflection

Version control is part of QA traceability. Reviewing staged changes before committing helps ensure that test cases and other QA assets are updated deliberately and safely.
