import { Wrap, Kicker, H2, Card } from "./ui";
import Reveal from "./Reveal";

const roles = [
  {
    title: "CISO / Security Lead",
    items: [
      "Centralized policies scoped to groups and workstations",
      "All masking and blocking incidents in a single console",
      "Verifiable integrity: signatures, tamper events, audit trail",
    ],
  },
  {
    title: "Platform team",
    items: [
      "Stand up the perimeter using a documented Compose stack",
      "Roll out agents through your existing MDM process",
      "Diagnose via health-check endpoints and structured logs",
    ],
  },
  {
    title: "Developer",
    items: [
      "Familiar terminal and tools — workflow stays intact",
      "Local processing keeps the terminal responsive",
      "Masking focuses enforcement on data while preserving developer privacy",
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Who benefits</Kicker>
          <H2>Value for every role</H2>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {roles.map((r) => (
            <Reveal key={r.title}>
              <Card className="h-full">
                <h3 className="mb-3.5 text-[17.5px] font-semibold text-blue">
                  {r.title}
                </h3>
                <ul>
                  {r.items.map((it) => (
                    <li
                      key={it}
                      className="relative py-1.5 pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:font-bold before:text-green before:content-['✓']"
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
