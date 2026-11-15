import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { createPageMetadata, siteMetadataBase } from "@/lib/site-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "WAID | Women Action for Inclusive Development",
    description:
      "Women Action for Inclusive Development seeks to promote inclusive communities through education, child protection and empowerment of women and young people.",
    pathname: "/",
  }),
  metadataBase: siteMetadataBase,
  applicationName: "WAID",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
