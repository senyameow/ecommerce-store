import React from 'react'
import { Billboard } from '@/types'

interface BillboardProps {
    billboard: Billboard
}

const Billboard = ({ billboard }: BillboardProps) => {
    return (
        <div className='p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl'>
            <div className='relative rounded-xl overflow-hidden aspect-square bg-cover md:aspect-[2.4/1]' style={{ backgroundImage: `url(${billboard.image_url})` }}>
                <div className='w-full h-full flex items-center justify-center text-center gap-y-8'>
                    <div className='font-bold text-2xl md:text-4xl lg:text-6xl xl:text-8xl text-white max-w-xs lg:max-w-[500px]'>
                        {billboard.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard