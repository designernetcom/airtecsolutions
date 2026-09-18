import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airtec Solutions | Modular OT & Cleanroom Solutions",
  description: "Airtec Solutions provides Modular Operation Theatres, Cleanrooms, HVAC, HEPA Filtration and Clean Air Systems for healthcare, pharmaceutical, medical device and critical industries.",
  openGraph: { title: "Airtec Solutions | Modular OT & Cleanroom Solutions", description: "Engineered clean environment solutions for healthcare and critical industries.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
