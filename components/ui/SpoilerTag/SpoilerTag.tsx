'use client';

import React, {memo, useEffect, useRef, useState} from 'react';
import Dots from "@/components/ui/SpoilerTag/Dots";

interface ISpoiler {
    children?: React.ReactNode;
    hint?: Boolean;
}

const SpoilerTag = ({children, hint = false}: ISpoiler) => {
    const [spoilerOpacity, setSpoilerOpacity] = useState(false);
    const [dotsDimensions, setDotsDimensions] = useState({width: 0, height: 0});
    const h1Ref = useRef<HTMLDivElement>(null);

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

    const dotsKey = `${dotsDimensions.width}-${dotsDimensions.height}`;

    return (
        <>
            <div className="relative" onClick={() => {
                setSpoilerOpacity(true);
            }}>
                <Dots key={dotsKey} width={dotsDimensions.width} height={dotsDimensions.height}>
                    <div ref={h1Ref}
                         className={`${(spoilerOpacity) ? ("opacity-100") : ("hover:cursor-pointer opacity-0")} transition-opacity duration-500 whitespace-nowrap`}>
                        {children}
                    </div>
                </Dots>
            </div>
            {(hint) ?
                <h1 className={`text-sm md:text-lg lg:text-xl font-normal transition-opacity ${(spoilerOpacity) ? ("opacity-0") : ("opacity-100")} duration-1000`}>(click
                    here)</h1> : ""}
        </>
    );
};

export default memo(SpoilerTag);