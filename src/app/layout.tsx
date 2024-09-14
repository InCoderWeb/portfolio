import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Navbar from "@/components/custom/navbar";

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

export const metadata: Metadata = {
	title: "Ashutosh Kumar - InCoderWeb",
	description:
		"Welcome to the portfolio of Ashutosh Kumar, also known as Incoderweb – an enthusiastic programmer, tech enthusiast, and creative problem solver passionate about building innovative solutions and mastering the latest technologies.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StarsBackground minTwinkleSpeed={2} starDensity={0.00040}  />
				<ShootingStars />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
