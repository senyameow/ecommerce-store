'use client'
import { Image as ImageType } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Tab } from '@headlessui/react'
import GalleryTab from './GalleryTab'

interface GaleryProps {
    images: ImageType[]
}

const Galery = ({ images }: GaleryProps) => {
    return (
        <Tab.Group as='div' className={`flex flex-col-reverse`} >
            <div className='mx-auto mt-6 max-w-2xl hidden sm:block lg:max-w-none'>
                <Tab.List className={`grid grid-cols-4 gap-2`}>
                    {images?.map(image => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
        </Tab.Group>
    )
}

export default Galery