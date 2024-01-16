import React from "react";
import GradientText from "@/components/ui/GradientText";
import {FaGithubAlt} from "react-icons/fa";
import SpoilerTag from "@/components/ui/SpoilerTag/SpoilerTag";

export default function Home() {

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0 mt-[var(--global-nav-collective-height)]">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div className="text-4xl md:text-7xl lg:text-9xl text-center font-bold text-nowrap">
                    <GradientText>Hi</GradientText>
                    <h1>My name is</h1>
                    <SpoilerTag hint={true}>
                        <h1>Sviatoslav Murzin</h1>
                    </SpoilerTag>
                    <div className="grid place-items-center">
                        <a href="https://github.com/securesvet"><FaGithubAlt
                            className="hover:opacity-85 hover:cursor-pointer"/></a>
                    </div>
                </div>

            </div>
        </main>
    )
}
