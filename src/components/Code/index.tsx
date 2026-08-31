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
                    <span className="string">"IAM Developer"</span>;
                </p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("languages")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Java"</span>,
                    <span className="string">"Python"</span>,
                    <span className="string">"Kotlin"</span>,
                    <span className="string">"C++"</span>,
                    <span className="string">"C#"</span>,
                    <span className="string">"JavaScript"</span>,
                    <span className="string">"SQL"</span>,
                    <span className="string">"HTML / CSS"</span>
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>
                    &nbsp;&nbsp;
                    <span className="function">{translate("skills")}</span>
                    () {"{"}
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="return">return</span> [
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("skill1")}"</span>,
                    <span className="string">"{translate("skill2")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("skill3")}"</span>,
                    <span className="string">"{translate("skill4")}"</span>,
                    <span className="string">"{translate("skill5")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("skill6")}"</span>,
                    <span className="string">"{translate("skill7")}"</span>,
                    <span className="string">"{translate("skill8")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("skill9")}"</span>,
                    <span className="string">"{translate("skill10")}"</span>,
                    <span className="string">"{translate("skill11")}"</span>,
                    <span className="string">"{translate("skill12")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("skill13")}"</span>,
                    <span className="string">"{translate("skill14")}"</span>,
                    <span className="string">"{translate("skill15")}"</span>,
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
                    <span className="string">"{translate("exp5")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp3")}"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp4")}"</span>,
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;];</p>
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
                <p>{"}"}</p>
            </div>
        </div>
    );
};
