export interface Billboard {
    id: string;
    label: string;
    image_url: string;
}

export interface Category {
    id: string;
    label: string;
    billboard: Billboard
}

export interface Product {
    id: string;
    label: string;
    category: Category;
    price: string;
    images: string[];

}