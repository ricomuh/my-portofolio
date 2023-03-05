"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function DinamicProfilePicture({ srcs }: { srcs: any[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleTimeOut() {
    let nextImage = currentImage + 1;
    if (nextImage >= srcs.length) nextImage = 0;
    setCurrentImage(nextImage);
    setTimeout(handleTimeOut, 5000);
  }

  useEffect(() => {
    setTimeout(handleTimeOut, 5000);
  }, [currentImage, srcs]);

  return (
    <div className="p-2 bg-gradient-to-tr from-indigo-600 to-purple-400 rounded-full shadow-xl">
      <div className="p-2 bg-white dark:bg-gray-800 rounded-full">
        <div className="bg-gradient-to-r from-purple-400 to-yellow-400 w-72 h-72 relative rounded-full overflow-hidden flex flex-col justify-end items-center">
          {srcs.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="My Photo"
              className={`w-10/12 absolute duration-300 ${
                currentImage === index ? "bottom-0" : "-bottom-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
