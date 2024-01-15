'use client';

import React, {HTMLAttributes, useEffect, useState} from 'react';
import styles from './Dots.module.css';
const Dots = () => {
    const getRandomDots = (amount: number) => {
        const positions: ({ top: number; left: number; }[]) = [];
        for (let i = 0; i < amount; i++) {
            const randomWidth = ~~(Math.random() * 1280);
            const randomHeight = ~~(Math.random() * 250);
            positions.push({top: randomHeight, left: randomWidth});
        }
        return positions;
    }
    const [dotPositions, setDotPositions] = useState(getRandomDots(500));
    useEffect(() => {
            const moveDots = () => {
                const newPositions = dotPositions.map((position) => ({
                    top: position.top + ((Math.random() > 0.5) ? 1 : -1),
                    left: position.left + ((Math.random() > 0.5) ? 1 : -1),
                }));
                setDotPositions(newPositions);
            };
            const intervalId = setInterval(moveDots, 50); // Update the positions every 100 milliseconds

            return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
        },
        [dotPositions]);

    return (
        <div className="hover:cursor-pointer">
            {dotPositions.map((el, index) => (
                <div key={index}
                     className={styles.dot}
                     style={{top: el.top, left: el.left}}></div>
            ))}
        </div>
    );
};

export default Dots;