import { Wrap, Kicker, H2, BtnPrimary } from "./ui";
import Reveal from "./Reveal";

const points = [
  {
    b: "Signed policies.",
    text: "Every policy snapshot is signed by the server and verified by the agent locally.",
  },
  {
    b: "Integrity control.",
    text: "Manual modification of settings or policy is detected — the agent engages strict fallback mode and reports the event to the control plane.",
  },
  {
    b: "Persistent local protection.",
    text: "In strict mode the agent and shell integrations maintain active enforcement state.",
  },
  {
    b: "Minimal telemetry.",
    text: "Events contain trigger facts and metadata; original values stay on the workstation.",
  },
];

export default function StrictMode() {
  return (
    <section id="strict" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap className="grid grid-cols-2 items-center gap-14 max-md:grid-cols-1">
        <Reveal>
          <Kicker>Trust model</Kicker>
          <H2>Strict mode: persistent workstation protection</H2>
          <ul className="mt-2.5">
            {points.map((p) => (
              <li
                key={p.b}
                className="flex gap-3.5 border-b border-[#e4e8f4] py-[15px] text-base last:border-b-0"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-[13px] font-bold text-green">
                  ✓
                </span>
                <span className="text-muted">
                  <b className="text-ink">{p.b}</b> {p.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl border border-line border-l-4 border-l-blue bg-white px-[22px] py-4 text-[15px] text-muted">
            <b className="text-ink">Honest guarantee boundary.</b> Strict mode
            covers routine bypass, accidental leaks and one-click disablement.
            The threat model separately documents scenarios involving a user
            with full administrator privileges. Your team can test the agent
            during a pilot deployment and penetration testing.
          </p>
          <div className="mt-7">
            <BtnPrimary href="#pilot">Test in your environment</BtnPrimary>
          </div>
        </Reveal>
        <Reveal>
          <div
            className="rounded-card border border-line bg-white p-[26px] font-mono text-[13px] leading-[1.9] text-muted shadow-panel"
            aria-hidden="true"
          >
            $ guard policy verify
            <br />
            &nbsp;&nbsp;snapshot: corp-default <span className="text-green-deep">v12</span>
            <br />
            &nbsp;&nbsp;signature: <span className="text-green-deep">valid (ed25519)</span>
            <br />
            &nbsp;&nbsp;fingerprint:{" "}
            <span className="text-green-deep">9f4a…c1d7 — up to date</span>
            <br />
            <br />
            $ vi ~/.guard/policy.json&nbsp;
            <span className="text-amber"># manual edit attempt</span>
            <br />
            <br />
            $ guard status
            <br />
            &nbsp;&nbsp;integrity:{" "}
            <span className="text-danger">FAILED — snapshot tampered</span>
            <br />
            &nbsp;&nbsp;mode: <span className="text-amber">strict fallback engaged</span>
            <br />
            &nbsp;&nbsp;event:{" "}
            <span className="text-green-deep">reported to control plane ✓</span>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
