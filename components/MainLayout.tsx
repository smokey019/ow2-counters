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
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout