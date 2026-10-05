import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const layers = [
  {
    title: "Comprehensive AI traffic protection",
    text: (
      <>
        An LLM gateway inspects input and output between the user and the model.
        AI Guard extends that control to the terminal, MCP and clipboard
        used by AI agents.
      </>
    ),
  },
  {
    title: "Firewall logic for AI channels",
    text: (
      <>
        A modern firewall applies layered defense: content inspection, action
        control, user context, access policies and event audit — all in a single
        execution chain.
      </>
    ),
  },
  {
    title: "Control before the model responds",
    text: (
      <>
        The core principle: stop a leak at the point of origin, before
        credentials, PII or internal material enter the external model's context.
      </>
    ),
  },
];

const controls = [
  {
    b: "Request inspection.",
    text: "Validate inbound commands, user prompts and tool-call parameters for credentials, PII, policy circumvention attempts and forbidden request classes.",
  },
  {
    b: "Response inspection.",
    text: "Check stdout/stderr, MCP responses and clipboard before they reach the agent or model: mask, redact or block.",
  },
  {
    b: "Action control.",
    text: "Policies define permitted commands, directories, hosts, MCP resources and operations per role and workstation.",
  },
  {
    b: "Context-aware policy.",
    text: "Decisions factor in the command line, user, group, environment, credential type, station mode and target tool.",
  },
  {
    b: "Built-in audit.",
    text: "The control plane receives trigger facts and metadata; original values stay on the workstation. This supports investigation within an isolated data perimeter.",
  },
];

const threats = [
  "prompt injection via tool responses and documents",
  "credential leaks from .env, logs, configs and stdout",
  "excessive AI agent access to MCP tools",
  "data exfiltration via clipboard and side channels",
];

export default function LLMFirewall() {
  return (
    <section id="llm-firewall" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>AI security perimeter</Kicker>
          <H2>Layered control of AI agent data and actions</H2>
          <Lead>
            AI Guard's architecture controls the full data and action path
            around the model: requests, commands, tool responses, local
            resources and audit events.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {layers.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <span className="mb-[18px] inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                  Layer
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{item.title}</h3>
                <p className="text-[15px] text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-[1.05fr_.95fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-4 text-[22px] font-semibold text-[#0d1326]">
                What the security layer does inside the developer perimeter
              </h3>
              <ul className="space-y-3">
                {controls.map((item) => (
                  <li
                    key={item.b}
                    className="flex gap-3.5 border-b border-[#e4e8f4] py-[13px] text-base last:border-b-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-[13px] font-bold text-green">
                      ✓
                    </span>
                    <span className="text-muted">
                      <b className="text-ink">{item.b}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-card border border-line bg-white p-[26px] shadow-panel">
              <div className="mb-4 inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                Controlled threats
              </div>
              <div className="rounded-2xl border border-line bg-soft p-5">
                <ul className="space-y-3 text-[15px] text-muted">
                  {threats.map((threat) => (
                    <li key={threat} className="flex gap-3">
                      <span className="mt-[9px] h-2 w-2 rounded-full bg-amber" />
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 rounded-2xl border border-line border-l-4 border-l-blue bg-white px-[22px] py-4 text-[15px] text-muted">
                <b className="text-ink">Practical takeaway:</b> full coverage
                spans local commands, tool calls and responses, model requests
                and audit events in a single control chain.
              </p>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
