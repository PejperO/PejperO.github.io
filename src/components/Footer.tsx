import React from "react";
import { useLang } from "../hooks/useLang";

export const Footer = () => {
    const { translate } = useLang();

    return (
        <div className="flex items-center justify-center gap-4 text-sm text-center text-gray-400 p-1">
            <span>{translate("footer-text")}</span>
        </div>
    );
};
