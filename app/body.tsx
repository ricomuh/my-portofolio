"use client";

import { useEffect, useState, createContext } from "react";

export type DarkContextType = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

export const DarkContext = createContext<DarkContextType>({
  dark: false,
  setDark: () => {},
});

export default function Body({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const dark =
      localStorage.getItem("dark") ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(dark.toString() === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark.toString());
  }, [dark]);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      <body className={`${dark ? "dark dark:bg-gray-800" : ""}`}>
        {children}
      </body>
    </DarkContext.Provider>
  );
}
