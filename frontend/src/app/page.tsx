import Image from "next/image";
import CategoryCard from "./components/CategoryCard";
import { getCategory } from "./lib/getCategory";
import PromoCard from "./components/PromoCard";
import { getPromo } from "./lib/getPromo";

export default async function Home() {
    const Promo = await getPromo();
    const Category = await getCategory();
    return (
        <main className=" w-full flex-col items-center">
            <div className="relative flex  w-full">
                <Image
                    src="/images/home/bigback.svg"
                    width={1440}
                    height={600}
                    alt="main promo"
                    layout="responsive"
                ></Image>
                <div className="absolute right-0 w-4/12 pl-5 h-full bg-white/75 flex justify-center flex-col">
                    <p className="text-3xl font-bold text-[#6F7682] flex flex-col">
                        Скидки на мебель для ванной комнаты
                        <span className="mt-5 text-[#6CDB7E] text-[45px] font-bold">
                            до 10%
                        </span>
                    </p>
                    <button className="w-[140px] h-[40px] font-semibold text-white mt-10 bg-[#4798DE] rounded-md">
                        Подробнее
                    </button>
                </div>
            </div>

            <div className="w-full relative pt-[7em] flex flex-col items-center justify-center">
                <div className="w-[257px] z-[-20] top-[19%] left-[10%] absolute h-[142px]">
                    <Image
                        src="images/home/Stock.svg"
                        alt=""
                        width={257}
                        height={142}
                    ></Image>
                </div>
                <div className="w-[90%] flex flex-col ">
                    <div className="flex justify-between items-end">
                        <h1 className="font-bold text-3xl">Акции</h1>
                        <p className="text-xs text-[#4798DE]">Все акции</p>
                    </div>
                    <div className="w-full mt-[5em] flex justify-between items-center">
                        {Array.isArray(Promo) &&
                            Promo.length > 0 &&
                            Promo.map((promo) => (
                                <PromoCard key={promo.id} promo={promo} />
                            ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex justify-center mt-[7em]">
                <div className="flex w-[85%] justify-between flex-wrap items-center ">
                    {Array.isArray(Category) &&
                        Category.length > 0 &&
                        Category.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}
                </div>
            </div>
        </main>
    );
}
