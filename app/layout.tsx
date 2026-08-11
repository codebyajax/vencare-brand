import type { Metadata } from "next";
import "./globals.css";



export const metadata = {
  title: "VenChecker | 4-in-1 Rapid Screening",
  description:
    "VenChecker is a 4-in-1 rapid screening kit designed to screen for HIV-1/2, syphilis, hepatitis B and hepatitis C.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
