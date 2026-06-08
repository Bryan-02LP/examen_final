import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutina",
  description: "App de ejercicios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}