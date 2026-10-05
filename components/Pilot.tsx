"use client";

import { FormEvent } from "react";
import { Wrap, Kicker, H2, Lead } from "./ui";
import Reveal from "./Reveal";

const includes = [
  "Server stack deployed in your perimeter",
  "Pilot group of workstations connected",
  "Detection quality measured on your repositories",
  "Acceptance criteria and guarantee boundaries documented before kickoff",
  "Architecture diagram, resource sizing and deployment requirements",
  "Operational independence: perimeter, data and agents stay under your control",
];

const CONTACT = "tanya@ai-guard.pro";

export default function Pilot() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nCompany: ${fd.get("company")}\nE-mail: ${fd.get("email")}\n\n${fd.get("msg")}`
    );
    window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(
      "AI Guard pilot request"
    )}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-soft px-4 py-[13px] text-[15px] text-ink transition-colors focus:border-blue focus:bg-white focus:outline-none";

  return (
    <section id="pilot" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap className="grid grid-cols-2 gap-14 max-md:grid-cols-1">
        <Reveal>
          <Kicker>Pilot deployment</Kicker>
          <H2>Test on your repositories and your infrastructure</H2>
          <Lead>
            AI Guard is in the corporate pilot phase. We deploy the solution
            in your infrastructure and measure results together on a live
            repository.
          </Lead>
          <ul className="mt-[22px]">
            {includes.map((it) => (
              <li
                key={it}
                className="relative py-2.5 pl-8 text-base text-muted before:absolute before:left-0 before:top-[9px] before:flex before:h-[22px] before:w-[22px] before:items-center before:justify-center before:rounded-full before:bg-green/10 before:text-xs before:font-bold before:text-green before:content-['✓']"
              >
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-panel border border-line bg-white p-9 shadow-card max-sm:rounded-card max-sm:p-5"
          >
            <div className="mb-4">
              <label htmlFor="f-name" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Name
              </label>
              <input id="f-name" name="name" type="text" required autoComplete="name" placeholder="John Smith" className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-company" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Company
              </label>
              <input id="f-company" name="company" type="text" required autoComplete="organization" placeholder="Acme Inc." className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-email" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Work e-mail
              </label>
              <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="name@company.com" className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-msg" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Comment
              </label>
              <textarea id="f-msg" name="msg" placeholder="Team size, scenarios of interest..." className={`${field} min-h-[88px] resize-y`} />
            </div>
            <button
              type="submit"
              className="w-full rounded-[10px] bg-blue px-7 py-[15px] text-base font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
            >
              Request a pilot
            </button>
            <p className="mt-3.5 text-center text-[13.5px] text-dim">
              On-premises architecture: pilot data stays in your infrastructure
            </p>
            <p className="mt-2 text-center text-sm text-dim">
              or email us directly:{" "}
              <a href={`mailto:${CONTACT}`} className="text-blue hover:underline">
                {CONTACT}
              </a>
            </p>
          </form>
        </Reveal>
      </Wrap>
    </section>
  );
}
