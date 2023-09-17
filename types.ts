export interface Billboard {
    id: string;
    label: string;
    image_url: string;
}

export interface Category {
    id: string;
    label: string;
    Billboard: Billboard
    billboardId: string;
    storeId: string;
    created_at: string
    updated_at: string
}

export interface Product {
    id: string;
    label: string;
    Category: Category;
    price: string;
    Image: Image[];
    isFeatured: boolean;
    Size: Size;
    Color: Color;
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