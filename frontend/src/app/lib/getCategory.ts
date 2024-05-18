export async function getCategory(): Promise<Category[]> {
    const response = await fetch("http://127.0.0.1:7777/api/category", {
        cache: "no-store",
        credentials: "same-origin",
    });
    const data = await response.json();

    const Category: Category[] = data.map((item: any) => ({
        id: item.id,
        image: item.image,
        name: item.name,
    }));

    return Category;
}
