'use client';
import React from 'react';
import {redirect} from "next/navigation";

interface IProjectCard {
    title: string;
    description: string;
    children?: React.ReactNode;
    link?: string;
    isDeveloping?: boolean;
}

const ProjectCard = ({title, description, children, link = '', isDeveloping = false}: IProjectCard) => {
    const handleClick = (path: string) => {
        redirect(path)
    }
    return (
        <a href={link}>
            <div
                className={`w-[20rem] h-[20rem] bg-[#242424] rounded-2xl ${(isDeveloping) ? ('hover:bg-[#222] hover:border-[#333]') : ('hover:bg-[#333] hover:border-[#444]')} cursor-pointer transition-[background]
                                        border-[1px] border-[#343434] hover:opacity-85 relative`}>
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

            </div>
        </a>
    );
};

export default ProjectCard;