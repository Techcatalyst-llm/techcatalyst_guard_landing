import { Wrap, Kicker, H2, Code } from "./ui";
import Reveal from "./Reveal";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Where is data stored?",
    a: "The server stack, database and all events are deployed in your infrastructure. Telemetry contains only trigger facts and data categories; original values stay on the workstation.",
  },
  {
    q: "How does protection stay active?",
    a: "In strict mode the agent, shell integrations and policies are protected against disabling and manual tampering. Modification attempts are detected, and the agent engages a fallback protection mode. Less critical groups can use a flexible mode with a local toggle.",
  },
  {
    q: "Which operating systems and shells are supported?",
    a: (
      <>
        Pilot perimeter: macOS and Linux with <Code>zsh</Code> and <Code>bash</Code>.
        PowerShell support and full Windows perimeter targeted for Q4 2026.
      </>
    ),
  },
  {
    q: "Will this slow down terminal work?",
    a: "Processing runs locally using rules and regular expressions. Network calls are off the critical path, so the terminal stays responsive. Protection continues autonomously regardless of server availability.",
  },
  {
    q: "How is the server stack deployed?",
    a: "Docker Compose with PostgreSQL is deployed by your platform team using a documented runbook. We provide an architecture diagram, resource sizing and operational procedures including backup and restore.",
  },
  {
    q: "How is this different from DLP or a secret scanner?",
    a: "Traditional DLP controls the network and perimeter; scanners analyze code in the repository. AI Guard adds control at the point of execution — commands and their output on the workstation, where data enters AI tools. A repository scanner is included as a complementary layer.",
  },
  {
    q: "How is product continuity ensured?",
    a: "The solution is deployed entirely in your perimeter and operates autonomously. For critical deployments, source code escrow is available through an independent agent, released to the customer upon agreed conditions.",
  },
  {
    q: "Where is data hosted?",
    a: "The server stack and all data are deployed in your infrastructure. You maintain full control over data retention, access and jurisdiction.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal className="text-center">
          <Kicker>FAQ</Kicker>
          <H2>Frequently asked questions</H2>
        </Reveal>
        <Reveal className="mx-auto mt-11 max-w-[800px]">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="mb-3 rounded-2xl border border-line bg-white px-[26px] transition-shadow open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none justify-between gap-[18px] py-5 text-[17px] font-semibold text-[#0d1326]">
                {f.q}
              </summary>
              <p className="max-w-[690px] pb-[22px] text-[15.5px] text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
