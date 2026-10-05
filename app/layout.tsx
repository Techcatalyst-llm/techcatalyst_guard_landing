import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ai-guard.pro"),
  title: "Secure Developer Workstation | AI Guard",
  description:
    "On-premises agent that intercepts commands and masks credentials and PII on developer workstations. Terminal, MCP and clipboard governed by corporate policies.",
  keywords:
    "developer data protection, AI agent security, terminal control, MCP control, credential masking, PII protection, workstation security",
  openGraph: {
    title: "AI Guard — credentials stay on the workstation",
    description:
      "Terminal command interception, credential and PII masking, strict mode and on-premises admin console.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
