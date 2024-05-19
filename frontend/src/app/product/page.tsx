import React from "react";
import { getProduct } from "../lib/getProduct";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { getCategory } from "../lib/getCategory";
import CategoryCard from "../components/CategoryCard";

export default async function Product() {
    const Category = await getCategory();
    const Product = await getProduct();
    console.log(Product);

    return (
        <div className="w-full min-h-[35em] bg-[#FBFBFB] xxs:flex-col lg:flex-row justify-center xxs:items-center lg:items-start flex">
            <div className="lg:w-[30%] xxs:w-full flex flex-col items-center">
                <div className="w-80% xxs:w-[90%] bg-white mt-[5em] border rounded-[6px] ">
                    <div className="min-w-[280px] max-w-[280px] w-[auto] pl-[2em] pr-[0em] pt-[1em] pb-[1em] flex flex-col items-start">
                        {Array.isArray(Category) &&
                            Category.length > 0 &&
                            Category.map((category) => (
                                <button
                                    className="flex w-full mb-[0.5em] justify-start"
                                    key={category.id}
                                >
                                    <p className="text-[14px] w-full flex hover:text-[#4798DE]">
                                        {category.name}
                                    </p>
                                </button>
                            ))}
                    </div>
                </div>
            </div>
            <div className="flex sm:w-[85%] sm:justify-center xxs:w-[80%]">
                <div className="flex sm:w-[95%] xxs:justify-center xxs:w-full mt-[5em] sm:justify-between flex-wrap items-center">
                    {Array.isArray(Product) &&
                        Product.length > 0 &&
                        Product.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            </div>
        </div>
    );
}
