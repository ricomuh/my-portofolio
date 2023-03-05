"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingDescription({ items }: { items: string[] }) {
  const sequence: Array<string | number> = [];
  items.forEach((item) => {
    sequence.push(item);
    sequence.push(1000);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      cursor={true}
      wrapper="span"
      repeat={Infinity}
      className="text-indigo-500 dark:text-indigo-300 font-semibold"
    />
  );
}
