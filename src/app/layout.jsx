import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const heading = Cinzel({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-heading",
	display: "swap",
});

const body = Inter({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${heading.variable} ${body.variable}`}>
			<body>{children}</body>
		</html>
	);
}
