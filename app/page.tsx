import React from "react";
import GradientText from "@/components/ui/GradientText";
import {FaGithubAlt} from "react-icons/fa";
import SpoilerTag from "@/components/ui/SpoilerTag/SpoilerTag";
import Image from 'next/image'
import ProjectCard from "@/components/ui/ProjectCard";
import ScrolledDownAchievement from "@/components/ui/Achievements/ScrolledDownAchievement";
import Canvas from "@/components/ui/SpoilerTag/CanvasDots";

export default function Home() {

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0 mt-[var(--global-nav-collective-height)]">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-nowrap">
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
                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold text-center">
                    <h1 className="mb-10">
                        Projects of mine
                    </h1>
                    {/*min-h-full xl:grid-cols-2 xl:grid-rows-2 gap-y-10 text-start font-normal lg:grid-rows-3 lg:grid-cols-2*/}
                    <div
                        className="grid place-items-center text-left gap-y-10">
                        <ProjectCard title={'Airpods Application'}
                                     description={'App for airpods animation when connected'}
                                     link={'https://github.com/securesvet/aircon'} isDeveloping={true}>
                            <Image src={'/images/airpods.gif'} alt={'ava'} width={500} height={500}
                                   className={"rounded-[inherit]"}/>
                        </ProjectCard>

                    </div>
                </div>
            </section>
            <ScrolledDownAchievement description={"You've scrolled to the bottom!"}/>

        </main>
    )
}
