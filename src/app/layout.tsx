import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/common/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { JsonLd } from "@/components/common/JsonLd";
import { ThemeProvider } from "@/context/ThemeContext";
import { FloatingContactWidget } from "@/components/common/FloatingContactWidget";
import Script from "next/script";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#030714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Enterprise Technology, Managed Security & Cloud Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Orbytes Global Solutions | Technology that Secures. Technology that Scales.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbytes Global Solutions | Enterprise Technology & Managed Services",
    description: siteConfig.description,
    creator: siteConfig.twitter.creator,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('orbytes-theme') || localStorage.getItem('technosprint-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-[#f8fafc] text-slate-900 dark:bg-[#050814] dark:text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 font-sans">
        <ThemeProvider>
          <JsonLd />
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="relative min-h-screen">
              {children}
            </main>
            <Footer />
            <FloatingContactWidget />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
