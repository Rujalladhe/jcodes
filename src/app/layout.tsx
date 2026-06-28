import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChainGPT - Unleash The Power of Blockchain AI",
  description:
    "ChainGPT is a leading AI infrastructure focused on developing AI-enhanced solutions for the Web3, Blockchain, and Cryptocurrency sectors.",
  metadataBase: new URL("https://www.chaingpt.org"),
  openGraph: {
    title: "ChainGPT - Unleash The Power of Blockchain AI",
    description:
      "Your personal expert in all crypto & blockchain related topics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Apply the saved theme before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-cgpt-bg text-cgpt-fg">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
