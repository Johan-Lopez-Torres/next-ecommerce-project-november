import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";
import { Session } from "inspector";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowmazon",
  description: "We make your wallet cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <SessionProvider>
     <body className={inter.className}>
        <Navbar />
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
        <Footer />
      </body>
     </SessionProvider>
    </html>
  );
}
