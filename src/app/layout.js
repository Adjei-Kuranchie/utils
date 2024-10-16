import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import Navbar from "./../components/Navbar";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: `Utils | A Utility App`,
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-800`}
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar>{children}</Navbar>
        </ThemeProvider>
      </body>
    </html>
  );
}
