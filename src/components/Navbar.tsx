import React, { useNavigate, useState } from "react";
import { HOMEPAGE_BRANCH } from "../config";

import { CiMenuBurger } from "react-icons/ci";

import { Lang } from "./Lang";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

import { useLang } from "../hooks/useLang";

export const NavBar = () => {
    const navigate = useNavigate();
    const { translate } = useLang();
    const [isOpen, setIsOpen] = useState(false);
    const active = window.location.pathname.replace(HOMEPAGE_BRANCH, "");

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleRedirect = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement | null;
        const href = target?.getAttribute("href") || "#";
        navigate(href);
        window.scroll({ top: 0, behavior: "smooth" });
        closeMenu();
    };

    return (
        <nav className="fixed top-0 w-screen p-4 pr-12 z-20 flex items-center gap-8 text-lg uppercase">
            <Logo />

            {/* Mobile menu button */}
            <button className="ml-auto md:hidden text-white z-[50]" onClick={toggleMenu}>
                <Icon icon={CiMenuBurger} size={24} />
            </button>

            {/* Nav links */}
            <ul
                className={`
                    flex-col md:flex-row gap-8 ml-auto items-start md:items-center md:flex
                    ${
                        isOpen
                            ? "flex absolute pt-96 left-0 w-full p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                            : "hidden"
                    }
                    md:static md:w-auto md:ml-auto
                `}
            >
                <hr className="md:hidden w-full h-1" />
                <a href={HOMEPAGE_BRANCH + "/"} onClick={handleRedirect} className={active === "/" ? "text-blue-500" : ""}>
                    {translate("home")}
                </a>
                <a href={HOMEPAGE_BRANCH + "/portfolio"} onClick={handleRedirect} className={active === "/portfolio" ? "text-blue-500" : ""}>
                    {translate("portfolio").title}
                </a>
                <a href={HOMEPAGE_BRANCH + "/contact"} onClick={handleRedirect} className={active === "/contact" ? "text-blue-500" : ""}>
                    {translate("contact").title}
                </a>
                <Lang />
            </ul>
        </nav>
    );
};
