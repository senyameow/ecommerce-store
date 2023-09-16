import Link from 'next/link'
import React from 'react'
import Container from './ui/Container'
import MainNav from './ui/MainNav'
import getCategories from '@/actions/get-categories'

export const revalidate = 0

const Navbar = async () => {

    const categories = await getCategories()

    return (
        <div className='border-b'>
            <Container>
                <div className='flex items-center gap-4 relative px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 h-16'>
                    <Link href={'/'} className='uppercase font-extrabold text-xl'>store</Link>
                    <MainNav categories={categories} />
                </div>
            </Container>
        </div>
    )
}

export default Navbar