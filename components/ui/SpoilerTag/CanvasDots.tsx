'use client';

import React, {memo, useEffect, useRef, useState} from 'react';

interface IDots {
    width: number;
    height: number;
    opacity: boolean;
    density?: number;
    children?: React.ReactNode;
}

const CanvasDots = ({width, height, children, density = ~~(width * height / 450 + 50), opacity}: IDots) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    let circles: { x: number, y: number, dx: number, dy: number, radius: number }[] = [];

    const createCircles = (amount: number = 10) => {
        for (let i = 0; i < amount; i++) {
            circles.push({
                x: Math.random() * (width - 4) + 3,
                y: Math.random() * (height - 4) + 3,
                dx: Math.random() * 4 - 2,
                dy: Math.random() * 4 - 2,
                radius: Math.random() * 3 + 1
            });
        }
    };

    const updateCircles = () => {
        circles.forEach(circle => {
            circle.dx = Math.random() * 2 - 1;
            circle.dy = Math.random() * 2 - 1;
        });
    };



    const draw = () => {
        if (!canvas.current) return;
        const ctx = canvas.current.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#fff';
        circles.forEach(circle => {
            if (!canvas.current) return;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            if (circle.radius < 3) {
                ctx.filter = `blur(${1}px)`;
            }
            else {
                ctx.filter = `none`
            }
            if (circle.x + circle.dx > width - circle.radius || circle.x + circle.dx < circle.radius) {
                circle.dx = -circle.dx;
            }
            if (circle.y + circle.dy > height - circle.radius || circle.y + circle.dy < circle.radius) {
                circle.dy = -circle.dy;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
        });
        requestAnimationFrame(draw)
    };

    useEffect(() => {
        createCircles(density);
        draw();
    }, [width, height, opacity]);

    setInterval(() => updateCircles(), 250);

    return (
        <div>
            {
                (!opacity) ?
                    <canvas ref={canvas} width={width}
                            height={height}
                            className={`${(opacity) ? ('hidden') : ('')} absolute overflow-hidden`}>
                    </canvas>
                    :
                    ('')
            }
            {children}
        </div>
    );
};

export default memo(CanvasDots);