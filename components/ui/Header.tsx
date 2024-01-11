'use client';

import React from 'react';
import {Switch} from "@/components/ui/switch";

const Header = () => {
    return (
        <header
            className="flex justify-between p-1 bg-secondary fixed min-w-full h-[var(--global-nav-collective-height)] items-center z-[100]">
            <h2 className="ml-5">mursvet.ru</h2>
            <ul className="list-none flex gap-20 mr-10">
                <li><Switch/></li>
            </ul>
        </header>
    );
};

export default Header;