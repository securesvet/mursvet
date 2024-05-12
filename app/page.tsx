
import React from "react";
import GradientText from "@/components/ui/GradientText";
import {FaGithubAlt} from "react-icons/fa";
import SpoilerTag from "@/components/ui/SpoilerTag/SpoilerTag";
import CssGrid from "@/components/ui/CssGrid/CssGrid";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-nowrap">

                    <GradientText>Hello</GradientText>
                    <h1>My name is</h1>
                    <SpoilerTag>
                        <h1>Sviatoslav Murzin</h1>
                    </SpoilerTag>

                    <div className="grid place-items-center grid-rows-1">
                        <a href="https://github.com/securesvet"><FaGithubAlt
                            className="hover:opacity-85 hover:cursor-pointer"/></a>
                    </div>
                </div>

            </div>
            <section id="projects" className="min-w-full">
                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold text-center">
                    <h1 className="mb-10">
                        Projects of mine
                    </h1>
                    <div className="max-w-7xl mx-auto md:text-2xl xs:text-xl text-secondary">
                            <CssGrid/>
                        </div>

                </div>
            </section>
        </main>
    )
}
