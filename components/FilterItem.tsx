'use client'
import { Color, Size } from '@/types'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

import qs from 'query-string'
import { cn } from '@/lib/utils'

interface FilterItemProps {
    item: Size | Color
    valueKey: string;
}

const FilterItem = ({ item, valueKey }: FilterItemProps) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    const selectedValue = searchParams.get(valueKey)

    const current = qs.parse(searchParams.toString())

    const query = {
        ...current,
        [valueKey]: item.id
    }

    const url = qs.stringifyUrl({
        url: pathname,
        query
    })



    return (
        <Link href={url} className={cn(`px-2 py-3 border rounded-md text-lg font-bold hover:bg-gray-100 transition`, selectedValue === item.id && 'bg-black text-white hover:bg-black/80 hover:text-gray-100')}>
            {item.label}
        </Link>
    )
}

export default FilterItem