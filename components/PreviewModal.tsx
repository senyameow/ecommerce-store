'use client'

import React from 'react'
import { Modal } from './ui/Modal'
import { useModalStore } from '@/hooks/use-modal-store'
import Galery from './Galery'
import ProductInfo from './ProductInfo'

const PreviewModal = () => {

    const { isOpen, onClose, data } = useModalStore()

    if (!data) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='grid grid-cols-1 w-full items-start sm:grid-cols-5 gap-8'>
                <div className='sm:col-span-2'>
                    <Galery images={data?.Image} />
                </div>
                <div className='sm:col-span-3'>
                    <ProductInfo product={data} />
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModal