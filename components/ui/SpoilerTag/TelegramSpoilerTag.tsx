'use client';

import React, {useEffect, useRef, useState} from 'react';
import {SparklesCore, ParticlesProps} from "@/components/ui/SparklesCore";
import {useBreakpoint} from "@/hooks/useBreakpoint";

type TelegramSpoilerTag = ParticlesProps & {
    children?: React.ReactNode;
}

const TelegramSpoilerTag = ({children, ...props}: TelegramSpoilerTag) => {
    const divUnderSparkles = useRef<HTMLDivElement>(null);
    const [isHidden, setIsHidden] = useState<Boolean>(true);

    const { isSm } = useBreakpoint('sm');
    const { isMd } = useBreakpoint('md');
    const { isLg } = useBreakpoint('lg');

    return (
        <div className={`relative  hover:cursor-pointer`} onClick={() => setIsHidden(false)}>
            <SparklesCore
                className={`w-full h-full absolute ${(!isHidden) ? ('hidden') : ('')}`}
                minSize={1}
                maxSize={1.4}
                speed={1}
                particleDensity={isMd ? (200) : (1000)}
                {...props}
            />
            <div ref={divUnderSparkles} className={`transition-opacity ${(isHidden) ? ('opacity-0') : ('opacity-100')}`}>
                {children}
            </div>
        </div>
    );
};

export default TelegramSpoilerTag;