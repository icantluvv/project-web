"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Register } from "../lib/registerUser";
import { Login } from "../lib/loginUser";

const SignUp = () => {
    const [show, setShow] = useState("none");
    const [showReg, setShowReg] = useState("flex");
    const [showLog, setShowLog] = useState("none");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        if (token) {
            setShow("none");
        } else {
            setShow("flex");
        }
    }, []);

    function closeAuth() {
        setShow("none");
    }

    function handleShowWhat() {
        if (showReg == "flex") {
            setShowReg("none");
            setShowLog("flex");
            return;
        }
        setShowReg("flex");
        setShowLog("none");
    }

    const registerAcc = async () => {
        try {
            Register(username, password)
                .then((data) => {
                    localStorage.setItem("token", data.token);
                    console.log(data.token);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                });
        } catch (error) {
            console.error("Form validation failed:", error);
        }
    };

    const loginAcc = async () => {
        try {
            Login(username, password)
                .then((data) => {
                    localStorage.setItem("token", data.token);
                    console.log(data.token);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                });
        } catch (error) {
            console.error("Form validation failed:", error);
        }
    };

    return (
        <div
            style={{ display: `${show}` }}
            className="flex flex-col justify-center items-center bg-backAuth/0 absolute w-full h-full z-50"
        >
            <form
                style={{ display: `${showLog}` }}
                className="w-3/12 h-4/6 flex relative flex-col bg-white rounded-xl items-center border-2"
            >
                <button
                    type="button"
                    onClick={closeAuth}
                    className="w-[30px] h-[30px] right-[15px] top-[10px] absolute"
                >
                    <Image
                        src="/images/auth/closeAuth.svg"
                        alt="close auth"
                        layout="responsible"
                        width={20}
                        height={20}
                    ></Image>
                </button>
                <h1 className="w-full flex justify-center items-center pt-20 text-xl">
                    Вход
                </h1>

                <div className="flex flex-col w-full h-full justify-center items-center">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-5/6 pt-2 pb-2  pl-2 rounded-lg pr-2 bg-white mb-3  border-2"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-5/6 pt-2 pb-2 pl-2 rounded-lg pr-2 bg-white  border-2"
                    />
                </div>

                <button
                    onClick={loginAcc}
                    type="button"
                    className="flex w-5/6 pt-2 mb-5 pb-2 justify-center rounded-lg items-center text-white bg-black"
                >
                    Войти
                </button>

                <div className="text-sm">
                    Нет аккаунта?
                    <button
                        onClick={handleShowWhat}
                        type="button"
                        className="ml-1 mb-10 border-b-2"
                    >
                        Регистрация
                    </button>
                </div>
            </form>

            <form
                style={{ display: `${showReg}` }}
                className="w-3/12 h-4/6 flex relative flex-col bg-white rounded-xl items-center border-2"
            >
                <button
                    type="button"
                    onClick={closeAuth}
                    className="w-[30px] h-[30px] right-[15px] top-[10px] absolute"
                >
                    <Image
                        src="/images/auth/closeAuth.svg"
                        width={20}
                        height={20}
                        layout="responsible"
                        alt="close auth"
                    ></Image>
                </button>
                <h1 className="w-full flex justify-center items-center pt-20 text-xl">
                    Регистрация
                </h1>

                <div className="flex flex-col w-full h-full justify-center items-center">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-5/6 pt-2 pb-2  pl-2 rounded-lg pr-2 bg-white mb-3  border-2"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-5/6 pt-2 pb-2 pl-2 rounded-lg pr-2 bg-white  border-2"
                    />
                </div>

                <button
                    onClick={registerAcc}
                    type="button"
                    className="flex w-5/6 pt-2 mb-5 pb-2 justify-center rounded-lg items-center text-white bg-black"
                >
                    Регистрация
                </button>

                <div className="text-sm">
                    Есть аккаунт?
                    <button
                        onClick={handleShowWhat}
                        type="button"
                        className="ml-1 mb-10 border-b-2"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
