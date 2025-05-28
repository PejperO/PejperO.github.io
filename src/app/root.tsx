import React, { BrowserRouter, Router } from "react";
import { HOMEPAGE_BRANCH } from "../config";
import "./global.css";

import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ParticlesBackground } from "../components/Particles";
import { Cursor } from "../components/Cursor";

import { useTheme } from "../hooks/useTheme";

export default function Root() {

    useTheme();

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <div className="relative pt-96 mb-48 flex-grow">
                <BrowserRouter>
                    <Router src={HOMEPAGE_BRANCH + "/"} component={<Home />} default />
                    <Router src={HOMEPAGE_BRANCH + "/contact"} component={<Contact />} />
                    <Router src={HOMEPAGE_BRANCH + "/portfolio"} component={<Portfolio />} />
                </BrowserRouter>
            </div>

            <Footer />

            <ParticlesBackground />
            <Cursor />
        </div>
    );
}
