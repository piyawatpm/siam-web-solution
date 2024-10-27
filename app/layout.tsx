import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
import localFont from "next/font/local";

const kanetin = localFont({
  src: "../public/fonts/KanetinPersonalUse-vmXK9.otf",
  variable: "--font-kanetin",
});
export const metadata: Metadata = {
  title: "Siam Web Solution - Professional Web Development Services",
  description:
    "Siam Web Solution offers top-notch web design, development, and digital marketing services for businesses in Thailand and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${kanetin.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
