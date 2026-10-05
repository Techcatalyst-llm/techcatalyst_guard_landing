import { Wrap, Kicker, H2, Lead, Code } from "./ui";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Agent intercepts",
    text: (
      <>
        The local agent hooks into shells — <Code>zsh</Code>, <Code>bash</Code>,{" "}
        <Code>PowerShell</Code> — and intercepts commands and <Code>stdout/stderr</Code>{" "}
        streams via a secure PTY session, along with MCP traffic and clipboard.
      </>
    ),
  },
  {
    title: "Policies decide",
    text: (
      <>
        A local rule-based engine evaluates each command and its output against
        signed corporate policies and applies a decision: <Code>allow</Code>,{" "}
        <Code>warn</Code>, <Code>mask</Code> or <Code>block</Code> — in real time.
      </>
    ),
  },
  {
    title: "Events stay on-prem",
    text: "Every trigger is logged in a local audit journal and shipped in batches to the admin console inside your perimeter. Original credential values never leave the workstation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>How it works</Kicker>
          <H2>Intercept — local check — audit</H2>
          <Lead>
            All processing happens on the workstation. The server receives only
            audit events, and the control plane is deployed in your infrastructure.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {steps.map((s, i) => (
            <Reveal key={s.title}>
              <div className="h-full rounded-card border border-line bg-white p-7">
                <span className="mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="mb-2.5 text-[18.5px] font-semibold text-[#0d1326]">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
