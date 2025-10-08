import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "@/app/globals.css";
const workSans = Work_Sans({
  subsets: ["latin"], // or ['latin-ext'] if needed
  weight: ["400", "500", "700"], // choose weights you want
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Skillx Home",
  description: "Skillx Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
