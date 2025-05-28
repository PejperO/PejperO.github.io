import React from "react";
import { HOMEPAGE_BRANCH } from "../config";
import { useLang } from "../hooks/useLang";


export const Lang = () => {
    const { nextLang, setLang, getFlag } = useLang();

    const flag = getFlag();

    return (
        <img
            src={HOMEPAGE_BRANCH + flag.src}
            alt={flag.alt}
            className="w-[45px] h-[25px] rounded-md cursor-none"
            onClick={() => setLang(nextLang)}
        />
    );
};
