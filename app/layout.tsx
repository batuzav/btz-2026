import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

// Noto Sans JP es una fuente grande (CJK): no la precargamos.
const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Pedro Valdez — N°01",
  description:
    "Ingeniero de software backend · Node · NestJS · Python · Cloud. Más de seis años construyendo APIs, microservicios y datos a escala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${hanken.variable} ${mono.variable} ${notoJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
