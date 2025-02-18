import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drillcon - Expert Drilling and Construction Services",
  description:
    "Drillcon specializes in high-quality drilling and construction services, ensuring customer satisfaction with a proven track record.",
  keywords:
    "drilling, construction, water pumps, community projects, agricultural services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
