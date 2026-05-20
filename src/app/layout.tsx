import type { Metadata } from "next";
import "./globals.css";
import { AppKitProvider } from "@/components/appkit-provider";

export const metadata: Metadata = {
  title: "NEAR Intent Test",
  description: "Aurora intents widget with Reown AppKit wallet connection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppKitProvider>{children}</AppKitProvider>
      </body>
    </html>
  );
}
