const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-guard.pro";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-line bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] items-center gap-7 px-5 sm:px-7 lg:px-8 max-sm:min-h-[60px]">
        <a href={siteUrl} className="flex shrink-0 items-center gap-2 text-[18px] font-bold tracking-[-0.01em] text-white">
          <span className="text-[#5468ff]">▲</span>
          <span>AI Guard</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          <a href="#features" className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            Features
          </a>
          <a href="#how" className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            How it works
          </a>
          <a href="#deploy" className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            Deployment
          </a>
          <a href="#faq" className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            FAQ
          </a>
        </nav>

        <a
          href="#pilot"
          className="ml-auto inline-flex shrink-0 items-center justify-center rounded-[10px] border border-blue bg-blue px-5 py-2.5 text-[14px] font-semibold text-white transition hover:-translate-y-px hover:border-blue-bright hover:bg-blue-bright lg:ml-0"
        >
          Request a pilot
        </a>
      </div>
    </header>
  );
}
