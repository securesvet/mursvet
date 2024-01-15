'use client';

import React, {useEffect, useState} from 'react';
import styles from './Dots.module.css';

const Dots = () => {
    const [dotPositions, setDotPositions] = useState([]);
    useEffect(() => {
            const positions: ({ top: number; left: number; }[]) = [];
            const getRandomDots = (amount: number) => {
                for (let i = 0; i < amount; i++) {
                    const randomWidth = ~~(Math.random() * 1280);
                    const randomHeight = ~~(Math.random() * 250);
                    positions.push({top: randomHeight, left: randomWidth});
                }
            }
            getRandomDots(100); // Change the number of dots as needed
            setDotPositions(positions);

            const moveDots = () => {
                const newPositions = dotPositions.map((position) => ({
                    top: position.top + ~~(Math.random() * 2),
                    left: position.left + ~~(Math.random() * 2),
                }));
                setDotPositions(newPositions);
            };
            const intervalId = setInterval(moveDots, 200); // Update the positions every 100 milliseconds

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