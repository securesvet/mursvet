'use client';

import React from 'react';
import {useInView} from "react-intersection-observer";

interface IProjectCard {
    title: string;
    description: string;
    children?: React.ReactNode;
    link?: string;
    isDeveloping?: boolean;
    triggerOnShowPositon?: number;
}

const ProjectCard = ({
                         title,
                         description,
                         children,
                         link = '',
                         isDeveloping = false,
                         triggerOnShowPositon = 0
                     }: IProjectCard) => {
    const {ref: myRef, inView: cardIsVisible} = useInView();

    return (
        <a href={link}>
            <div
                className={`w-[20rem] h-[20rem] bg-[#242424] rounded-2xl ${(isDeveloping) ? ('hover:bg-[#222] hover:border-[#333]') : ('hover:bg-[#333] hover:border-[#444]')} cursor-pointer transition-all
                                        border-[1px] border-[#343434] hover:opacity-85 relative ${(cardIsVisible) ? ('translate-y-0 opacity-100') : ('opacity-0 transform translate-y-[20px]')}`}>
                <div className="rounded-[inherit]">
                    <div
                        className="bg-gradient-to-t from-black to-transparent rounded-[inherit] w-full h-[50%] top-1/2 absolute"></div>
                    <div className="max-w-full max-h-full rounded-[inherit]">
                        {children}
                    </div>
                </div>

                <div className="absolute text-3xl top-[70%] left-[2%]">
                    {
                        (isDeveloping) ? (
                            <p className="text-base text-[#aaa] absolute -top-[20%]">Under development...</p>
                        ) : ('')
                    }
                    <h1 className="font-bold">{title}</h1>
                    <p className="text-lg text-[#aaa]">{description}</p>
                </div>
                {/* When this div is visible */}
                <div ref={myRef} className={`absolute top-[${triggerOnShowPositon}px]`}></div>
            </div>
        </a>
    );
};

export default ProjectCard;