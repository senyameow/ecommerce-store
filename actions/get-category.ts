import { Category } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_CATEGORY}`
const storeId = `${process.env.NEXT_PUBLIC_STOREID}`

const getCategory = async (id: string): Promise<Category> => {

    const full_url = `${url}${id}/get${storeId}`

    const res = await fetch(full_url)

    return res.json()
}

export default getCategory