import Link from "next/link";
import Image from "next/image";

import ThemeButton from "./themeButton";
import MyPicture from "@/assets/img/me.png";

async function getNavbarItems() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/navbar");
  const data = await res.json();
  return data;
}

export default async function Navbar() {
  const navbar: { links: { href: string; label: string }[] } =
    await getNavbarItems();
  const items = navbar.links;

  return (
    <nav className="flex justify-between items-center w-10/12 mx-auto duration-200 py-8">
      <div className="flex gap-4 items-center w-full">
        <div className="flex justify-between md:justify-start w-full md:w-auto">
          <Image
            src={MyPicture}
            alt="My Photo"
            className="w-10 h-10 border-2 border-indigo-600 rounded-full"
          />
          <button className="md:hidden flex flex-col justify-between px-2">
            <i className="text-xl text-gray-800 dark:text-white"></i>
          </button>
        </div>
        <div className="md:flex flex-col md:flex-row w-full md:w-auto left-0 justify-between flex-grow absolute top-full md:relative divide-y md:divide-y-0 bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent shadow-md md:shadow-none">
          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 divide-y md:divide-y-0">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="p-4 w-full text-center duration-200 text-indigo-700 hover:text-indigo-500 dark:text-indigo-100 hover:dark:text-indigo-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}
