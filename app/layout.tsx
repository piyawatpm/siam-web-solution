import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
// import { AnimatePresence } from "framer-motion";

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
// import PageAnimatePresence from "./_components/PageAnimatePresence";

// import PageTransitionEffect from "./_components/PageTransitionEffect";
import Nav from "./_components/Nav";
import PageTransitionEffect from "./_components/PageTransitionEffect";
import { Suspense } from "react";
import Header from "./_components/Header";

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
    //   <PageTransitionEffect>{children}</PageTransitionEffect>
    //   {/* <PageTransitionEffect
    //     //    initial={{
    //     //   opacity: 0,
    //     //   WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 0%)",
    //     //   maskImage: "radial-gradient(circle at center, black 0%, black 0%)",
    //     // }}
    //     // animate={{
    //     //   opacity: 1,
    //     //   WebkitMaskImage: "radial-gradient(circle at center, black 100%, black 100%)",
    //     //   maskImage: "radial-gradient(circle at center, black 100%, black 100%)",
    //     //   transition: { duration: 0.6 }
    //     // }}
    //     // exit={{
    //     //   opacity: [1, 1, 1, 1, 1, 0],
    //     //   WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 0%)",
    //     //   maskImage: "radial-gradient(circle at center, black 0%, black 0%)",
    //     //   transition: {
    //     //     opacity: { duration: 0.61, times: [0.1, 0.2, 0.3, 0.9, 0.99, 1] }
    //     //   }
    //     // }}
    // initial={{
    //   opacity: 1,

    //   WebkitMaskSize: "10%",
    //   maskSize: "10%",
    //   WebkitMaskImage:
    //     "radial-gradient(circle, black 30%, transparent 30%)",
    //   maskImage: "radial-gradient(circle, black 5%, transparent 5%)",
    //   WebkitMaskPosition: "center",
    //   maskPosition: "center",
    //   WebkitMaskRepeat: "no-repeat",
    //   maskRepeat: "no-repeat",
    // }}

    //     animate={{
    //       width: "100%",
    //       // opacity: 1,
    //       // WebkitMaskSize: "3000%",
    //       // maskSize: "3000%",
    //       // transition: { duration: 20 },
    //     }}
    //     exit={{
    //       // WebkitMaskSize: "10%",
    //       // maskSize: "10%",
    //       width: "0%",
    //       transition: { duration: 20 },
    //       // opacity: [1, 1, 1, 1, 1, 0],
    //       // transition: {
    //       //   opacity: { duration: 20, times: [0.1, 0.2, 0.3, 0.9, 0.99, 1] },
    //       // },
    //     }}
    //   >
    //     {children}
    //   </PageTransitionEffect> */}

    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${kanetin.variable} relative overflow-x-hidden`}
    >
      <body className=" relative flex flex-col ">
        <nav>
          <Header />
        </nav>

        {/* <body className="font-sans flex flex-col antialiased bg-background text-foreground relative min-h-screen "> */}
        {/* <Nav />  */}
        {/* <Suspense fallback={<div>Loading...</div>}>
    <PageTransitionEffect>{children}</PageTransitionEffect>
  </Suspense> */}
        {children}
        {/* </body> */}
      </body>
    </html>
  );
}
