'use client';

import React, {useEffect, useRef, useState} from "react";
import GradientText from "@/components/ui/GradientText";
import Dots from "@/components/ui/SpoilerTag/Dots";
import {FaGithubAlt} from "react-icons/fa";

export default function Home() {

    const [spoilerOpacity, setSpoilerOpacity] = useState(false);
    const [dotsDimensions, setDotsDimensions] = useState({width: 0, height: 0});
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (spoilerOpacity) return;

            if (h1Ref.current) {
                const {width, height} = h1Ref.current.getBoundingClientRect();
                setDotsDimensions({width, height});
            }
        };

        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial dimensions
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [spoilerOpacity]);

    // Force re-render when window is resized
    const [windowWidth, setWindowWidth] = useState((typeof window !== "undefined") ? window.innerWidth : 0);
    useEffect(() => {
        if (spoilerOpacity) return;
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [spoilerOpacity]);

    const dotsKey = `${dotsDimensions.width}-${dotsDimensions.height}-${windowWidth}`;

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between pt-0 mt-[var(--global-nav-collective-height)]">
            <div className="grid place-items-center h-[calc(100vh-var(--global-nav-collective-height))] text-primary">
                <div className="text-5xl md:text-7xl lg:text-9xl text-center font-bold text-nowrap">
                    <GradientText>Hi</GradientText>
                    <h1>My name is</h1>
                    <div className="relative" onClick={() => {
                        setSpoilerOpacity(true);
                    }}>
                        <Dots key={dotsKey} width={dotsDimensions.width} height={dotsDimensions.height}
                              density={(dotsDimensions.width < 700) ? 200 : 500}>
                            <h1 ref={h1Ref}
                                className={`${(spoilerOpacity) ? ("opacity-100") : ("opacity-0")} transition-opacity duration-500 whitespace-nowrap`}>
                                Sviatoslav Murzin</h1>
                        </Dots>
                        <h1 className={`text-sm md:text-lg lg:text-xl font-normal transition-opacity ${(spoilerOpacity) ? ("opacity-0") : ("opacity-100")} duration-1000`}>(click
                            here)</h1>
                    </div>
                    <div className="grid place-items-center">
                        <a href="https://github.com/securesvet"><FaGithubAlt
                            className="hover:opacity-85 hover:cursor-pointer"/></a>
                    </div>
                </div>

            </div>
        </main>
    )
}
