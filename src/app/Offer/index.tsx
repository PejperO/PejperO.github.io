import React from "react";

import { CenterText } from "../../components/CenterText";
import { FaAngleRight } from "react-icons/fa";
import { Icon } from "../../components/Icon";
import { useLang } from "../../hooks/useLang";

const OfferList = ({ text, details }: { text: string; details: string }) => {
    return (
        <div className="flex gap-2 items-center">
            <Icon icon={FaAngleRight} />
            <a className="items-center text-blue-500 font-bold text-1xl" >
                {text}
            </a>
            <span>{details}</span>
        </div>
    );
};

export default function Offer() {
    const { translate } = useLang();

    const offer = translate("offer");

    return (
        <div className="relative flex flex-col justify-center px-4 md:w-4/5 md:px-0 mx-auto h-full">
            <div>
                <span
                    className="text-2xl lg:text-4xl"
                    dangerouslySetInnerHTML={{ __html: translate("offer").hello }}
                />
                <div className="md:text-lg lg:text-2xl mt-4">
                    <OfferList text={offer.off1} details={offer.off1_details} />
                    <OfferList text={offer.off2} details={offer.off2_details} />
                    <OfferList text={offer.off3} details={offer.off3_details} />
                    <OfferList text={offer.off4} details={offer.off4_details} />
                    <OfferList text={offer.off5} details={offer.off5_details} />
                </div>
            </div>
        </div>
    );
}
