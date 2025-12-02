import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixNinja - Pix invisível via cripto",
  description: "Receba como Pix, mas cai direto na sua wallet sem CPF na nota",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
