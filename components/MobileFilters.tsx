'use client'

import { Color, Size } from '@/types'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'
import Filter from './Filter'

interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {

    const [open, setOpen] = useState(false)

    const onOpen = () => { setOpen(true) }
    const onClose = () => { setOpen(false) }



    return (
        <>
            <Button onClick={onOpen} className='rounded-full w-fit px-4 block lg:hidden'>
                <div className='flex items-center gap-2 text-lg'>
                    Filters
                    <Plus className='w-5 h-5' />
                </div>
            </Button>
            <Dialog as='div' className={`relative z-40 lg:hidden`} open={open} onClose={onClose}>
                <div className='fixed inset-0 opacity-20 bg-black' />

                <div className='fixed inset-0 z-40 flex'>
                    <Dialog.Panel className={`relative max-w-xs w-full h-full ml-auto bg-white shadow-xl py-4 pb-6 px-4 flex flex-col overflow-y-auto`}>
                        <div className='justify-end items-center flex'>
                            <Button onClick={onClose} variant={'ghost'} className=' rounded-full border border-neutral-300'>
                                <X className='' />
                            </Button>

                        </div>
                        <Filter data={sizes} title="Sizes" valueKey="sizeId" />
                        <Filter data={colors} title="Colors" valueKey="colorId" />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters