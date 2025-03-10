import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Page - metadata",
    description: "Generated by create next app",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
        <h1>About Us</h1>
        <ul className="about__ul">
            <li><Link href='/about/contact'>Contact</Link></li>
            <li><Link href='/about/team'>Team</Link></li>
        </ul>
        <div>{children}</div>
    </div>
  );
}
