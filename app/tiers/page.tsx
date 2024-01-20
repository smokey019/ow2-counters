import MainLayout from '@/components/MainLayout'
import React from 'react'

type Props = {}

function page({}: Props) {
    return (
        <MainLayout>
        <div className='w-1/2 mx-auto'>
            Tiers
        </div>
        </MainLayout>
    )
}

export default page