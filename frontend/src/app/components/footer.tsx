import React from "react";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-1/2 pt-10 pb-10 bg-[#F1F2F6]">
            <div className="flex xxs:flex-col lg:flex-row justify-around w-11/12 h-full">
                <div className="flex flex-col lg:items-start xxs:items-center">
                    <div className="text-[#6F7682] text-sm flex flex-col xxs:items-center">
                        <Link href="/">
                            <Image
                                src="/images/footer/logo.svg"
                                alt="footer logo"
                                width={190}
                                height={51}
                            ></Image>
                        </Link>
                    </div>
                    <div className="text-[#6F7682] text-sm flex flex-col xxs:items-center">
                        <p className="mt-10 xxs:mt-5 mb-1">
                            Мы в социальных сетях:
                        </p>
                        <Link href="">
                            <Image
                                src="/images/footer/social.svg"
                                alt="footer logo"
                                width={129}
                                height={45}
                            ></Image>
                        </Link>
                    </div>
                    <div className="text-[#6F7682] text-sm flex flex-col xxs:items-center">
                        <p className="mt-10 xxs:mt-5 mb-1">Мы принимаем</p>
                        <Image
                            src="/images/footer/cards.svg"
                            alt="footer logo"
                            width={129}
                            height={45}
                        ></Image>
                    </div>
                </div>

                <ul className="text-[#6F7682] text-sm flex flex-col lg:items-start xxs:items-center">
                    <h1 className="mb-5 text-base xxs:text-sm xxs:mt-10 lg:mt-0 text-[#15244F] font-bold">
                        ПОКУПАТЕЛЮ
                    </h1>

                    <h1></h1>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Доставка</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Оплата</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Гарантии и возврат</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Производители</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Статьи</a>
                    </li>
                </ul>

                <ul className="text-[#6F7682] text-sm flex flex-col lg:items-start xxs:items-center">
                    <h1 className="mb-5 text-base xxs:text-sm text-[#15244F] font-bold">
                        КОМПАНИЯ
                    </h1>

                    <li className="mb-5 xxs:text-xs">
                        <a href="#">О нас</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Контакты</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Пользовательское соглашение</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Политика конфиденциальности</a>
                    </li>
                    <li className="mb-5 xxs:text-xs">
                        <a href="#">Обратная связь</a>
                    </li>
                </ul>

                <ul className="text-[#6F7682] text-sm flex flex-col lg:items-start xxs:items-center">
                    <h1 className="mb-5 text-base xxs:text-sm text-[#15244F] font-bold">
                        КОНТАКТЫ
                    </h1>
                    <li className="mb-5 flex  xxs:text-xs">
                        <Image
                            src="/images/footer/phone.svg"
                            alt="phone"
                            width={16}
                            height={16}
                            className="mr-3"
                        ></Image>
                        8(800)800-00-00
                    </li>
                    <li className="mb-5 flex xxs:text-xs">
                        <Image
                            src="/images/footer/convert.svg"
                            alt="phone"
                            width={16}
                            height={16}
                            className="mr-3"
                        ></Image>
                        zakaz@gidratop.ru
                    </li>
                    <li className="mb-5 flex xxs:text-xs">
                        <Image
                            src="/images/footer/contacts.svg"
                            alt="phone"
                            width={16}
                            height={16}
                            className="mr-3"
                        ></Image>
                        г. Санкт-Петербург, пр-кт. Невский, д.39
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default footer;
