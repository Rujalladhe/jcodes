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
  title: "InCruiter - Augmented AI for Precision Hiring",
  description:
    "InCruiter is an AI Interview & Interview-as-a-Service platform. Hire 4X faster and cut hiring costs by up to 80% with AI interviews and a network of 4500+ expert interviewers.",
  metadataBase: new URL("https://www.incruiter.com"),
  openGraph: {
    title: "InCruiter - Interview as a Service Platform",
    description:
      "AI-powered interview solutions for smarter recruitment. Trusted by 600+ global enterprises.",
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
