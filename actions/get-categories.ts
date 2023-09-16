import { Category } from "@/types"

const url = `${process.env.NEXT_PUBLIC_API_CATEGORIES}`

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(url)

    return res.json()
}

export default getCategories