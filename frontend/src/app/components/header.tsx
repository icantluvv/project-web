import Image from "next/image";
import HeaderButtonSign from "./headerButtonSign";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="flex flex-col justify-center items-center w-full border-b-2">
                <div className="flex lg:w-[90%] xxs:w-[95%] justify-between items-center h-full pt-5 pb-5">
                    <Link
                        href="/"
                        className="lg:min-w-[180px] md:min-w-[120px] h-full"
                    >
                        <Image
                            src="/images/footer/logo.svg"
                            alt="logo header"
                            width={190}
                            height={51}
                        />
                    </Link>
                    <nav className="w-full flex items-center hidden md:flex max-w-[1000px] pl-5 justify-between text-sm max-w-[800px] text-[12px] md:text-[12px] lg:text-[14px]">
                        <a
                            className="active:text-[#15244F] mr-[3px] hover:border-b-2"
                            href="#"
                        >
                            О нас
                        </a>
                        <a href="#" className="hover:border-b-2 mr-[5px]">
                            Производители
                        </a>
                        <a href="#" className="hover:border-b-2 mr-[5px]">
                            Гарантии и возврат
                        </a>
                        <a href="#" className="hover:border-b-2 mr-[5px]">
                            Доставка
                        </a>
                        <a href="#" className="hover:border-b-2 mr-[5px]">
                            Оплата
                        </a>
                        <a href="#" className="hover:border-b-2 mr-[5px]">
                            Контакты
                        </a>
                    </nav>
                    <HeaderButtonSign />
                </div>
            </div>
        </div>
    );
};

export default Header;
