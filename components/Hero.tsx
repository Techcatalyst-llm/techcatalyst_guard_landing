import { Wrap, Kicker, Lead, BtnPrimary, BtnGhost } from "./ui";
import TerminalDemo from "./TerminalDemo";

const chips = ["On-premises", "Strict mode", "Local processing"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(720px_420px_at_85%_-14%,rgba(84,104,255,.22),transparent_62%)]"
        aria-hidden="true"
      />
      <Wrap className="relative grid items-center gap-12 py-[78px] lg:grid-cols-[1.04fr_.96fr] lg:py-[104px]">
        <div>
          <Kicker className="text-[#8b9cff]">Workstation security</Kicker>
          <h1 className="mt-5 text-[clamp(38px,5.1vw,62px)] font-bold leading-[1.06] tracking-[-.035em] text-white">
            Credentials stay on the workstation.{" "}
            <em className="not-italic text-[#8b9cff]">Protected when working with AI.</em>
          </h1>
          <Lead className="text-navy-text">
            AI Guard intercepts terminal commands, MCP tool responses and
            clipboard — and masks credentials and PII before they reach the
            AI agent. Centralized policies enforce governance, and all
            processing runs on-premises.
          </Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BtnPrimary href="#pilot">Request a pilot deployment</BtnPrimary>
            <BtnGhost href="#pilot" dark>
              Get the architecture overview
            </BtnGhost>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-[8px] border border-navy-line bg-navy-800/60 px-3.5 py-1.5 text-[13px] font-medium text-navy-text before:mr-2 before:text-[9px] before:text-[#22c55e] before:content-['●']"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <TerminalDemo />
      </Wrap>
    </section>
  );
}
