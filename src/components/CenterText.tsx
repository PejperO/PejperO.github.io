import React from "react";

interface CenterTextProps {
    hello: string;
    intro: string;
}

export const CenterText = ({ hello, intro }: CenterTextProps) => {
    return (
        <div className="-mt-[20px] ml-[70px] text-[20px] md:ml-[100px] md:text-[25px] xl:ml-[140px] xl:text-[30px] z-10">
            <span dangerouslySetInnerHTML={{ __html: hello }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: intro}} />
        </div>
    );
};
