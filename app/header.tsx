"use client";

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShadow(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={`w-full backdrop-blur fixed z-10 top-0 duration-200 ${
        shadow
          ? "shadow-md bg-opacity-70 dark:bg-opacity-70 bg-white dark:bg-gray-700"
          : "shadow-none bg-opacity-0"
      }`}
    >
      {children}
    </header>
  );
}
