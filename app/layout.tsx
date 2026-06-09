import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Imora — Rooted in Comfort, Styled with Soul",
  description:
    "Discover indie ethnic casual wear for the free and expressive. Soft silhouettes, earthy tones, and everyday stories — handcrafted for the modern woman.",
  keywords: [
    "indie fashion",
    "ethnic casual wear",
    "cotton kurtis",
    "kaftans",
    "relaxed tops",
    "women's fashion India",
    "slow fashion",
  ],
  icons: {
    icon: "/favicon.png?v=5",
    shortcut: "/favicon.png?v=5",
    apple: "/favicon.png?v=5",
  },
  openGraph: {
    title: "Imora — Rooted in Comfort, Styled with Soul",
    description:
      "Soft silhouettes for everyday stories. Explore indie ethnic casual wear made for the free and expressive.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
