import { Category, Size } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_SIZES}`
const storeId = `${process.env.NEXT_PUBLIC_STOREID}`

const getSizes = async (): Promise<Size[]> => {

    const full_url = `${url}${storeId}`

    const res = await fetch(full_url)

    return res.json()
}

export default getSizes