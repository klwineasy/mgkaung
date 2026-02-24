import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAUNG LWIN // Front-End Developer",
  description:
    "Portfolio of Kaung Lwin — Front-End Developer, Full-Stack Aspirant, AWS Certified. 6+ years building React, TypeScript, and cloud-integrated web applications.",
  keywords: [
    "Kaung Lwin",
    "Front-End Developer",
    "React",
    "TypeScript",
    "AWS",
    "Portfolio",
    "Phoenix AZ",
  ],
  authors: [{ name: "Kaung Lwin" }],
  openGraph: {
    title: "KAUNG LWIN // Front-End Developer",
    description:
      "Portfolio of Kaung Lwin — Front-End Developer with 6+ years of React, TypeScript & AWS experience.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030308",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
