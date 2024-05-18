import Image from "next/image";
import HeaderButtonSign from "./headerButtonSign";

const header = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="flex flex-col justify-center items-center w-full border-b-2">
                <div className="flex w-11/12 h-full pt-5 pb-5  ">
                    <div className="w-[190px] h-[51px]">
                        <Image
                            src="/images/footer/logo.svg"
                            alt="logo header"
                            width={190}
                            height={51}
                        ></Image>
                    </div>
                    <nav className="w-full flex items-center pl-10 pr-[130px] justify-between text-sm">
                        <a href="">О нас</a>
                        <a href="">Производители</a>
                        <a href="">Гарантии и возврат</a>
                        <a href="">Доставка</a>
                        <a href="">Оплата</a>
                        <a href="">Контакты</a>
                    </nav>
                    <HeaderButtonSign></HeaderButtonSign>
                </div>
            </div>
        </div>
    );
};

export default header;
