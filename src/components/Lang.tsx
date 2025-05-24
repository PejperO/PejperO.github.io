import React from "react";
import { useLang } from "../hooks/useLang";

export const Lang = () => {
    const { nextLang, setLang, getFlag } = useLang();

    const flag = getFlag();

    return (
        <button onClick={() => setLang(nextLang)}>
            <img
                src={flag.src}
                alt={flag.alt}
                className="w-[45px] h-[25px] rounded-md"
            />
        </button>
    );
};
