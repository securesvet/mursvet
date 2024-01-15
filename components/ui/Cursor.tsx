'use client';

import React, {useState} from 'react';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    })

    const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
        setMousePosition({left: ev.pageX, top: ev.pageY});
    }

    return (
        <div className="absolute z-[1000] w-10 h-10"
             onMouseMove={(ev) => {
                 handleMouseMove(ev)
             }}
             style={{left: mousePosition.left, top: mousePosition.top}
             }>
            <h1>Yes</h1>
        </div>
    );
};

export default Cursor;