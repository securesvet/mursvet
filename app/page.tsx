import React from "react";
import BlobImage from '@/components/BlobImage';
import Underglow from "@/components/ui/Underglow";
import { FaGithubAlt } from "react-icons/fa6";
import OldSchoolButtons from "@/components/ui/OldSchoolButtons";
import GlowingCards from "@/components/ui/GlowingCards";
import GlowCards from "@/components/ui/GlowCards";
import ShapeShift from "@/components/ui/ShapeShift";
import GradientText from "@/components/ui/GradientText";
import Dots from "@/components/ui/SpoilerTag/Dots";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-0 mt-[var(--global-nav-collective-height)]">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div className="text-9xl text-center font-bold">
                    <GradientText>Hi</GradientText>
                    <h1>My name is</h1>
                    <h1>Sviatoslav Murzin</h1>
                </div>
                <div className="relative w-[1280px] h-[250px]">
                    <Dots/>
                </div>
            </div>
            {/*<div className="grid place-items-center bg-gray-500">*/}
            {/*    <ShapeShift/>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className="grid grid-cols-2 w-[100vw] h-[calc(100vh_-_var(--global-nav-collective-height))] mt-[var(--global-nav-collective-height)]">*/}
            {/*    <div className="bg-red-500 rounded-3xl w-[1fr] h-full relative">*/}
            {/*        <div className="h-[20px]">*/}
            {/*            <h1 className="font-bold text-4xl text-secondary text-center">HI</h1>*/}
            {/*            <br/>*/}
            {/*            <h1 className="font-bold text-4xl text-secondary text-center">MY NAME IS</h1>*/}
            {/*        </div>*/}
            {/*        <div className="bg-white relative w-[1fr] h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>*/}
            {/*    </div>*/}
            {/*    <div className="flex flex-col justify-center items-center gap-5">*/}
            {/*        <h1 className="text-2xl font-bold">My name is</h1>*/}
            {/*        <BlobImage href="/images/mads.jpg"*/}
            {/*                   width="500px"*/}
            {/*                   height="500px"*/}
            {/*        />*/}
            {/*        <Underglow title={*/}
            {/*                <h1 className="text-4xl">Sviatoslav Murzin</h1>*/}
            {/*        }/>*/}
            {/*        <Underglow title={<FaGithubAlt/>}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex items-center justify-center bg-gray-900 min-w-full min-h-[800px]">*/}
            {/*    <GlowCards/>*/}
            {/*</div>*/}
        </main>
    )
}
