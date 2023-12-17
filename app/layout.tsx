import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "inBusiness",
  description: "inBusiness",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-tocuh-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
