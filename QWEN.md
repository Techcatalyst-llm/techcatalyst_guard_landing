# AI Guard Landing — Project Instructions

## Project Overview

Marketing landing for AI Guard (workstation AI-DLP). Next.js App Router + Tailwind. The repository sells the product; product behaviour is specced in the product repository — marketing claims must not exceed what the specs document.

## Spec-Driven Development (OpenSpec)

- `specs/` — source of truth: what the system does today (`specs/project.md`, capability specs: Requirements/Scenarios/Implementation/Verification).
- `changes/` — what we change next and why: 4 phases explore → propose → apply → archive (`changes/README.md`).
- No behaviour change without a change artifact; commits attributed `[<change-id>] <summary>` + `Change: <change-id>` line in body. Without artifact — `[no-change]` with justification.
- For trigger-list initiatives (feature, workflow change, automation effort, enterprise requirement, significant UI/backend task) Product Squad discovery is mandatory before propose.

## Agent Skills (5-skill workflow)

5 skills cloned to root (each a separate git repo):

- `.cto-skill/` — implementation and architecture decisions. Session start: read `.cto-skill/SKILL.md`; significant decisions/context written to `.cto-skill/data/` and committed+pushed immediately.
- `.qa-skill/` — independent verification against spec after each CTO stage. Verdicts: verified / with-bugs / not-implemented / needs-testing / ambiguous-spec. Gate PASS/FAIL; critical/high defects do not pass. Reports in `.qa-skill/data/verifications/`, defects in `.qa-skill/data/defects/`.
- `.product-squad-skill/` — what we build, for whom and why. Mandatory SDD Opportunity Research Subcycle before propose for trigger-list initiatives (`templates/sdd-opportunity-research.md` → `data/research/`).
- `.orchestrator-skill/` — stage sequencer, handoffs, state in `.orchestrator-skill/data/state/` (read first).
- `.security-engineer-skill/` — enterprise-level security verification; can block release on critical/high.

Pipeline: Product Squad (discovery) → CTO (builds) → QA (validates technique) → Product Squad (validates business fit) → Security Engineer (security) — orchestrated by Orchestrator. For all skills: `git pull` before work, commit+push after every significant write to `data/`.

## Coexistence with Other AI Tools

- `.claude/`, `CLAUDE.md`, `AGENTS.md` — other tool configurations (do not modify without request).
- This file (QWEN.md) — Qwen Code context.
- Skill directories in `.gitignore` (each is its own git repo).

## Language

User communicates in informal Russian. Reply in Russian unless asked otherwise. Technical artifacts (code, paths, commands) — in English.
