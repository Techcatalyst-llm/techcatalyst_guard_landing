import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const blocks = [
  {
    title: "Server stack",
    tag: null,
    text: "Docker Compose, PostgreSQL and a reverse proxy. Health-check and readiness endpoints, structured logs, Loki export, documented backup and restore procedures.",
  },
  {
    title: "Agent rollout",
    tag: null,
    text: "Packages for macOS and Linux; Windows and PowerShell targeted for Q4 2026. Deployment via MDM or software management, automatic shell integration and agent startup.",
  },
  {
    title: "Scale",
    tag: null,
    text: "From a pilot stand to a fleet of 500–1,500 workstations. Documented resource sizing, scaling architecture and high-availability recommendations for the production perimeter.",
  },
  {
    title: "Integrations",
    tag: "roadmap",
    text: "SSO and AD groups with lifecycle management, event export to SIEM and Grafana with alerting, Kubernetes and Helm delivery, Guard mode for external agent frameworks.",
  },
];

const stack = [
  "docker compose",
  "postgresql",
  "signed policy versions",
  "zsh / bash / PowerShell",
  "macOS / Linux",
];

export default function Deploy() {
  return (
    <section id="deploy" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Deployment</Kicker>
          <H2>Fully on-premises</H2>
          <Lead>
            Server stack and data are deployed entirely within your infrastructure.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {blocks.map((b) => (
            <Reveal key={b.title}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">
                  {b.title}
                  {b.tag && (
                    <span className="ml-2 inline-block rounded-[10px] border border-amber/35 px-[11px] py-0.5 align-[2px] text-xs font-semibold tracking-[.03em] text-amber">
                      {b.tag}
                    </span>
                  )}
                </h3>
                <p className="text-[15px] text-muted">{b.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-[30px] flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-[10px] border border-line bg-white px-3.5 py-1.5 font-mono text-[13px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
