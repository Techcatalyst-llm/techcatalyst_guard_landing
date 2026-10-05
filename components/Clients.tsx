import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const ndaClients = [
  "AdSkill / AdWave LTD",
  "Adsterra / AD Market Limited",
  "Propeller Ads Ltd",
];

export default function Clients() {
  return (
    <section id="clients" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Track record</Kicker>
          <H2>Built on real-world deployment experience</H2>
          <Lead>
            The team behind AI Guard has delivered enterprise projects
            in telecom, fintech, adtech and consulting. Some engagements
            are covered by NDAs.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-3 text-[20px] font-semibold text-[#0d1326]">NDA-protected projects</h3>
              <p className="mb-4 text-[15px] text-muted">
                Some AI and middleware infrastructure engagements are covered by
                non-disclosure agreements. Company names are listed publicly;
                implementation details remain within contractual boundaries.
              </p>
              <ul className="space-y-3">
                {ndaClients.map((name) => (
                  <li
                    key={name}
                    className="relative pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-3 text-[20px] font-semibold text-[#0d1326]">Engagements delivered</h3>
              <ul className="space-y-3 text-[15px] text-muted">
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  LLM access and proxy infrastructure for AI model operations
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  API layer for AI and fintech workload integration and routing
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  Applied AI models for domain-specific use cases
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  Projects requiring access control, traceability and sensitive data handling
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
