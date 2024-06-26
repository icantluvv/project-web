"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Search = () => {
    const router = useRouter();

    function allCategories() {
        router.push(`/product`);
    }
    return (
        <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="flex flex-col justify-center pt-5 pb-5 items-center w-full ">
                <div className="flex w-11/12 justify-between h-full items-center   ">
                    <button
                        onClick={allCategories}
                        className="w-[190px] h-full mr-5"
                    >
                        <Image
                            src="/images/header/catalog.svg"
                            alt="logo header"
                            width={190}
                            height={51}
                            className="hover:fill-none"
                        ></Image>
                    </button>
                    <div className="flex w-4/12 xxs:hidden sm:flex">
                        <input
                            type="text"
                            placeholder="Поиск товаров и брендов"
                            className="h-[50px] w-full border-2"
                        />
                        <button className="flex justify-center items-center w-[84px] h-[50px] bg-[#4798DE] active:bg-[#15244F] rounded-r-xl">
                            <Image
                                src="/images/header/search.svg"
                                width={40}
                                height={40}
                                alt="search"
                            ></Image>
                        </button>
                    </div>
                    <div className="lg:flex flex-col w-3/12 ml-5 hidden">
                        <a className="text-base text-[#6F7682]">
                            8-800-000-00-00
                        </a>
                        <label className="text-xs text-[#6CDB7E]">
                            Вам перезвонить?
                        </label>
                    </div>

                    <div className="flex  md:justify-around xxs:justify-end w-3/12">
                        <button>
                            <div className="flex flex-col items-center md:mr-0 xxs:mr-5">
                                <Image
                                    src="/images/header/like.svg"
                                    alt="like"
                                    width={25}
                                    height={25}
                                    layout="responsible"
                                ></Image>
                                <p className="text-xs text-[#4798DE] hidden lg:flex lg:flex md-display-none">
                                    Избранное
                                </p>
                            </div>
                        </button>
                        <button>
                            <div className="flex flex-col hidden md:flex items-center">
                                <Image
                                    src="/images/header/poll.svg"
                                    alt="like"
                                    width={25}
                                    height={25}
                                    layout="responsible"
                                ></Image>
                                <p className="text-xs text-[#4798DE] hidden lg:flex ">
                                    Сравнение
                                </p>
                            </div>
                            <p></p>
                        </button>
                        <button>
                            <Link
                                href={`/cart`}
                                className="flex flex-col items-center"
                            >
                                <Image
                                    src="/images/header/cart.svg"
                                    alt="like"
                                    width={25}
                                    height={25}
                                    layout="responsible"
                                ></Image>
                                <p className="text-xs text-[#4798DE] hidden lg:flex lg:flex md-display-none">
                                    Корзина
                                </p>
                            </Link>
                            <p></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
