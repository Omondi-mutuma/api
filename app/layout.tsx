import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"], // Specify weights if needed
  subsets: ["latin"], // Use subsets as necessary
});

export const metadata: Metadata = {
  title: "API",
  description: "Leading in sustainable energy production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>{children}</body>
    </html>
  );
}
