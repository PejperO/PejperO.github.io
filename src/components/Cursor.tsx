import React, { useEffect, useRef } from "react";

export const Cursor = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            ref.current.style.left = `${e.pageX}px`;
            ref.current.style.top = `${e.pageY}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={ref} className="custom-cursor" />;
};
