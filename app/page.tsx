import React from "react";
import GradientText from "@/components/ui/GradientText";
import {FaGithubAlt} from "react-icons/fa";
import Image from 'next/image'
import ProjectCard from "@/components/ui/ProjectCard";
import ScrolledDownAchievement from "@/components/ui/Achievements/ScrolledDownAchievement";
import TelegramSpoilerTag from "@/components/ui/SpoilerTag/TelegramSpoilerTag";
import {BrowserView} from 'react-device-detect';


export default function Home() {

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0">

            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">

                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-nowrap">

                    <GradientText>Hello</GradientText>

                    <h1>My name is</h1>
                    <BrowserView>
                        <TelegramSpoilerTag>
                            <h1>Sviatoslav Murzin</h1>
                        </TelegramSpoilerTag>
                    </BrowserView>

                    <div className="grid place-items-center grid-rows-1">
                        <a href="https://github.com/securesvet"><FaGithubAlt
                            className="hover:opacity-85 hover:cursor-pointer"/></a>
                    </div>
                </div>

            </div>
            <section id="projects">

                <div
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold text-center">
                    <h1 className="mb-10">
                        Projects of mine
                    </h1>
                    <div
                        className="grid place-items-center text-left gap-y-10">
                        <ProjectCard title={'Airpods Application'}
                                     description={'App for airpods animation when connected'}
                                     link={'https://github.com/securesvet/aircon'} isDeveloping={true}
                                     percentageOnShow={50}>
                            <Image src={'/images/airpods.gif'} alt={'ava'} width={500} height={500}
                                   className={"rounded-[inherit]"}/>
                        </ProjectCard>

                    </div>
                </div>
            </section>
        </main>
    )
}
