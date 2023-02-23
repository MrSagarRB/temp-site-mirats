"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.9 }}
        >
          <Navbar />
          {children}
        </motion.div>
      </body>
    </html>
  );
}
