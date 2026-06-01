import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaysia Honeymoon · 12-21 June 2026",
  description: "Day-by-day itinerary with checkboxes — KL · Genting · Perhentian",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
