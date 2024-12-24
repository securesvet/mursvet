"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import Canvas from "@/components/ui/SpoilerTag/CanvasDots";

type SpoilerType = {
  children?: React.ReactNode;
  hint?: Boolean;
};

const SpoilerTag = ({ children, hint = false }: SpoilerType) => {
  const [isSpoilerVisible, setSpoilerIsVisible] = useState(false);
  const [dotsDimensions, setDotsDimensions] = useState({ width: 0, height: 0 });
  const divRefElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (isSpoilerVisible) return;

      if (divRefElement.current) {
        const { width, height } = divRefElement.current.getBoundingClientRect();
        setDotsDimensions({ width, height });
      }
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial dimensions
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSpoilerVisible]);

  // Force re-render when window is resized
  const [windowWidth, setWindowWidth] = useState(
    (typeof window !== "undefined") ? window.innerWidth : 0,
  );
  useEffect(() => {
    if (isSpoilerVisible) return;
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isSpoilerVisible]);

  const dotsKey = `${dotsDimensions.width}-${dotsDimensions.height}`;

  return (
    <>
      <div
        className="relative"
        onClick={() => {
          setSpoilerIsVisible(true);
        }}
      >
        <Canvas
          key={dotsKey}
          width={dotsDimensions.width}
          height={dotsDimensions.height}
          isSpoilerVisible={isSpoilerVisible}
        >
          <div
            ref={divRefElement}
            className={`${
              isSpoilerVisible
                ? ("opacity-100")
                : ("hover:cursor-pointer opacity-0")
            } transition-opacity duration-500 whitespace-nowrap`}
          >
            {children}
          </div>
        </Canvas>
      </div>
      {hint &&
        (
          <h1
            className={`text-sm md:text-lg lg:text-xl font-normal transition-opacity ${
              isSpoilerVisible ? ("opacity-0") : ("opacity-100")
            } duration-1000`}
          >
            (click here)
          </h1>
        )}
    </>
  );
};

export default memo(SpoilerTag);
