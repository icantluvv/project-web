import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
    const BaseUrl = "http://127.0.0.1:7777/api/category/image/";

    const cat = category;

    return (
        <div className="w-[23%] xl:w-[23%] sm:w-[45%] lg:w-[30%] xxs:w-[80%] flex justify-center items-start mb-10 ">
            <Link
                href={`/category/${cat.name}`}
                className="w-full transition-transform transform active:translate-y-1 active:translate-x-1 active:shadow-md  max-w-[300px] rounded-xl bg-[#F1F2F6] h-[240px] shadow-lg flex flex-col items-center justify-end"
            >
                <div className="max-h-[100px] min-w-[110px] mt-4 2xl:max-w-[250px] max-w-[180px]">
                    <Image
                        width={100}
                        height={100}
                        src={BaseUrl + cat.image}
                        alt="room images"
                        layout="responsive"
                    />
                </div>
                <div className="flex w-full h-full text-[#4798DE] justify-center items-end pt-[1em] pb-[1em] text-center h-[3em]">
                    {cat.name}
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
