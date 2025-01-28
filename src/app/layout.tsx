import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/provider";
export const metadata: Metadata = {
  title: "antiSCM",
  description:
    "antiSCM giúp bảo vệ các hệ thống quản lý mã nguồn khỏi các mối đe dọa và tấn công",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
