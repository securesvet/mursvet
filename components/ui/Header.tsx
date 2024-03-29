'use client';

import React from 'react';
import {Switch} from "@/components/ui/switch";
import {JetBrains_Mono} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({weight: "700", subsets: ['latin']})

const Header = () => {
    return (
        <nav
            className="fixed min-w-full top-0 z-10 bg-[#161616] border-b-[1px] border-border backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="min-w-full px-4">
                <div className="flex items-center justify-between h-[var(--global-nav-collective-height)] text-primary">
                    <span className={`${jetBrainsMono.className} text-2xl font-semibold`}>
                        MUR
                    </span>
                    <ul className="flex justify-end space-x-4">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;