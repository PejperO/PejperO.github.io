import React from "react";
import "./styles.css";
import { useLang } from "../../hooks/useLang";

export const CodeSection = () => {
    const { translate } = useLang();

    return (
        <div id="about" className="overflow-x-auto overflow-y-hidden z-10 custom-scrollbar">
            <div className="whitespace-nowrap">
                {" "}
                <p>
                    <span className="keyword">class</span>{" "}
                    <span className="class-name">MikolajPolecki</span> {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;// <span>{translate("about-text")}</span>
                </p>
                <p>
                    &nbsp;&nbsp;<span className="function">constructor</span>() {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="property">{translate("this-name")}</span> ={" "}
                    <span className="string">"Mikołaj Polecki"</span>;
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="property">{translate("this-specialization")}</span> ={" "}
                    <span className="string">"Java Developer"</span>;
                </p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("languages")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                    <span className="string">"Java"</span>, <span className="string">"Python"</span>
                    , <span className="string">"Kotlin"</span>,{" "}
                    <span className="string">"C++"</span>, <span className="string">"C#"</span>,{" "}
                    <span className="string">"JavaScript"</span>,{" "}
                    <span className="string">"HTML / CSS"</span>];
                </p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("skills")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                    <span className="string">"InteliJ"</span>,{" "}
                    <span className="string">"PyCharm"</span>,{" "}
                    <span className="string">"Clion"</span>,{" "}
                    <span className="string">"Android Studio"</span>,{" "}
                    <span className="string">"Visual Studio Code"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Visual Studio"</span>,{" "}
                    <span className="string">"Atom"</span>, <span className="string">"NodeJS"</span>
                    , <span className="string">"MySQL"</span>,{" "}
                    <span className="string">"SQLite"</span>, <span className="string">"Bash"</span>
                    , <span className="string">"Git"</span>, <span className="string">"Figma"</span>
                    ];
                </p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("education")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("edu-text")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("degree")}"</span>
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("experience")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp1")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp2")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp3")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp4")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp5")}"</span>
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
            </div>
        </div>
    );
};
