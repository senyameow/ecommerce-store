import { Product } from "@/types"
import qs from 'query-string'

const url = `${process.env.NEXT_PUBLIC_API_PRODUCT}`
const storeId = `${process.env.NEXT_PUBLIC_STOREID}`



const getProduct = async (id: string): Promise<Product> => {

    const full_url = `${url}${id}/get/?storeId=${storeId}`

    const res = await fetch(full_url)

    return res.json()
}

export default getProduct