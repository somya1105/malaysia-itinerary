import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaysia- 2026",
  description: "Day-by-day itinerary — KL · Genting · Perhentian",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
