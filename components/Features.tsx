import { Wrap, Kicker, H2, Card } from "./ui";
import Reveal from "./Reveal";

const features = [
  {
    ico: "$",
    title: "Terminal protection",
    text: "Real-time streaming mask of stdout/stderr. Output stays readable while credentials are replaced with safe masks.",
  },
  {
    ico: "⇄",
    title: "MCP protection",
    text: "Local intermediary validates JSON-RPC requests, blocks access to forbidden resources and masks responses while keeping the protocol functional.",
  },
  {
    ico: "⧉",
    title: "Clipboard protection",
    text: "Background watcher finds secrets in copied text, replaces them with a mask and notifies the user.",
  },
  {
    ico: "⌕",
    title: "Repository scanner",
    text: "Local search for secrets and PII in the working copy: categorized reports, suppression rules, reproducible metrics.",
  },
  {
    ico: "§",
    title: "Centralized policies",
    text: "Draft → review → publish lifecycle, versioning, scope by users, groups and workstations, centralized distribution.",
  },
  {
    ico: "▦",
    title: "Admin console",
    text: "Workstation registry, health monitoring, security event log, policy editor, metrics and license management in a single interface.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Features</Kicker>
          <H2>One agent — all leak channels</H2>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((f) => (
            <Reveal key={f.title}>
              <Card className="h-full">
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-blue-soft font-mono text-[15px] font-semibold text-blue">
                  {f.ico}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{f.title}</h3>
                <p className="text-[15px] text-muted">{f.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
