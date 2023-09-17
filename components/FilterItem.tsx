'use client'
import { Color, Size } from '@/types'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

import qs from 'query-string'

interface FilterItemProps {
    item: Size | Color
    valueKey: string;
}

const FilterItem = ({ item, valueKey }: FilterItemProps) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    const current = qs.parse(searchParams.toString())

    const query = {
        ...current,
        [valueKey]: item.id
    }

    const url = qs.stringifyUrl({
        url: pathname,
        query
    })

    console.log(url)


    return (
        <Link href={url} className='px-2 py-3 border rounded-md text-lg font-bold'>
            {item.label}
        </Link>
    )
}

export default FilterItem