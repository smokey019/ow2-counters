import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from './Footer'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div>
            <Header />
            <main className='w-1/2 mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout