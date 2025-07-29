import ClientWrapper from "@/components/effect/ClientWrapper";
import Footer from "@/components/section/footer";
import Navbar from "@/components/section/navbar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Federo } from "next/font/google";
import { Toaster } from "react-hot-toast";
import commons_components from "../utils/commons_components.json";
import "./globals.css";

const { mata_title, meta_description } = commons_components;

const primaryFont = Federo({
  variable: "--font-federo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: mata_title,
  description: meta_description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${primaryFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <Toaster />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
