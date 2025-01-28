"use client";

import dynamic from "next/dynamic";
import { StoreProvider } from "./redux-provider";

const ReactQueryProvider = dynamic(
  () => import("@/provider/query-provider").then((mod) => mod.default),
  { ssr: false }
);

const GlobalContentProvider = dynamic(
  () => import("@/provider/global-content"),
  { ssr: false }
);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ReactQueryProvider>
        <GlobalContentProvider>
          {children}
          </GlobalContentProvider>;
      </ReactQueryProvider>
    </StoreProvider>
  );
}
