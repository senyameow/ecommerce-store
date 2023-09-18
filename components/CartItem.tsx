'use client'
import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { useCart } from '@/hooks/use-cart-store'
import { formatter } from '@/lib/utils'
import { Separator } from './ui/separator'

interface CartItem {
    item: Product
}

const CartItem = ({ item }: CartItem) => {

    const { deleteItem } = useCart()

    return (
        <li className='bg-white flex py-6 border-b justify-between gap-4 relative'>
            <div className='w-24 h-24 sm:w-48 sm:h-48 relative rounded-md overflow-hidden'>
                <Image src={item.Image[0].url} alt='product image' className='rounded-md object-cover' fill />
            </div>
            <div className='flex-1 flex  mr-auto fler-row '>
                <div className='flex-1 flex flex-col gap-3 items-start font-bold text-xl'>
                    <p>{item.label}</p>
                    <p>{formatter.format(Number(item.price))}</p>
                </div>
                <div className='flex-[2] ml-auto mr-20 justify-end flex items-center gap-2 text-neutral-500 font-normal text-lg h-fit w-[50%]'>
                    <div className='w-full flex items-center gap-2 text-neutral-500 mr-auto justify-end'>
                        <p>{item.Category.label}</p>
                        <Separator orientation='vertical' className='h-[18px] w-[1.8px]' />
                        <p>{item.Size.label}</p>
                    </div>
                </div>
            </div>
            <div className='absolute right-0 top-4'>
                <Button onClick={() => deleteItem(item.id)} className='rounded-full bg-white border' variant={'ghost'}>
                    <X className='w-4 h-4' />
                </Button>
            </div>
        </li>
    )
}

export default CartItem