'use client'
import CartItem from '@/components/CartItem'
import NoResults from '@/components/NoResults'
import Container from '@/components/ui/Container'
import { useCart } from '@/hooks/use-cart-store'
import React, { useEffect, useState } from 'react'

const CartPage = () => {

    const [isMounted, setIsMounted] = useState(false)

    const { items } = useCart()



    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold py-12'>Shopping Cart</h1>
                    <div className='relative lg:grid lg:grid-cols-12 gap-12'>
                        <div className='col-span-7 flex items-start gap-3'>
                            {items.length === 0 && <NoResults />}
                            <ul className='w-full'>
                                {items.map(item => (
                                    <CartItem item={item} key={item.id} />
                                ))}
                            </ul>
                        </div>
                        <div className='col-span-5 sticky right-0 top-12 border-red-400 border '>
                            summary
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage