import type { Metadata, Viewport } from "next";
import { Fira_Sans, Montserrat } from "next/font/google";
import { SITE } from "@/config/site";
import { SiteHeader } from "@/components/layout/header/site-header";
import { SiteFooter } from "@/components/layout/footer/site-footer";
import { SocialRail } from "@/components/layout/social-rail";
import "./globals.css";

/** Headings: Montserrat, the same family as the logo wordmark. */
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-montserrat", display: "swap" });
/** Body: Fira Sans, the reference site's text face. */
const fira = Fira_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-fira", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} ${SITE.edition} | Bengaluru, 8-9 June 2027`, template: `%s | ${SITE.name} ${SITE.edition}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} ${SITE.edition}`,
    description: SITE.description,
    images: [{ url: "/images/hero.webp", width: 2000, height: 1333, alt: "India GCC Show conference audience" }],
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} ${SITE.edition}`, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: "#0a214c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${fira.variable}`}>
      <body className="min-h-dvh overflow-x-clip">
        <a href="#main" className="sr-only z-[100] rounded-lg bg-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <SocialRail />
      </body>
    </html>
  );
}
