import React from "react";
import portfolioData from "../../../public/portfolio.json" assert { type: "json" };
import { ProjectCard } from "./Card";
import { useLang } from "../../hooks/useLang";

export const Projects = () => {
    const { lang } = useLang();
    const data = portfolioData[lang];

    if (!data || data.length === 0) {
        return (
            <div className="pl-2 md:ml-[60px] xl:ml-[80px] xl:pl-16 mt-[60vh] flex flex-col items-center">
                <h2 className="text-2xl font-bold">No projects available at selected language</h2>
                <p className="text-gray-500">Please check back later.</p>
            </div>
        );
    }

    return (
        <div className="pl-2 md:ml-[60px] xl:ml-[80px] xl:pl-16 mt-[60vh] flex flex-col gap-64 w-full">
            {data.map((p, index) => (
                <ProjectCard project={p} right={index % 2 == 1} />
            ))}
        </div>
    );
};
