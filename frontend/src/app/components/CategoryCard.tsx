import React from "react";
import Image from "next/image";

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
    const BaseUrl = "http://127.0.0.1:7777/api/category/image/";

    const cat = category;
    return (
        <div className="w-[23%] flex justify-center items-start mb-10">
            <div className="w-full max-w-[300px] rounded-xl bg-[#F1F2F6] h-[240px] flex flex-col items-center justify-end">
                <div className="max-h-[100px] min-w-[110px] mt-4 max-w-[180px]">
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
            </div>
        </div>
    );
};

export default CategoryCard;
