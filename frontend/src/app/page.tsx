import Image from "next/image";
import CategoryCard from "./components/CategoryCard";
import { getCategory } from "./lib/getCategory";
import PromoCard from "./components/PromoCard";
import { getPromo } from "./lib/getPromo";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { getProduct } from "./lib/getProduct";

export default async function Home() {
    const Promo = await getPromo();
    const Category = await getCategory();
    const Product = await getProduct();
    return (
        <main className=" w-full flex-col items-center">
            {/* Главое промо */}
            <div className="relative xxs:min-h-[300px] overflow-hidden flex  w-full">
                <Image
                    src="/images/home/bigback.svg"
                    width={1440}
                    height={600}
                    alt="main promo"
                    layout="responsive"
                    className="object-cover w-full h-[auto]"
                ></Image>
                <div className="absolute xxs:pt-10 xxs:pb-10 right-0 xxs:max-w-[200px] sm:max-w-[250px] md:max-w-[300px] sm:max-w-[600px] w-full lg:w-4/12 pl-5 h-full bg-white/75 flex justify-center flex-col">
                    <p className="lg:text-[24px] sm:text-[16px] text-[24px] md:text-[18px] xxs:text-[16px] w-[75%] font-bold text-[#6F7682] flex flex-col">
                        Скидки на мебель для ванной комнаты
                        <span className="lg:mt-5 mt-2  sm:text-[22px] lg:text-[35px] text-[#6CDB7E] md:text-[24px] xxs:text-[24px] font-bold">
                            до 10%
                        </span>
                    </p>
                    <button className="max-w-[140px] lg:max-w-[155px] lg:max-h-[35px]  xl:max-w-[170px] xl:max-h-[50px] sm:text-[12px] xl:text-[14px] xxs:max-w-[100px] xxs:text-[12px] xxs:max-h-[30px] active:bg-[#15244F] h-[40px] font-semibold text-white mt-10 bg-[#4798DE] rounded-md">
                        Подробнее
                    </button>
                </div>
            </div>

            {/* Промо  */}
            <div className="w-full relative xxs:mt-[3em] lg:mt-[7em] flex flex-col items-center justify-center">
                {/* <div className="w-[257px] z-[-20] top-[19%] left-[10%] absolute h-[142px]">
                    <Image
                        src="images/home/Stock.svg"
                        alt=""
                        width={257}
                        height={142}
                        className="xxs:hidden sm:flex"
                    ></Image>
                </div> */}
                <div className="w-[90%] flex flex-col ">
                    <div className="flex justify-between items-end">
                        <h1 className="font-bold lg:text-3xl xxs:text-[20px] ">
                            Акции
                        </h1>
                        <button className="text-xs md:text-[14px] xl:text-[16px] active:text-[#15244F] text-[#4798DE]">
                            Все акции
                        </button>
                    </div>

                    {/* Промо  */}
                    <div className="flex xxs:mt-[2em] md:mt-[5em]  overflow-x-scroll">
                        {Array.isArray(Promo) &&
                            Promo.length > 0 &&
                            Promo.map((promo) => (
                                <PromoCard key={promo.id} promo={promo} />
                            ))}
                    </div>
                </div>
            </div>

            {/* Товары */}
            <div className="w-full h-full flex flex-col items-center xxs:mt-[3em] lg:mt-[7em]">
                <div className="w-[90%] flex flex-col">
                    <div className="flex justify-between items-end">
                        <h1 className="font-bold lg:text-3xl xxs:text-[20px]">
                            Товары
                        </h1>
                        <Link
                            href="/product"
                            className="text-xs md:text-[14px] xl:text-[16px]  active:text-[#15244F] text-[#4798DE]"
                        >
                            Все товары
                        </Link>
                    </div>
                </div>

                <div className="flex xxs:flex-col xxs:mt-[2em] md:mt-[5em] sm:flex-row sm:w-[100%] sm:justify-around sm:max-w-[700px] lg:w-[100%] lg:max-w-[1000px] lg:justify-around mt-[5em] xl:max-w-[1400px] 2xl:max-w-[1600px] xl:w-[90%]   flex-wrap items-center">
                    {Array.isArray(Product) &&
                        Product.length > 0 &&
                        Product.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            </div>

            {/* Категории */}
            <div className="w-full h-full flex flex-col items-center mt-[7em]">
                <div className="w-[90%] flex flex-col">
                    <div className="flex justify-between items-end">
                        <h1 className="font-bold text-3xl">Категории</h1>
                        <Link
                            href="/category"
                            className="text-xs md:text-[14px] xl:text-[16px]  active:text-[#15244F] text-[#4798DE]"
                        >
                            Все категории
                        </Link>
                    </div>
                </div>

                <div className="flex w-[85%] xxs:flex-col sm:flex-row sm:w-[90%] sm:jutify-around sm:max-w-[650px] lg:max-w-[1000px] lg:justify-around xl:max-w-[1500px] xxs:w-full justify-between mt-[5em] flex-wrap items-center ">
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
