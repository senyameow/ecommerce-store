'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/use-cart-store'
import { useRouter } from 'next/navigation'

const Cart = () => {

    const [isMounted, setIsMounted] = useState(false)

    const router = useRouter()

    const { items } = useCart()

    const onClick = () => {
        router.push(`/cart`)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className='ml-auto'>
            <Button onClick={onClick} className='rounded-full px-6'>
                <ShoppingBag className='w-5 h-5' />
                <span className='text-lg font-medium ml-2'>{items.length}</span>
            </Button>
        </div>
    )
}

export default Cart