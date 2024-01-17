import React from "react";
import GradientText from "@/components/ui/GradientText";
import {FaGithubAlt} from "react-icons/fa";
import SpoilerTag from "@/components/ui/SpoilerTag/SpoilerTag";
import ScrolledDownAchievement from "@/components/ui/Achievements/ScrolledDownAchievement";
import Image from 'next/image'
import Mads from '@/public/images/mads.jpg';

export default function Home() {

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0 mt-[var(--global-nav-collective-height)]">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-nowrap">
                    <GradientText>Hello</GradientText>
                    <h1>My name is</h1>
                    <SpoilerTag hint={true}>
                        <h1>Sviatoslav Murzin</h1>
                    </SpoilerTag>
                    <div className="grid place-items-center">
                        <a href="https://github.com/securesvet"><FaGithubAlt
                            className="hover:opacity-85 hover:cursor-pointer"/></a>
                    </div>
                </div>
                {/*<div className="grid place-items-center min-h-[100vh] min-w-full">*/}
                {/*    <h1 className="text-9xl">Hello</h1>*/}
                {/*</div>*/}
            </div>
            <section id="projects">
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold mb-10 text-center">
                <h1>
                    Projects of mine
                </h1>
                <div className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light min-h-full max-h-[calc(100vh-var(--global-nav-collective-height))]">
                    <p className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light">are to be published...</p>
                    <p>Just pretend they are here for a little while</p>
                    <div className="grid place-items-center mt-10">
                    <Image src={Mads} alt="That's not me"/>
                    </div>
                </div>
            </div>
            </section>
            <ScrolledDownAchievement/>
        </main>
    )
}
