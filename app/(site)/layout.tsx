import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";
import GlobalFooter from "@/components/Footer/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <GlobalFooter />
      </body>
    </html>
  );
}