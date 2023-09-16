import { Product as ProductType } from '@/types'
import React from 'react'
import NoResults from './NoResults';
import ProductCard from './Product';

interface ProductListProps {
    products: ProductType[]
    title: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
    return (
        <div className=''>
            <h3 className='font-bold text-3xl border-b mb-4'>{title}</h3>
            {products.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div> : <NoResults />}
        </div>
    )
}

export default ProductList