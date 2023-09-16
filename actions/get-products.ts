import { Product } from "@/types"
import qs from 'query-string'

const url = `${process.env.NEXT_PUBLIC_API_PRODUCTS}`

interface Query {
    colorId?: string;
    sizeId?: string;
    categoryId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

    const full_url = qs.stringifyUrl({
        url: url,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
            categoryId: query.isFeatured,
        }
    })

    const res = await fetch(full_url)

    return res.json()
}

export default getProducts