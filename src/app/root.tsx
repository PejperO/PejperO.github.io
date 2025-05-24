import React, { BrowserRouter, Router } from "react";
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

            <div className="relative mt-96 mb-48 flex-grow">
                <BrowserRouter>
                    <Router src="/" component={<Home />} default />
                    <Router src="/contact" component={<Contact />} />
                    <Router src="/portfolio" component={<Portfolio />} />
                </BrowserRouter>
            </div>

            <Footer />

            <ParticlesBackground />
            <Cursor />
        </div>
    );
}
