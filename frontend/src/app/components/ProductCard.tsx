import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonPutToCart from "./buttonPutToCart";

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const prod = product;

    const baseUrl = "http://127.0.0.1:7777/api/product/image/";
    return (
        <div className="lg:w-[32%] xl:w-[24%] xxs:w-[80%] sm:w-[45%] flex flex-col items-center justify-start mb-10">
            <div className="w-full transition-transform transform  hover:shadow-md 2xl:max-w-[350px] max-w-[300px] border rounded-xl bg-white min-h-[430px] flex flex-col items-center justify-between">
                <Link
                    className="flex flex-col items-center"
                    href={`/product/${prod.name}`}
                >
                    <div className="h-full flex min-h-[224px] items-center">
                        <Image
                            width={100}
                            height={100}
                            src={baseUrl + `${prod.image}`}
                            alt="room images"
                            layout="responsive"
                        />
                    </div>

                    <div className="pl-4  pr-4">
                        <h5 className="text-[14px]font-light text-[#4798DE]">
                            {prod.name}
                        </h5>
                        <p className="mt-[0.5em] ">{prod.description}</p>
                        <p className="text-[22px] mt-[0.5em] font-bold">
                            {prod.price}р
                        </p>
                    </div>
                </Link>

                <ButtonPutToCart prodId={prod.id} />
            </div>
        </div>
    );
};

export default ProductCard;
