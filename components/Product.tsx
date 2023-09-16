import { Product } from '@/types'
import { Expand, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Currency from './Currency'

interface ProductProps {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {

    console.log(product)

    return (
        <div className='bg-white p-2 border border-neutral-300 rounded-xl gap-2 group relative cursor-pointer '>
            <div className=' relative aspect-square bg-gray-100 rounded-xl mb-3'>
                <Image src={product?.Image?.[0]?.url} alt='product image' fill className='rounded-xl object-cover' />
            </div>
            <div className='opacity-0 group-hover:opacity-100 absolute flex items-center justify-around w-[80%] ml-4 transition top-[50%]'>
                <button className='w-[40px] h-[40px]  rounded-full bg-white flex items-center justify-center border  hover:bg-gray-100 transition'>
                    <Expand className='w-4 h-4' />
                </button>
                <button className='w-[40px] h-[40px]  rounded-full bg-white flex items-center justify-center border  hover:bg-gray-100 transition'>
                    <ShoppingCart className='w-4 h-4' />
                </button>
            </div>

            <p className='font-semibold text-xl'>{product?.label}</p>
            <p className='text-neutral-500'>{product?.Category?.label}</p>

            <div className='pt-2'>
                <Currency data={product?.price} />
            </div>
        </div>
    )
}

export default ProductCard