export async function getProduct(): Promise<Product[]> {
    const response = await fetch("http://127.0.0.1:7777/api/product", {
        cache: "no-store",
        credentials: "same-origin",
    });
    const data = await response.json();

    const Product: Product[] = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        description: item.description,
        price: item.price,
        // categoryId: {
        //     id: item.categoryId.id,
        //     name: item.categoryId.name,
        // },
    }));

    return Product;
}
