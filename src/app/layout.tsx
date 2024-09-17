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
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}