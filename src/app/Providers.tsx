"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

type Props = { children: ReactNode };
const Providers = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
export default Providers;
