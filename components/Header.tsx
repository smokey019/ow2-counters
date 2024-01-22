import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'

type Props = {}

function Header({}: Props) {
    return (
        <header className='bg-lightgray/15 border-b border-accent shadow-xl shadow-accent/10'>
            <div className='flex justify-between items-center py-4 w-1/2 mx-auto'>
                <h1 className='font-bold text-2xl text-accent'>
                    OW2<span className='text-white font-normal ml-1'>Counters</span>
                </h1>
                <nav className='space-x-6 flex transition-all'>
                    <Link href="/" className='font-semibold hover:text-accent'>
                        Home
                    </Link>
                    <Link href="/tiers" className='font-semibold hover:text-accent'>
                        Tiers
                    </Link>
                    <a href="https://github.com/smokey019/ow2-counters" target="_blank" rel="noopener" className='font-semibold hover:text-accent flex'>
                        <FaGithub className='h-6 w-6 mr-2' /> Source
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header