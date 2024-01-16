'use client';

import React, {HTMLAttributes, memo, useEffect, useState} from 'react';
import styles from './Dots.module.css';

interface IDots {
    width: number;
    height: number;
    density?: number;
    children?: React.ReactNode;
}

const Dots = ({width, height, children, density = 500}: IDots) => {
    const defaultDensity = 500;

    // Получаем массив рандомных координат
    const getRandomDots = (amount: number) => {
        const positions: ({ top: number; left: number; }[]) = [];
        for (let i = 0; i < amount; i++) {
            const randomWidth = ~~(Math.random() * width);
            const randomHeight = ~~(Math.random() * height);
            positions.push({top: randomHeight, left: randomWidth});
        }
        return positions;
    }

    // Получаем случайное отклонение, благодаря которому делаем анимацию точек
    const getRandomOffset = (position: number, offset: number) => {
        const currentMultiply = 25 * density / defaultDensity
        const randomInt = ~~(currentMultiply * Math.random());
        if (position < currentMultiply) return randomInt;
        if (position > offset - currentMultiply) return -randomInt;
        return ((Math.random() < 0.5) ? (-randomInt) : (randomInt));
    }

    // Объявляем изначальные позиции точек с помощью функции получения рандомных координат и useState().
    const [dotPositions, setDotPositions] = useState(getRandomDots(density));

    const positionsToTranslate: React.SetStateAction<{ top: number; left: number; }[]>[] = [];
    for (let i = 0; i < 10; i++) {
        positionsToTranslate[i] = dotPositions.map((position) => ({
            top: position.top + getRandomOffset(position.top, height),
            left: position.left + getRandomOffset(position.left, width),
        }));
    }

    let i = 0;
    // Вызываем когда меняется dotPositions, это происходит каждые 250 миллисекунд
    useEffect(() => {
            const moveDots = () => {
                // Таким образом мы не проходим каждый раз по dotPositions сложность O(n), а всего лишь каждой точке
                // задали 10 координат и она ходит всегда по ним.
                i = (i + 1) % 10;
                // const newPositions = dotPositions.map((position) => ({
                //     top: position.top + getRandomOffset(position.top, height),
                //     left: position.left + getRandomOffset(position.left, width),
                // }));
                setDotPositions(positionsToTranslate[i]);
            };
            const intervalId = setInterval(moveDots, 250); // Update the positions every 100 milliseconds

            return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
        },
        [dotPositions]);

    return (
        <div onClick={() => {
            setDotPositions([]);
        }}>
            <div>
                {children}
            </div>
            {dotPositions.map((el, index) => {
                const random = Math.random();
                const currentWidth = ~~(random * 5 + 2);
                const currentBlur = ~~( 2.5 / currentWidth);
                return (<div key={`${index}`}
                             className={`${styles.dot} z-[100]`}
                             style={{top: el.top, left: el.left, width: `${currentWidth}px`, filter: `blur(${currentBlur}px)`}}>
                </div>)
            })}

        </div>
    );
};

export default memo(Dots);