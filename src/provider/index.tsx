"use client";

import GlobalContent from "@/provider/global-content";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GlobalContent>{children}</GlobalContent>;
}
