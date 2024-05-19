interface Category {
    id: number;
    image: string;
    name: string;
}
interface CategoryProps {
    category: Category;
}

interface Promo {
    id: number;
    image: string;
}
interface PromoProps {
    promo: Promo;
}

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    categoryId: {
        id: number;
        name: string;
    };
}

interface ProductProps {
    product: Product;
}

interface Cart {
    id: number;
    quantity: number;
    itemId: {
        id: number;
        image: string;
        name: string;
        description: string;
        price: number;
        categoryId: {
            id: number;
            name: string;
        };
    };
}

interface CartItemProps {
    item: {
        id: number;
        quantity: number;
        item: {
            id: number;
            image: string;
            name: string;
            description: string;
            price: number;
            category: {
                id: number;
                name: string;
                image: string;
                createdAt: string;
            };
        };
    };
}
