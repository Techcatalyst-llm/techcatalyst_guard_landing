import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy-950 py-12 text-[14px]">
      <Wrap className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-white">
            <span className="text-[#5468ff]">▲</span>
            AI Guard
          </div>
          <p className="mt-3 max-w-[520px] leading-[1.55] text-navy-text">
            AI Guard — secure developer workstation for working with AI agents.
          </p>
        </div>

        <div className="grid gap-2 lg:justify-end">
          <a href="mailto:tanya@ai-guard.pro" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            tanya@ai-guard.pro
          </a>
          <a href="https://t.me/pillardev" target="_blank" rel="noreferrer" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Telegram
          </a>
          <a href="https://ai-guard.pro/privacy" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Privacy policy
          </a>
          <a href="https://ai-guard.pro/cookie" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Cookie policy
          </a>
          <a
            href="https://ai-guard.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6a74a3] transition-colors hover:text-[#aab8ff]"
          >
            © 2026 AI Guard
          </a>
        </div>
      </Wrap>
    </footer>
  );
}
