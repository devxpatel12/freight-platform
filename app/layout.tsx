import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Asian India Trans Logistics - Digital Freight & Trucking Platform",
  description: "All-India Transport Coverage - Rajasthan, Delhi, Uttar Pradesh, Madhya Pradesh, Bihar, West Bengal, Assam, Meghalaya, Tripura, Mizoram, Nagaland, Maharashtra, Andhra Pradesh, Karnataka, Tamil Nadu & All Northern States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}

