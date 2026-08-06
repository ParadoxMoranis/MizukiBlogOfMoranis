# UI Refactor Baseline

This file records the repository state immediately before the Vaultr-inspired UI refactor.

## Local repository

- Captured: 2026-08-06 (Asia/Shanghai)
- Branch: `master`
- Commit: `9678c8d70dc61aabcb32fdeb2c08f52c754d95fe`
- Commit summary: `new 1 post`
- Upstream: `origin/master`
- Worktree before capture: clean
- Stack: Astro 5, Svelte 5, Tailwind CSS 3, Stylus

## UI reference

- Repository: `https://github.com/skoowoo/vaultr-notes`
- Reference commit: `30a000ef64fbf850e59b3bd5ad675071e564dfca`
- Reference commit summary: `add recap skills`
- Visual language: neo-brutalism, yellow navigation rail, 2px black borders, square corners, hard offset shadows, Space Grotesk UI typography

## Recovery assets

The ignored directory `.ui-backups/2026-08-06-pre-vaultr-ui/` contains:

- `repository.bundle`: complete Git object and ref backup
- `tracked-files.tar.gz`: exact tracked-file snapshot at the baseline commit

## Restore options

To inspect the original state without touching this worktree:

```bash
git clone .ui-backups/2026-08-06-pre-vaultr-ui/repository.bundle ../MizukiBlog-baseline
```

To restore this worktree with Git, first preserve any later work, then switch to the recorded commit:

```bash
git switch -c ui-refactor-work
git switch --detach 9678c8d70dc61aabcb32fdeb2c08f52c754d95fe
```

The archive can also be extracted into an empty directory for a file-level comparison:

```bash
mkdir -p /tmp/mizuki-ui-baseline
tar -xzf .ui-backups/2026-08-06-pre-vaultr-ui/tracked-files.tar.gz -C /tmp/mizuki-ui-baseline
```

Do not extract the archive over a working tree that contains uncommitted work.
