'use client';

import React, {memo, useEffect, useRef} from 'react';
import {getRandomInt, getRandomArbitrary} from "@/lib/utils";

interface IDots {
    width: number;
    height: number;
    opacity: boolean;
    density?: number;
    children?: React.ReactNode;
    velocity?: number;
    minSize?: number;
    maxSize?: number;
}

const CanvasDots = ({
                        width,
                        height,
                        children,
                        density = ~~(width * height / 1000 + 50),
                        opacity,
                        minSize=1.4,
                        maxSize=2.0,
                        velocity = 0.5
                    }: IDots) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const circles: {
        opacity: number,
        x: number, y: number, dx: number, dy: number, radius: number, phi: number
    }[] = [];



    const createCircles = (amount: number = 10) => {
        for (let i = 0; i < amount; i++) {
            const radius = Number(getRandomArbitrary(minSize, maxSize));
            circles.push({
                x: getRandomInt(radius, width - 1) + 1,
                y: getRandomInt(radius, height - 1) + 1,
                dx: velocity * (Math.random() - 0.5),
                dy: velocity * (Math.random() - 0.5),
                radius: radius,
                opacity: ~~Math.random() * 100,
                phi: Math.random() * (2 * Math.PI),
            });
        }
    };


    const draw_2DCanvas = () => {
        if (!canvas.current) return;

        const ctx = canvas.current.getContext("2d");
        if (!ctx) return;
        const ratio = Math.ceil(window.devicePixelRatio);
        canvas.current.width = width * ratio;
        canvas.current.height = height * ratio;
        ctx.scale(ratio, ratio);
        ctx.clearRect(0, 0, width, height);
        canvas.current.style.width = `${width}px`;
        canvas.current.style.height = `${height}px`;
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
            ctx.fillStyle = `rgb(255 255 255 / ${circle.opacity}%)`;
            circle.phi = 0.005 + circle.phi % (2 * Math.PI);
            circle.opacity = 50 * (Math.sin(circle.phi) + 1);
            ctx.fill();
        });
        requestAnimationFrame(draw_2DCanvas)
    };

    useEffect(() => {
        createCircles(density);
        draw_2DCanvas();
    }, [width, height, opacity]);

    return (
        <div>
            {
                (!opacity) &&
                <canvas ref={canvas} width={width}
                        height={height}
                        className={`${(opacity) && ('hidden')} absolute overflow-hidden`}/>
            }
            {children}
        </div>
    );
};

export default memo(CanvasDots);