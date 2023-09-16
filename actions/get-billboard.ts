import { Billboard } from "@/types"

const storeId = `${process.env.NEXT_PUBLIC_STOREID}`
const url = `${process.env.NEXT_PUBLIC_API_BILLBOARD}`


const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${url}${id}/get/${storeId}`)
    console.log(`${url}${id}/get${storeId}`)
    console.log(res)

    return res.json()
}

export default getBillboard