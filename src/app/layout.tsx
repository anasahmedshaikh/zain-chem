import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Zain Chem",
  description: "Education site for assistance of students. Easy, self explanatory & downloadable notes of Chemistry XI & XII are available written by Dr. Zain Ul Abdeen, Lecturer Govt. Dehli College.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2W88CYM8D6"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-2W88CYM8D6');
      </script>
      <body>
        <Header/>
        {children}
        <Footer/>
        <SpeedInsights/>
        </body>
    </html>
  );
}