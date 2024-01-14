'use client';

import React from 'react';
import {Switch} from "@/components/ui/switch";

const Header = () => {
    return (
        <header
            className="fixed min-w-full min-h-[var(--global-nav-collective-height)] z-[100] top-0">
            <div className="flex justify-between bg-secondary p-1 items-center">
            <h2 className="ml-5">mursvet.ru</h2>
            <ul className="list-none flex gap-20 mr-10">
                <li><Switch/></li>
            </ul>
            </div>
        </header>
    );
};

export default Header;