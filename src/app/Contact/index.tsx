import React from "react";

import { IconType } from "react-icons";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Icon } from "../../components/Icon";
import { useLang } from "../../hooks/useLang";

const SocialLink = ({ icon, text, link }: { icon: IconType; text: string; link: string }) => {
    return (
        <div className="flex gap-2 items-center">
            <Icon icon={icon} />
            <a
                href={link}
                target="_blank"
                className="items-center transition duration-300 hover:text-blue-500 z-10"
            >
                {text}
            </a>
        </div>
    );
};

export default function Contact() {
    const { translate } = useLang();

    return (
        <div className="relative flex flex-col justify-center px-4 md:w-4/5 md:px-0 mx-auto h-full">
            <div>
                <span
                    className="text-2xl lg:text-4xl"
                    dangerouslySetInnerHTML={{ __html: translate("contact").hello }}
                />
                <div className="md:text-lg lg:text-2xl mt-4">
                    <SocialLink
                        icon={FaLinkedin}
                        text="LinkedIn - PejperO"
                        link="https://www.linkedin.com/in/pejpero/"
                    />
                    <SocialLink
                        icon={FaFacebook}
                        text="Facebook - PejperO"
                        link="https://www.facebook.com/PejperO/"
                    />
                    <SocialLink
                        icon={FaGithub}
                        text="Github - PejperO"
                        link="https://github.com/PejperO"
                    />
                    <SocialLink
                        icon={FaEnvelope}
                        text="Email - polecki.mikolaj@gmail.com"
                        link="mailto:polecki.mikolaj@gmail.com"
                    />
                </div>
            </div>
        </div>
    );
}
