'use client';
import React from 'react';
import Achievement from "@/components/ui/Achievements/Achievement";

const ScrolledDownAchievement = () => {
    return (
        <Achievement onShow={() => (
            (window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight)}
                     description={"You've scrolled to the bottom!"}/>
    );
};

export default ScrolledDownAchievement;