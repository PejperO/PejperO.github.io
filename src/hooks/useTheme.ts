import { useEffect } from "react";
import { HOMEPAGE_BRANCH } from "../config";

export const useTheme = () => {
    const changeFavicon = (url: string) => {
        const favicon =
            (document.getElementById("favicon") as HTMLLinkElement) ||
            document.createElement("link");
        favicon.id = "favicon";
        favicon.rel = "icon";
        favicon.href = url;

        const existing = document.querySelector('link[rel="icon"]');
        if (existing) {
            document.head.removeChild(existing);
        }

        document.head.appendChild(favicon);
    };

    useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            changeFavicon(`${HOMEPAGE_BRANCH}/public/assets/icons/icon-white.png`);
        }
    }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);

    return null;
};
