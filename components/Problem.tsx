import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const pains = [
  {
    ico: "ai",
    title: "AI agents in the terminal",
    text: (
      <>
        AI agents execute commands and read output automatically. A single{" "}
        <Code>cat .env</Code> — and credentials are already in the external model's context.
      </>
    ),
  },
  {
    ico: ">_",
    title: "Secrets in command output",
    text: "Logs with PII, configuration, infrastructure state and cloud credentials are routinely printed to stdout and flow downstream.",
  },
  {
    ico: "⧉",
    title: "Clipboard",
    text: "A copied token reaches an assistant chat or external web tool in seconds — faster than a network gateway can react.",
  },
  {
    ico: "⇄",
    title: "MCP tools",
    text: "MCP servers give agents direct access to files and resources. Local control closes potential leak channels at each tool boundary.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>The problem</Kicker>
          <H2>AI tools read faster than DLP can react</H2>
          <Lead>
            A developer connects an AI agent — and it executes more commands in
            a minute than a human would in an hour. Every command returns output,
            and that output flows automatically into the external model's context:
            that is how agents work.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {pains.map((p) => (
            <Reveal key={p.title}>
              <Card className="h-full">
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-blue-soft font-mono text-[15px] font-semibold text-blue">
                  {p.ico}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{p.title}</h3>
                <p className="text-[15px] text-muted">{p.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-9 max-w-[780px] rounded-2xl border border-line border-l-4 border-l-amber bg-white px-[26px] py-5 text-muted">
            <b className="text-ink">A network gateway sits further down the chain:</b>{" "}
            data leaves the workstation before centralized systems can react.
            A local agent moves control to the point of origin.
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}
