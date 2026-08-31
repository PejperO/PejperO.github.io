import React from "react";
import { CodeSection } from "./Code";

const LineNumbers = () => {
    return (
        <div className="ml-0 md:ml-[10px] xl:ml-[50px] text-gray-400 select-none leading-2">
            {Array.from({ length: 36 }, (_, i) => (
                <p key={i}>{(i + 1).toString().padStart(2, "0")}</p>
            ))}
        </div>
    );
};

export const AboutSection = () => (
    <div className="mt-[60vh] flex gap-8 overflow-x-hidden xl:text-xl">
        <LineNumbers />
        <CodeSection />
    </div>
);
