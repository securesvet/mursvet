'use client';

import React, {memo, useEffect, useRef, useState} from 'react';

interface IDots {
    width: number;
    height: number;
    opacity: boolean;
    density?: number;
    children?: React.ReactNode;
    velocity?: number;
}

const CanvasDots = ({width, height, children, density = ~~(width * height / 1000 + 50), opacity, velocity = 0.5}: IDots) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    let circles: {
        opacity: number,
        x: number, y: number, dx: number, dy: number, radius: number, phi: number
    }[] = [];

    const createCircles = (amount: number = 10) => {
        for (let i = 0; i < amount; i++) {
            circles.push({
                x: Math.random() * (width - 10) + 10,
                y: Math.random() * (height - 10) + 10,
                dx: velocity * (Math.random() - 0.5),
                dy: velocity * (Math.random() - 0.5),
                radius: Math.random() * 1 + 2,
                opacity: ~~Math.random() * 100,
                phi: Math.random() * (2 * Math.PI),
            });
        }
    };


    const draw = () => {
        if (!canvas.current) return;
        const ctx = canvas.current.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        circles.forEach(circle => {
            if (circle.x + circle.dx >= width - circle.radius || circle.x + circle.dx <= circle.radius) {
                circle.dx = -circle.dx;
            }
            if (circle.y + circle.dy >= height - circle.radius || circle.y + circle.dy <= circle.radius) {
                circle.dy = -circle.dy;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
            if (!canvas.current) return;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff';
            circle.phi = 0.005 + circle.phi % (2 * Math.PI);
            circle.opacity = 40 * (Math.sin(circle.phi) + 1) + 10;
            ctx.filter = `opacity(${circle.opacity}%)`
            ctx.fill();
        });
        requestAnimationFrame(draw)
    };

    useEffect(() => {
        createCircles(density);
        draw();
    }, [width, height, opacity]);

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