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
    images: Image[];
    isFeatured: boolean;
    size: Size;
    color: Color;
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    value: string;
    label: string;
}

export interface Color {
    id: string;
    value: string;
    label: string;
}