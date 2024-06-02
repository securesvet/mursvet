'use client'
import { twMerge } from "tailwind-merge";
import data from '@/public/data/projects.json';
import { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import { useRouter } from "next/navigation";

type projectDataType = {
    title: string;
    value: string;
    bgImage?: string | undefined; 
    link: string | undefined;
};

const CssGrid = () => {
    const router = useRouter();
    const boxStyle = 'border-2 border-neutral-500 rounded-xl p-0 flex flex-col items-center justify-center';
    const [projectData, setProjectData] = useState([...data.data]);

    return (
    <div className="grid md:grid-cols-3 auto-rows-[300px] gap-2">
        {projectData.map((item, i) => (
            <div key={i}
            onClick={() => router.push(item.link,)}
            className={twMerge(boxStyle, `${i === 3 ? 'md:col-span-2' : ''} ${i === 2 ? 'md:row-span-2' : ''} ${i === 4 ? 'md:col-span-3' : ''} relative`)}>
                <BackgroundImage imageUrl={`${item.bgImage ? `/images/${item.bgImage}` : ''}`} />
                <div className="absolute z-1">
                    <h2 className="text-xl text-gray-300 opacity-100">{item.title}</h2>
                    <p className="font-bold text-2xl opacity-100">{item.value}</p>
                </div>
            </div>
        ))}
    </div>
    );
}

export default CssGrid;