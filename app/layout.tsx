import "./globals.scss";

export const metadata = {
  title: "Lola Cake Demo",
  description: "Cake Customizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}