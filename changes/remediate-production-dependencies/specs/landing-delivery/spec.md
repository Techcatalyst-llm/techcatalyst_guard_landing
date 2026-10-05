# Landing delivery delta

## ADDED Requirements

### Requirement: The public landing SHALL use non-vulnerable production dependencies

The installed production dependency tree SHALL report zero high and zero
critical advisories before a public deployment.

#### Scenario: Production audit

- **WHEN** the `ai-guard` lock file is installed for production
- **THEN** the production audit reports no high or critical findings
