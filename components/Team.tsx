import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Founder-led product",
    text: "Architecture, threat model, pilot deployments and product decisions are driven by the team that designs and ships the system.",
  },
  {
    title: "Developer tool security",
    text: "Focused on real-world AI agent behavior across the terminal, MCP tools and developer workstations.",
  },
  {
    title: "Pilot in your perimeter",
    text: "Value is proven in your environment, on real repositories, against measurable acceptance criteria.",
  },
];

export default function Team() {
  return (
    <section id="team" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Team</Kicker>
          <H2>Building AI security around the real development workflow</H2>
          <Lead>
            AI Guard is developed as an engineering security product: from the
            threat model and local policy enforcement to pilot deployments
            in customer infrastructure.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-panel border border-line bg-white p-8 shadow-panel">
              <div className="mb-3 inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                Founder
              </div>
              <h3 className="text-[28px] font-semibold tracking-[-.02em] text-[#0d1326]">
                Tanya Farberg
              </h3>
              <p className="mt-4 max-w-[720px] text-[16px] leading-8 text-muted">
                Founder of AI Guard. Leads product, architecture and pilot
                engagements at the intersection of AI infrastructure, developer
                tools and workstation security.
              </p>
              <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-muted">
                Pilot conversations go directly to the founder, who designs the
                policy enforcement layer, governance model and guarantee
                boundaries.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#pilot"
                  className="inline-flex items-center rounded-[10px] bg-blue px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
                >
                  Discuss a pilot
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {principles.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full">
                  <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{item.title}</h3>
                  <p className="text-[15px] text-muted">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
