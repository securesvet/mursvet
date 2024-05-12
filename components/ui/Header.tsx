import React from 'react';
import {JetBrains_Mono} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({weight: "700", subsets: ['latin']})

const Header = () => {
    return (
        <nav
            className="fixed min-w-full top-0 bg-[#161616] border-b-[1px] border-border backdrop-filter backdrop-blur-lg bg-opacity-30 z-10">
            <div className="min-w-full px-4">
                <div className="flex items-center justify-between h-[var(--global-nav-collective-height)] text-primary text-nowrap text-center">
                    <a href="/">
                    <span className={`${jetBrainsMono.className} text-2xl font-semibold w-20`}>
                        MUR
                    </span>
                    </a>

                    <div>
                    <a href="/photos" className="hover:text-blue-500">Photos of mine</a>
                    </div>
                    <div>
                    <ul className="flex space-x-4">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#projects">Projects</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;