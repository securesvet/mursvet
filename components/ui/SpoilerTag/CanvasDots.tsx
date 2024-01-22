'use client';

import React, {memo, useEffect, useRef, useState} from 'react';

interface IDots {
    width: number;
    height: number;
    opacity: boolean;
    density?: number;
    children?: React.ReactNode;
}

const Canvas = ({width, height, children, density = ~~(width * height / 450 + 50), opacity}: IDots) => {
    const canvas = useRef<HTMLCanvasElement>();
    let circles: { x: number, y: number, dx: number, dy: number, radius: number }[] = [];

    const createCircles = (amount: number = 10) => {
        if (!canvas.current) return;
        for (let i = 0; i < amount; i++) {
            circles.push({
                x: Math.random() * (canvas.current.width - 4) + 4,
                y: Math.random() * (canvas.current.height - 4) + 4,
                dx: Math.random() * 4 - 2,
                dy: Math.random() * 4 - 2,
                radius: Math.random() * 3 + 1
            });
        }
    };

    const draw = () => {
        if (!canvas.current) return;
        const ctx = canvas.current.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        ctx.fillStyle = '#fff';
        circles.forEach(circle => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.filter = `blur(${(circle.radius < 2) ? (0) : (1)}px)`
            if (circle.x + circle.dx >= canvas.current.width - circle.radius || circle.x + circle.dx <= circle.radius) {
                circle.dx = -circle.dx;
            }
            if (circle.y + circle.dy >= canvas.current.height - circle.radius || circle.y + circle.dy <= circle.radius) {
                circle.dy = -circle.dy;
            }
            circle.x += Math.random() * circle.dx;
            circle.y += Math.random() * circle.dy;
        });
        requestAnimationFrame(draw)
    };

    useEffect(() => {
        createCircles(density);
        draw();
    }, [opacity]);

    return (
        <div>
            {
                (!opacity) ?
                    <canvas ref={canvas} width={`${width}`}
                            height={`${height}`}
                            className={`${(opacity) ? ('hidden') : ('')} absolute overflow-hidden`}>
                    </canvas>
                    :
                    ('')
            }
            {children}
        </div>
    );
};

export default memo(Canvas);