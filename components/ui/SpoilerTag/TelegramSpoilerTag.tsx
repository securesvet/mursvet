'use client';

import React, {useEffect, useRef, useState} from 'react';
import {SparklesCore, ParticlesProps} from "@/components/ui/SparklesCore";
import {useBreakpoint} from "@/hooks/useBreakpoint";

type TelegramSpoilerTag = ParticlesProps & {
    children?: React.ReactNode;
}

const TelegramSpoilerTag = ({children, ...props}: TelegramSpoilerTag) => {
    const divUnderSparkles = useRef<HTMLDivElement>(null);
    const [isSpoilerHidden, setIsSpoilerHidden] = useState<Boolean>(true);

    const { isSm } = useBreakpoint('sm');
    const { isMd } = useBreakpoint('md');
    const { isLg } = useBreakpoint('lg');

    return (
        <div className={`relative  hover:cursor-pointer`} onClick={() => setIsSpoilerHidden(false)}>
            {
                isSpoilerHidden ?
                    <SparklesCore
                        className={`w-full h-full absolute`}
                        minSize={2}
                        maxSize={3}
                        speed={2}
                        particleDensity={150}
                        {...props}
                    />
                    : ('')
            }
            <div ref={divUnderSparkles} className={`transition-opacity ${(isSpoilerHidden) ? ('opacity-0') : ('opacity-100')}`}>
                {children}
            </div>
        </div>
    );
};

export default TelegramSpoilerTag;