import { formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface CurrencyProps {
    data: string
}

const Currency = ({ data }: CurrencyProps) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className='font-bold text-md'>
            {formatter.format(Number(data))}
        </div>
    )
}

export default Currency