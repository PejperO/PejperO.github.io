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
                    <span className="string">"SailPoint"</span>,
                    <span className="string">"IAM Architecture"</span>,
                    <span className="string">"JML"</span>,
                    <span className="string">"RBAC"</span>,
                    <span className="string">"Access Certifications"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Spring / Spring Boot"</span>,
                    <span className="string">"REST API Design"</span>,
                    <span className="string">"Hibernate / JPA"</span>,
                    <span className="string">"Maven / Gradle"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Unit / Integration Testing"</span>,
                    <span className="string">"Multithreading / Concurrency"</span>,
                    <span className="string">"JVM fundamentals"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"LDAP"</span>,
                    <span className="string">"SCIM"</span>,
                    <span className="string">"OAuth 2.0"</span>,
                    <span className="string">"JDBC Connectors"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"MySQL, SSMS, Oracle"</span>,
                    <span className="string">"Database schema design"</span>,
                    <span className="string">"Query optimization"</span>,
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Git"</span>,
                    <span className="string">"CI/CD pipelines"</span>,
                    <span className="string">"Docker"</span>,
                    <span className="string">"Linux"</span>,
                    <span className="string">"Bash scripting"</span>,
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
                {/* <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"{translate("exp5")}"</span>
                </p> */}
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
