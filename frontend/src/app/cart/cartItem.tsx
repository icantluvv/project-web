import React from "react";
import Image from "next/image";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const baseUrl = "http://127.0.0.1:7777/api/product/image/";

    return (
        <div className="w-[250px] mr-[2em] flex flex-col items-center justify-center mb-10">
            <div className="w-full transition-transform transform  hover:shadow-md  max-w-[300px] border rounded-xl bg-white min-h-[380px] flex flex-col items-center justify-between">
                <div className="flex flex-col justify-between items-center">
                    <div className="h-full flex min-h-[224px] items-center">
                        <Image
                            width={100}
                            height={100}
                            src={baseUrl + `${item.item.image}`}
                            alt=""
                            layout="responsive"
                        />
                    </div>

                    <div className="pl-4  pr-4">
                        <h5 className="text-[14px]font-light text-[#4798DE]">
                            {item.item.description}
                        </h5>
                        <p className="mt-[0.5em] ">{item.item.name}</p>
                        <p className="text-[22px] mt-[0.5em] font-bold">
                            {item.item.price}р
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
