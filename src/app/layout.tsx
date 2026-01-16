import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibek Karki",
  description: "Bibek Karki",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} `}>
        <div className="flex flex-col gap-10 max-w-5xl w-full h-screen justify-self-center px-5 md:px-10 cursor-default">
          <div className="flex justify-end ">
            <Navbar />
          </div>

          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
