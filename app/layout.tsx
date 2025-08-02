
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajit Dhavale - Full-Stack Developer | Web Development Services",
  description: "Experienced full-stack developer helping startups and businesses achieve seamless digital transformation through innovative web solutions and scalable applications.",
  keywords: "web developer, full-stack developer, React, Node.js, Angular, startup solutions",
  authors: [{ name: "Ajit Dhavale" }],
  openGraph: {
    title: "Ajit Dhavale - Full-Stack Developer",
    description: "Helping startups and businesses achieve seamless digital transformation through innovative web solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
