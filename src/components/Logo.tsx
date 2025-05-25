import React from "react";

export const Logo = () => (
    <img
        src="/public/assets/icons/icon-white.png"
        alt="Logo"
        className="h-10 md:h-[70px] z-10 transition duration-300 hover:scale-105"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
);
