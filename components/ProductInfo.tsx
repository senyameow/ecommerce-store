'use client'
import { Product } from '@/types'
import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import Currency from './Currency'
import { useCart } from '@/hooks/use-cart-store'

interface ProductInfoProps {
    product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {

    const { addItem } = useCart()

    return (
        <div className='flex flex-col items-start space-y-6'>
            <h2 className='text-4xl font-extrabold '>{product.label}</h2>
            <Currency size='2xl' data={product.price} />
            <Separator />
            <div className='flex flex-row items-center space-x-4'>
                <span className='font-bold text-xl'>Size:</span>
                <span className='text-xl font-semibold'>{product.Size.value}</span>
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <span className='font-bold text-xl'>Color:</span>
                <span className='text-xl font-semibold'>< div className="flex items-center gap-2 w-6 h-6" >
                    <div className={`w-6 h-6 rounded-full border border-black`} style={{ backgroundColor: product.Color.value as string }} />
                </div ></span>
            </div>
            <Button onClick={() => addItem(product)} className='rounded-full p-6'>
                <div className='text-lg'>
                    Add To Cart
                </div>
                <ShoppingCart className='w-4 h-4 ml-2' />
            </Button>
        </div>
    )
}

export default ProductInfo