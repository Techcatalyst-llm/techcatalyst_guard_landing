import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const stages = [
  {
    tag: "Now",
    title: "Workstation control",
    text: "Terminal, MCP, clipboard and repositories governed by corporate policies. Secrets and PII masked before reaching the AI agent.",
  },
  {
    tag: "Next",
    title: "LLM Firewall at the gateway",
    text: "Inspect model requests and responses at the data-path entry point. Prompt injection, jailbreak and data leaks under control. Enabled for existing clients without integration changes.",
  },
  {
    tag: "Later",
    title: "Red teaming and compliance",
    text: "Automated attack-based testing, compliance reporting, SIEM and SOC integration.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Roadmap</Kicker>
          <H2>What's next: LLM Firewall at the AI Guard gateway</H2>
          <Lead>
            AI Guard evolves from workstation control to a full AI traffic
            security perimeter. The next stage is inspecting model requests
            and responses directly at the gateway.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {stages.map((s) => (
            <Reveal key={s.title}>
              <Card className="h-full">
                <div className="mb-3 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                  {s.tag}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{s.title}</h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
