'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingBag } from 'lucide-react'

const Cart = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className='ml-auto'>
            <Button className='rounded-full px-6'>
                <ShoppingBag className='w-5 h-5' />
                <span className='text-lg font-medium ml-2'>0</span>
            </Button>
        </div>
    )
}

export default Cart