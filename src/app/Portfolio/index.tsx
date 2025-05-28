import React from "react";

import { ScrollLine } from "../../components/ScrollLine";
import { CenterText } from "../../components/CenterText";
import { Projects } from "../../components/Projects";

import { useLang } from "../../hooks/useLang";

export default function Portfolio() {
    const { translate } = useLang();

    const portfolio = translate("portfolio");

    return (
        <div className="relative flex flex-col justify-center w-4/5 mx-auto ">
            <CenterText hello={portfolio.hello} intro={portfolio.intro} />
            <ScrollLine className="h-[60vh] lg:h-full" />
            <Projects />
        </div>
    );
}
