import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup KPI Autopilot — Auto-generate startup metrics dashboards",
  description: "Connect Stripe and analytics tools to auto-generate standard startup KPI dashboards: ARR, churn, CAC, and more. Built for early-stage founders and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="511f1e4b-5d40-4912-abb0-2189138e7be1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
