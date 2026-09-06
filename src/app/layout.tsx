import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/common/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { JsonLd } from "@/components/common/JsonLd";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Orbytes | Enterprise Technology, Managed Security & Cloud Solutions",
  description:
    "Orbytes delivers proactive cybersecurity (MSSP), managed IT operations (MSP), cloud migration, ITSM, and digital solutions for growing and enterprise organizations across India and Canada.",
  keywords: [
    "Managed Security Services",
    "MSSP",
    "Managed IT Services",
    "MSP",
    "Cloud Migration",
    "Azure FinOps",
    "ITSM",
    "ITIL",
    "IT Consulting",
    "Orbytes Global Solutions",
  ],
  metadataBase: new URL("https://technosprint.net"),
  openGraph: {
    title: "Orbytes | Technology that Secures. Technology that Scales.",
    description:
      "Enterprise technology solutions built around your business: Managed Security (MSSP), 24/7 Managed IT, Cloud Migration, and Strategic IT Consulting.",
    url: "https://technosprint.net",
    siteName: "Orbytes Global Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbytes | Enterprise Technology & Managed Services",
    description: "Technology that secures. Technology that scales. Technology that moves business forward.",
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
                const saved = localStorage.getItem('technosprint-theme');
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
      </head>
      <body className="bg-[#f8fafc] text-slate-900 dark:bg-[#050814] dark:text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 font-sans">
        <ThemeProvider>
          <JsonLd />
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="relative min-h-screen overflow-hidden">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
