"use client";

import { Fragment } from "react";

export default function GlobalContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
}
