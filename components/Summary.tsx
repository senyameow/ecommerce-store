import React, { useEffect } from 'react'
import axios from 'axios'
import { Separator } from './ui/separator'
import { Product } from '@/types'
import { formatter } from '@/lib/utils'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart-store'
import toast from 'react-hot-toast'
import { useSearchParams } from 'next/navigation'

interface SummaryProps {
    items: Product[]
}

const Summary = ({ items }: SummaryProps) => {

    const { removeAll } = useCart()

    const searchParams = useSearchParams()

    const onCheckout = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout${process.env.NEXT_PUBLIC_STOREID}`, { productIds: items.map(item => item.id) })
            window.location = res.data.url
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }

    }

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('order completed')
            removeAll()
        }
        if (searchParams.get('canceled')) {
            toast.error('something went wrong')

        }
    }, [searchParams, removeAll])

    return (
        <div className='lg:col-span-5 border max-h-fit h-fit w-full bg-gray-100 flex flex-col items-start gap-4 rounded-lg'>
            <div className='px-6 py-8 w-full flex flex-col items-start gap-4'>
                <h2 className='font-bold text-xl '>Order Summary</h2>
                <Separator className='w-full' />
                <div className='flex w-full flex-row items-center justify-between font-bold'>
                    <span className='text-lg'>Order Total</span>
                    <span className='text-xl'>{formatter.format(items?.reduce((acc, item) => acc + Number(item.price), 0))}</span>
                </div>
                <div className='w-full'>
                    <Button onClick={onCheckout} className='py-4 rounded-full w-full'>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Summary