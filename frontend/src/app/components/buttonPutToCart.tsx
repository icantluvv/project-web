"use client";
import React from "react";
import { useRouter } from "next/navigation";

const buttonPutToCart = ({ prodId }: any) => {
    const router = useRouter();

    function putItemToCart() {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push(`/account`);
            return;
        }

        fetch("http://127.0.0.1:7777/api/cart", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemId: prodId,
                quantity: 1,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ошибка при отправке запроса");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Успешный ответ:", data);
                // Обработка успешного ответа от сервера
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    }
    return (
        <button
            onClick={putItemToCart}
            className="pt-2 hover:bg-[#24ADC5]  active:bg-[#205290] pb-2 mb-[1em] mt-[1em] pl-4 pr-4 font-[16px] rounded-md text-white bg-[#4798DE]"
        >
            В корзину
        </button>
    );
};

export default buttonPutToCart;

// export default function ProductButton({ card, choose }: any) {
//     const goToCart = (productId: number, choose: number) => {
//         const startDateInput = document.getElementById(
//             "first_date"
//         ) as HTMLInputElement;
//         const endDateInput = document.getElementById(
//             "second_date"
//         ) as HTMLInputElement;

//         const startDate = startDateInput.value;
//         const endDate = endDateInput.value;

//         if (!startDate || !endDate) {
//             alert("Пожалуйста, выберите обе даты");
//             return;
//         }

//         fetch("http://127.0.0.1:7777/api/cart/addProductToCart", {
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 productId: productId,
//                 startDate: startDate,
//                 endDate: endDate,
//                 choose: choose,
//             }),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Ошибка при отправке запроса");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Успешный ответ:", data);
//                 // Обработка успешного ответа от сервера
//             })
//             .catch((error) => {
//                 console.error("Ошибка:", error);
//             });
//     };

//     return (
//         <button
//             onClick={() => goToCart(card.id, choose)}
//             className={styles.button_select}
//         >
//             Выбрать
//         </button>
//     );
// }
