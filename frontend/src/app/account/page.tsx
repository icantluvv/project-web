"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Register } from "../lib/registerUser";
import { Login } from "../lib/loginUser";

const Account = () => {
    const [show, setShow] = useState("none");
    const [showReg, setShowReg] = useState("flex");
    const [showLog, setShowLog] = useState("none");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function deleteToken() {
        localStorage.removeItem("token");
        window.location.reload();
    }
    function closeAuth() {
        setShow("none");
    }

    function openAuth() {
        setShow("flex");
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

    const [showSign, setShowSign] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setShowSign(true);
        } else {
            setShowSign(false);
        }
    }, []);

    const [showForm, setShowForm] = useState(false);

    function showFormFunction() {
        if (showForm == false) {
            setShowForm(true);
            return;
        }
        setShowForm(false);
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
        <div className="w-full min-h-[40em] flex justify-center items-center">
            {showSign ? (
                <div className="w-full flex justify-center items-center flex-col">
                    <h1>Вы не вошли в аккаунт</h1>
                    <button
                        onClick={openAuth}
                        className="mt-[2em] text-white pb-[0.5em] pt-[0.5em] rounded-[10px] active:bg-[#204D8B] bg-[#4798DE] pl-[2em] pr-[2em]"
                    >
                        Войти
                    </button>
                    {/* Окно регистрации */}
                    <div
                        style={{ display: `${show}` }}
                        className="flex flex-col justify-center items-center bg-backAuth/0 absolute w-full h-full z-50"
                    >
                        {/* FORM 1 */}
                        <form
                            style={{ display: `${showLog}` }}
                            className="w-[90%] h-[50%] min-w-[300px] max-h-[600px] md:w-3/12 md:h-4/6 flex relative flex-col bg-white rounded-xl items-center border-2"
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
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-5/6 pt-2 pb-2  pl-2 rounded-lg pr-2 bg-white mb-3  border-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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

                        {/* FORM 2 */}
                        <form
                            style={{ display: `${showReg}` }}
                            className="w-[90%] h-[50%] min-w-[300px] max-h-[600px] md:w-3/12 md:h-4/6 flex relative flex-col bg-white rounded-xl items-center border-2"
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
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-5/6 pt-2 pb-2  pl-2 rounded-lg pr-2 bg-white mb-3  border-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                    {/* Окно регистрации закончилось */}
                </div>
            ) : (
                <div className="w-full min-h-[35em] flex flex-col justify-center items-center">
                    Account page
                    <button
                        className="mt-[2em] pb-[0.5em] pt-[0.5em] rounded-[10px] text-white active:bg-[#204D8B] bg-[#4798DE] pl-[2em] pr-[2em]"
                        onClick={deleteToken}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            )}
        </div>
    );
};

export default Account;
