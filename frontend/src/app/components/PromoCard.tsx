import React from "react";
import Image from "next/image";

const PromoCard: React.FC<PromoProps> = ({ promo }) => {
    const BaseUrl = "http://127.0.0.1:7777/api/promo/image/";
    return (
        <div className="w-[31%] h-full">
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
