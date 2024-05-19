import React from "react";
import Image from "next/image";

const PromoCard: React.FC<PromoProps> = ({ promo }) => {
    const BaseUrl = "http://127.0.0.1:7777/api/promo/image/";
    return (
        <div className="xxs:min-w-[275px] sm:min-w-[410px] md:min-w-[550px] lg:min-w-[600px] xxs:mr-[1em] h-full">
            <Image
                src={BaseUrl + promo.image}
                width={410}
                height={208}
                alt=""
                layout="responsive"
            ></Image>
        </div>
    );
};

export default PromoCard;
