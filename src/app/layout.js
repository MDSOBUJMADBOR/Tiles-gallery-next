import { Poppins  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})


export const metadata = {
  title: "Tiles Gallery",
  description: "A modern tiles gallery showcasing beautiful ceramic and decorative tile designs.",
};

export default function RootLayout({ 
  children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col overflow-x-hidden`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
          <ToastContainer />
        </body>
    </html>
  );
}
