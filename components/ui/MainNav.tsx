'use client'
import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MainNavProps {
    stores: any
}

const MainNav = ({ stores }: MainNavProps) => {

    const params = useParams()
    const pathname = usePathname()

    const routes = stores.map(store => ({
        href: `/category/${store.id}`,
        label: `${store.name}`,
        active: pathname === `/category/${store.id}`
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