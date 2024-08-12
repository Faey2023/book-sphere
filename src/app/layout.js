import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { Toaster } from "react-hot-toast";

const robotoSerif = Roboto_Serif({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Book Sphere",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSerif.className}>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
