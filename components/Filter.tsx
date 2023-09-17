import { Color, Size } from '@/types'
import React from 'react'
import { Separator } from './ui/separator';
import FilterItem from './FilterItem';

interface FilterProps {
    data: Color[] | Size[];
    title: string;
    valueKey: string;
}

const Filter = ({ data, title, valueKey }: FilterProps) => {
    return (
        <div className='flex items-start flex-col w-full mb-3'>
            <p className='font-bold text-2xl mb-3'>{title}</p>
            <Separator />
            <div className='flex flex-wrap items-center gap-2 w-full mt-4'>
                {data.map(item => (
                    <FilterItem valueKey={valueKey} key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Filter