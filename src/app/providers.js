"use client"

import { NextUIProvider } from "@nextui-org/react";

export function providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
