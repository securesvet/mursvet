"use client";

import React, { useEffect, useRef } from "react";
import { getRandomArbitrary, getRandomInt } from "@/lib/utils";

interface IDots {
  width: number;
  height: number;
  isSpoilerVisible: boolean;
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
  isSpoilerVisible,
  minSize = 1.4,
  maxSize = 2.0,
  velocity = 0.5,
}: IDots) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const circles: {
    dx: number;
    dy: number;
    opacity: number;
    phi: number;
    radius: number;
    x: number;
    y: number;
  }[] = [];

  const createCircles = (amount: number = 10) => {
    for (let i = 0; i < amount; i++) {
      // x and y coordinates are such that circle will not be out of bounds
      // dx and dy is simply velocity
      // opacity is considered to be random for every circle
      // phi angle is for changing opacity with trigonometric functions
      // circleRadius is put into new variable in order to improve code readability
      const circleRadius = getRandomArbitrary(minSize, maxSize);
      const circleDiameter = 2 * circleRadius;
      circles.push({
        x: getRandomInt(circleDiameter, width - circleDiameter),
        y: getRandomInt(circleDiameter, height - circleDiameter),
        dx: velocity * (Math.random() - 0.5),
        dy: velocity * (Math.random() - 0.5),
        radius: circleRadius,
        opacity: ~~Math.random() * 100,
        phi: Math.random() * (2 * Math.PI),
      });
    }
  };

  const getCanvasContext = (currentCanvas: HTMLCanvasElement) => {
    return currentCanvas ? currentCanvas.getContext("2d") : null;
  };

  const draw_2DCanvas = () => {
    if (!canvas.current) return;

    const ctx = getCanvasContext(canvas.current);
    if (!ctx) return;
    const ratio = Math.ceil(window.devicePixelRatio);
    canvas.current.width = width * ratio;
    canvas.current.height = height * ratio;
    ctx.scale(ratio, ratio);
    ctx.clearRect(0, 0, width, height);
    canvas.current.style.width = `${width}px`;
    canvas.current.style.height = `${height}px`;

    circles.forEach((circle) => {
      if (
        circle.x + circle.dx >= width - circle.radius ||
        circle.x + circle.dx <= circle.radius
      ) {
        circle.dx = -circle.dx;
      }
      if (
        circle.y + circle.dy >= height - circle.radius ||
        circle.y + circle.dy <= circle.radius
      ) {
        circle.dy = -circle.dy;
      }
      circle.x += circle.dx;
      circle.y += circle.dy;
      if (!canvas.current) return;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);

      // Found a workaround because Safari and other Mobile versions of Browsers won't support
      // features like ctx.filter = 'opacity(.5)' for some reason. So this can be handled with fillStyle
      // rgba where you can specify opacity percentage
      ctx.fillStyle = `rgb(255 255 255 / ${circle.opacity}%)`;
      circle.phi = 0.005 + circle.phi % (2 * Math.PI);
      circle.opacity = 50 * (Math.sin(circle.phi) + 1);
      ctx.fill();
    });
    requestAnimationFrame(draw_2DCanvas);
  };

  useEffect(() => {
    createCircles(density);
    draw_2DCanvas();
  }, [width, height, isSpoilerVisible]);

  return (
    <div>
      {(!isSpoilerVisible) &&
        (
          <canvas
            ref={canvas}
            width={width}
            height={height}
            className={`${
              isSpoilerVisible && ("hidden")
            } absolute overflow-hidden`}
          />
        )}
      {/*children element is whatever is hiding behind those particles*/}
      {children}
    </div>
  );
};

export default CanvasDots;
