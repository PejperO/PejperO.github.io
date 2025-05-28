import React from "react";
import { Project } from "./type";

export const ProjectCard = ({ project, right }: { project: Project; right: boolean }) => {
    return (
        <div
            className={`z-[10] flex flex-col items-center justify-center gap-12 xl:p-8 ${
                right ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
        >
            <img
                className="w-96 rounded-lg duration-300 shadow-2xl hover:scale-105"
                src={project.img}
                alt={project.title}
                onClick={() => project.link && window.open(project.link, "_blank")}
            />
            <div>
                <h3 className="text-blue-500 text-2xl font-black mb-2">{project.title}</h3>
                {project.subtitle && <span className="text-sm font-bold">{project.subtitle}</span>}
                <div className="mt-6">
                    <h4 className="font-black">Overview:</h4>

                    <div className="mt-4">
                        {project.overview.map((e) => (
                            <p>{e}</p>
                        ))}
                    </div>

                    {project.features.length > 0 && (
                        <div className="mt-4">
                            <h2>Features</h2>
                            <ul className="list-disc ml-5">
                                {project.features.map((e) => (
                                    <li key={e.title} className="pl-1">
                                        <div className={e.link && "flex flex-col gap-1"}>
                                            <span className="font-bold">{e.title}</span>{" "}
                                            <span>{e.description}</span>
                                            {e.link && (
                                                <a
                                                    href={e.link}
                                                    target="_blank"
                                                    className="underline mb-4 hover:text-blue-500"
                                                >
                                                    {" "}
                                                    View Project
                                                </a>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mt-6">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                className="underline font-bold text-xl hover:text-blue-500"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
