import { Category, Color } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_COLORS}`
const storeId = `${process.env.NEXT_PUBLIC_STOREID}`

const getColors = async (): Promise<Color[]> => {

    const full_url = `${url}${storeId}`

    const res = await fetch(full_url)

    return res.json()
}

export default getColors