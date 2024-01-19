import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({}: Props) {
    return (
        <header className='bg-lightgray/15'>
            <div className='flex justify-between items-center py-4 w-1/2 mx-auto'>
                <h1 className='font-semibold text-2xl text-accent'>
                    OW2<span className='text-white font-normal ml-1'>Counters</span>
                </h1>
                <nav className='space-x-6'>
                    <Link href="/" className='font-semibold hover:text-accent'>
                        Home
                    </Link>
                    <Link href="/tiers" className='font-semibold hover:text-accent'>
                        Tiers
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header