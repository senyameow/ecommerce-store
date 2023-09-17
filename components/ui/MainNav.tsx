'use client'
import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Category } from '@/types'

interface MainNavProps {
    categories: Category[]
}

const MainNav = ({ categories }: MainNavProps) => {

    const params = useParams()
    const pathname = usePathname()

    const routes = categories.map(category => ({
        href: `/category/${category.id}`,
        label: `${category.label}`,
        active: pathname === `/category/${category.id}`
    }))

    return (
        <nav className='mx-6 flex items-center gap-4 lg:gap-6'>
            {routes.map(route => (
                <Link key={route.href} href={route.href} className={cn(`text-sm font-medium hover:text-black`, route.active ? `font-semibold text-black` : 'text-neutral-500')}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav