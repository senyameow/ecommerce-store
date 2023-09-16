import { formatter } from '@/lib/utils'
import React from 'react'

interface CurrencyProps {
    data: string
}

const Currency = ({ data }: CurrencyProps) => {
    return (
        <div className='font-bold text-md'>
            {formatter.format(Number(data))}
        </div>
    )
}

export default Currency