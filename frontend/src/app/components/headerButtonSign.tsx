"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderButtonSign = () => {
    const router = useRouter();

    function goAccount() {
        router.push(`/account`);
    }

    return (
        <div className="w-3/12 flex justify-end items-center ">
            <div className="w-full flex xxs:max-w-[60px] xxs:min-w-[60px] xxs:min-h-[50px]  justify-end">
                <button
                    onClick={goAccount}
                    className="flex items-center pt-1 pb-1 pl-4 pr-4 bg-[#4798DE] active:bg-[#204D8B] rounded-[10px]"
                >
                    <p
                        className={`text-[14px] text-white mr-[0.5em] hidden sm:hidden`}
                    >
                        Аккаунт
                    </p>
                    <Image
                        src="images/header/user.svg"
                        alt="account"
                        width={40}
                        height={40}
                        layout="responsible"
                    />
                </button>
            </div>
        </div>
    );
};

export default HeaderButtonSign;
