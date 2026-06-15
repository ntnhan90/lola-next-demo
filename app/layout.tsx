import type { Metadata } from "next";
import "./globals.scss";
import { CakeProvider } from "./context/CakeContext";
export const metadata: Metadata = {
  title: "Lola Cake Demo",
  description: "Cake Configurator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <CakeProvider>
          {children}
        </CakeProvider>
      </body>
    </html>
  );
}