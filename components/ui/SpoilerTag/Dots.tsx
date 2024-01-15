'use client';

import React, {HTMLAttributes, memo, useEffect, useState} from 'react';
import styles from './Dots.module.css';

interface IDots {
    width: number;
    height: number;
    density?: number;
    children?: React.ReactNode;
}

const Dots = ({width, height, children, density=500}: IDots) => {
    const defaultDensity = 500;
    const getRandomDots = (amount: number) => {
        const positions: ({ top: number; left: number; }[]) = [];
        for (let i = 0; i < amount; i++) {
            const randomWidth = ~~(Math.random() * width);
            const randomHeight = ~~(Math.random() * height);
            positions.push({top: randomHeight, left: randomWidth});
        }
        return positions;
    }

    const getRandomOffset = (position: number, offset: number) => {
        const currentMultiply = 20 * density / defaultDensity
        const randomInt = ~~(currentMultiply * Math.random());
        if (position < currentMultiply) return randomInt;
        if (position > offset - currentMultiply) return -randomInt;
        return ((Math.random() < 0.5) ? (-randomInt) : (randomInt));
    }

    const [dotPositions, setDotPositions] = useState(getRandomDots(density));
    useEffect(() => {
            const moveDots = () => {
                const newPositions = dotPositions.map((position) => ({
                    top: position.top + getRandomOffset(position.top, height),
                    left: position.left + getRandomOffset(position.left, width),
                }));
                setDotPositions(newPositions);
            };
            const intervalId = setInterval(moveDots, 250); // Update the positions every 100 milliseconds

            return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
        },
        [dotPositions]);

    return (
        <div className="hover:cursor-pointer" onClick={() => {
            setDotPositions([]);
        }}>
            <div>
                {children}
            </div>
            {dotPositions.map((el, index) => (
                <div key={index}
                     className={`${styles.dot} z-[100]`}
                     style={{top: el.top, left: el.left}}></div>
            ))}

        </div>
    );
};

export default memo(Dots);