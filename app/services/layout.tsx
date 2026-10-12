import Header from "@/components/Header/page";  
import GlobalFooter from "@/components/Footer/page";
import "../(site)/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Services | IGR Digital',
  description: 'Digital Marketing & SEO Services',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans h-full antialiased`}>
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
