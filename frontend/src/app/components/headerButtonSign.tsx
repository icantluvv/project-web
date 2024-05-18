"use client";
import React from "react";
import Image from "next/image";

const HeaderButtonSign = () => {
    function signIn() {}

    function signUp() {}
    return (
        <div className="w-3/12 flex justify-between items-center text-sm">
            <button className="md:flex mr-5 lg-display-none justify-end">
                <Image
                    src="images/header/user.svg"
                    alt="account"
                    width={30}
                    height={30}
                    layout="responsible"
                ></Image>
            </button>
            <button
                className="hover:border-b-2 mr-1"
                type="button"
                onClick={signIn}
            >
                <p className="lg:flex md-display-none">Вход</p>
            </button>
            <p className="lg:flex md-display-none">/</p>
            <button
                className="hover:border-b-2 ml-1"
                type="button"
                onClick={signUp}
            >
                <p className="lg:flex md-display-none">Регистрация</p>
            </button>
        </div>
    );
};

export default HeaderButtonSign;
