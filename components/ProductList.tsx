import { Product as ProductType } from '@/types'
import React from 'react'
import Product from './Product'

interface ProductListProps {
    products: ProductType[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className='flex flex-wrap items-center gap-4'>
            {products.map(product => (
                <Product product={product} />
            ))}
        </div>
    )
}

export default ProductList