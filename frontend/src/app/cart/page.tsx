"use client";
import React, { useEffect, useState } from "react";
import CartItem from "./cartItem";
import { useRouter } from "next/navigation";

interface Cart {
    id: number;
    item: Item;
    quantity: number;
}
interface Item {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

const Cart = () => {
    const [cart, setCart] = useState<Cart[]>([]);
    const router = useRouter();
    if (!localStorage.getItem("token")) {
        router.push(`/account`);
    }

    useEffect(() => {
        async function fetchCart() {
            try {
                const response = await fetch("http://127.0.0.1:7777/api/cart", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                    credentials: "same-origin",
                });

                setCart(await response.json());
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        }
        fetchCart();
    }, []);

    console.log(cart[1]);

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + item.item.price * item.quantity;
        }, 0);
    };

    return (
        <div className="w-full flex justify-center flex-col items-center h-full min-h-[40em]">
            <h1 className="text-[30px] mt-[2em] mb-[1em]">Корзина</h1>

            <div className="lg:flex-row flex w-full xxs:flex-col-reverse lg:items-start items-center justify-center">
                <div className="lg:w-[60%] xxs:flex xxs:items-center xxs:justify-center flex sm:w-full flex-wrap sm:justify-center lg:justify-start">
                    {cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
                <div className="bg-[#F1F2F6] xxs:mb-[2em] lg:mb-[0em] lg:relative  xxs:w-[90%] p-[1em] flex items-start lg:min-w-[300px] flex-col items-center justify-start rounded-[10px] lg:max-w-[400px] lg:w-[25%] lg:h-[300px]">
                    <div className="w-full flex justify-center">
                        <h1 className=" text-center mt-[1em]">Корзина</h1>
                    </div>
                    <div className="w-[95%] mt-[2em]">
                        <p>В вашей корзине товаров на:</p>
                        <p className="text-[28px]">{calculateTotalPrice()}р</p>
                    </div>
                    <div className="w-full mb-[1em] mt-[1em] flex justify-center">
                        <input
                            type="text"
                            className="w-[95%] pl-[10px] rounded-[10px] pt-[0.5em] pb-[0.5em]"
                            placeholder="Введите купон"
                        />
                    </div>

                    <div className="w-[95%] flex justify-around">
                        <button
                            type="button"
                            className="bg-[#4798DE] w-[40%] text-white  rounded-[5px]  pt-[0.5em] pb-[0.5em]"
                        >
                            Оплатить
                        </button>
                        <button
                            type="button"
                            className="bg-[#15244F] w-[40%] text-white  rounded-[5px] pt-[0.5em] pb-[0.5em]"
                        >
                            Очистить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
