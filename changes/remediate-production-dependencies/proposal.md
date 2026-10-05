# Remediate production dependency advisories

## Why

The production dependency audit of the `ai-guard` landing release reports a
critical Next.js advisory and a high-severity `sharp` advisory. A public
deployment cannot proceed while these are reachable in the production tree.

## What Changes

- Apply the package manager's compatible advisory remediation to the lock file.
- Upgrade Tailwind CSS to 4.3.3 and its dedicated PostCSS plugin to remove the
  vulnerable Tailwind 3 dependency tree.
- Replace the removed `next lint` command with Biome so the branch retains a
  supported lint gate under Next.js 16.
- Rebuild and re-audit before starting the public process.

## Impact

No page content, domain routing, environment setting, or API contract changes.
Rollback is the preceding lock file revision and a process restart.
