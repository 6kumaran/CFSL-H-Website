import type { Metadata } from "next";
import "./globals.css";
import "./transitions.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SplashScreen } from "@/components/splash-screen";

export const metadata: Metadata = {
  title: {
    default: "CFSL Hyderabad | Central Forensic Science Laboratory",
    template: "%s | CFSL Hyderabad",
  },
  description:
    "Official website concept for the Central Forensic Science Laboratory, Hyderabad. Explore institutional information, forensic divisions, services and public notices.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
