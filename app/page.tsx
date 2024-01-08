'use client';

import React from "react";
import BlobImage from "@/components/BlobImage";
import Image from "next/image";
import {useTheme} from "next-themes";

export default function Home() {
    const {theme, setTheme} = useTheme();
    console.log('current theme is ', theme);
    setTheme("light");

    return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0">
      <div className="grid grid-cols-2 w-[100vw] h-[calc(100vh_-_var(--global-nav-collective-height))] mt-[var(--global-nav-collective-height)]">
          <div className="bg-red-500 w-[1fr] h-full"></div>
          <div className="flex flex-col justify-center items-center">
              <BlobImage href="/images/mads.jpg"
                         width="500px"
                         height="500px"
              />
              <h1 className="text-2xl">My name is</h1>
              <h1 className="text-4xl">Sviatoslav Murzin</h1>
          </div>
      </div>

    </main>
  )
}
