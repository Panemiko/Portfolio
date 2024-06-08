import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { type Metadata } from "next";

import { Fira_Code, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais em Santa Cruz do Sul | Tito Oliveira",
  description:
    "Olá! Sou Tito Lucca Oliveira, um desenvolvedor Full-Stack de Santa Cruz do Sul - RS, especializado em criar experiências digitais excepcionais.",
  authors: [
    {
      name: "Tito Lucca Oliveira",
    },
  ],
  keywords:
    "desenvolvedor, site, full-stack, react, website, comercial, site comercial, pequeno negócio, Santa Cruz do Sul, RS",
  metadataBase: new URL("https://titooliveira.com/opengraph-image.png"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tito Lucca Oliveira - Desenvolvedor Full-Stack",
    description:
      "Olá! Sou Tito Lucca Oliveira, um desenvolvedor Full-Stack de Santa Cruz do Sul - RS, especializado em criar experiências digitais excepcionais.",
    type: "website",
    countryName: "Brazil",
    locale: "pt_BR",
    siteName: "Tito Oliveira",
    url: "https://titooliveira.com",
    images: "https://titooliveira.com/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tito Lucca Oliveira - Desenvolvedor Full-Stack",
    description:
      "Olá! Sou Tito Lucca Oliveira, um desenvolvedor Full-Stack de Santa Cruz do Sul - RS, especializado em criar experiências digitais excepcionais.",
    images: ["https://titooliveira.com/opengraph-image.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <script defer src="https://analytics.cobuilt.in/script.js" data-website-id="1b5eaa1c-ad75-4745-9f16-62655e181246"></script>
      <body className={`font-sans ${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
