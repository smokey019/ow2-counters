import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'

type Props = {}

function Header({}: Props) {
    return (
        <header className='bg-lightgray/15 border-b border-accent shadow-xl shadow-accent/10'>
            <div className='lg:flex justify-between items-center lg:py-4 pt-4 lg:w-1/2 mx-auto'>
                <h1 className='font-bold text-2xl text-accent pl-4 lg:px-0'>
                    OW2<span className='text-white font-normal ml-1'>Counters</span>
                </h1>
                <nav className='lg:hidden space-y-4 flex-none w-full bg-lightgray mt-4 p-4'>
                    <Link href="/" className='flex font-semibold hover:text-accent'>
                        Home
                    </Link>
                    <Link href="/tiers" className='flex font-semibold hover:text-accent'>
                        Tiers
                    </Link>
                    <a href="https://github.com/smokey019/ow2-counters" target="_blank" rel="noopener" className='font-semibold hover:text-accent flex'>
                        <FaGithub className='h-6 w-6 mr-2' /> Source
                    </a>
                </nav>
                <nav className='hidden lg:flex space-x-6 transition-all'>
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