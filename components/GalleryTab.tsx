import React, { useEffect, useState } from 'react'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab = ({ image }: GalleryTabProps) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Tab className={`rounded-lg cursor-pointer flex items-center justify-center w-full h-full relative`}>
            {({ selected }) => (
                <div>
                    <Image src={image.url} alt='product picture ' className='object-cover object-center' width={1000} height={1000} />
                    <span className={cn(`absolute inset-0 rounded-lg ring-2 ring-offset-2`, selected ? 'ring-black' : 'ring-transparent')} />
                </div>
            )}
        </Tab>
    )
}

export default GalleryTab