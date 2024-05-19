"use client";
import React, { useEffect, useState } from "react";
import SignUp from "../components/SignUp";

const NotLogForm = () => {
    const [showSign, setShowSign] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
    }, []);
    return (
        <div className="w-full min-h-[35em] flex flex-col justify-center items-center">
            <h1>Вы не вошли в аккаунт</h1>
            <button className="mt-[2em] pb-[0.5em] pt-[0.5em] rounded-[10px] active:bg-[#204D8B] bg-[#4798DE] pl-[2em] pr-[2em]">
                Войти?
            </button>
        </div>
    );
};

export default NotLogForm;
