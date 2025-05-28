import React from "react";

import { ScrollLine } from "../../components/ScrollLine";
import { CenterText } from "../../components/CenterText";
import { AboutSection } from "../../components/AboutSection";

import { useLang } from "../../hooks/useLang";


export default function Home() {
    const { translate } = useLang();

    return (
        <div className="relative flex flex-col justify-center mx-4 md:w-4/5 md:mx-auto">
            <CenterText intro={translate("intro")} hello={translate("hello")} />
            <ScrollLine className="h-full" />
            <AboutSection />
        </div>
    );
}
