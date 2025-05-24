import React from "react";
import { Mouse } from "./Mouse";

export const ScrollLine = ({ className }: { className?: string }) => {
    return (
        <div className={"absolute left-[20px] md:left-[40px] xl:left-[80px] top-0 " + className}>
            <Mouse />
            <div className="relative h-full w-[2px] bg-blue-500 mx-auto" />
            <p className="absolute top-24 -left-[16px] text-sm -rotate-90">Scroll</p>
        </div>
    );
};
