import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Verifiable detection",
    items: [
      "Accuracy and recall measured on your repositories; metrics are reproducible",
      "Thresholds and categories are configurable; suppression rules are part of the system",
      "Pilot summary report includes measured indicators",
    ],
  },
  {
    title: "Data and privacy",
    items: [
      "Data is deployed in your perimeter",
      "Telemetry contains trigger categories and facts; original values stay on the workstation",
      "Full control over data retention and access",
    ],
  },
  {
    title: "Vendor continuity",
    items: [
      "The solution runs autonomously in your perimeter",
      "Local perimeter stays operational regardless of external service availability",
      "Source code escrow available on request through an independent agent",
    ],
  },
];

export default function Assurance() {
  return (
    <section id="assurance" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Trust and verifiability</Kicker>
          <H2>Answers for enterprise technical due diligence</H2>
          <Lead>
            AI Guard is in the corporate pilot phase. Product status,
            architecture, metrics and guarantee boundaries are disclosed upfront.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {pillars.map((p) => (
            <Reveal key={p.title}>
              <Card className="h-full">
                <h3 className="mb-3.5 text-[17.5px] font-semibold text-blue">
                  {p.title}
                </h3>
                <ul>
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="relative py-1.5 pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
