export async function GetCart(): Promise<Cart[]> {
    const response = await fetch("http://127.0.0.1:7777/api/cart", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "same-origin",
    });

    const data = await response.json();
    // console.log(data);

    const Cart: Cart[] = data.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        itemId: {
            id: item.itemId.id,
            image: item.itemId.image,
            name: item.itemId.name,
            description: item.itemId.description,
            price: item.itemId.price,
            categoryId: {
                id: item.itemId.categoryId.id,
                name: item.itemId.categoryId.name,
            },
        },
    }));

    return Cart;
}
