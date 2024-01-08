import React from "react";
import BlobImage from '@/components/BlobImage';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-0">
            <div
                className="grid grid-cols-2 w-[100vw] h-[calc(100vh_-_var(--global-nav-collective-height))] mt-[var(--global-nav-collective-height)]">
                <div className="bg-red-500 rounded-3xl w-[1fr] h-full relative">
                    <div className="h-[20px]">
                        <h1 className="font-bold text-4xl text-secondary text-center">HI</h1>
                        <br/>
                        <h1 className="font-bold text-4xl text-secondary text-center">MY NAME IS</h1>
                    </div>
                    <div className="bg-white relative w-[1fr] h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
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
