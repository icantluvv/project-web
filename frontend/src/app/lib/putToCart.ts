export function putToCart(productId) {
    // productId: number,
    // username: string,
    // password: string
    fetch("http://127.0.0.1:7777/api/cart/addProductToCart", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId: 1,
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
