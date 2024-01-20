import React from 'react'
import Image from 'next/image'
import { HeroProps } from '@/lib/types'

type Props = {
    heroData: HeroProps | null;
}

function Counters({ heroData }: Props) {
    return (
        <div className='w-1/2 mx-auto flex justify-center space-x-12 py-14'>
            <div className='space-y-6'>
                <div className='flex justify-between space-x-20'>
                    <div>
                        <div className='w-fit font-semibold text-xl mb-8 text-accent border-2 border-accent px-6 py-2 rounded-lg skew-x-[20deg]'>
                            <h1 className='-skew-x-[20deg] text-white'>Counters</h1>
                        </div>
                        <div className='space-y-4 pl-3'>
                            {heroData?.counters.length ? heroData.counters.map((counter) => (
                            <div key={counter.id} className='flex items-center'>
                                <Image
                                alt={heroData.name}
                                src={`/images/heroes/${counter.key}.png`}
                                className='rounded-full mr-2'
                                loading='lazy'
                                width={36}
                                height={36}
                                />
                                <p className='font-semibold'>{counter.name}</p>
                            </div>
                            )) : 
                            <div className='flex items-center'>
                                <div className='w-9 h-9 rounded-full bg-lightgray mr-2'/><p className='opacity-50 font-semibold italic'>None</p>
                            </div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className='w-fit font-semibold text-xl mb-8 text-accent border-2 border-accent px-6 py-2 rounded-lg skew-x-[20deg]'>
                            <h1 className='-skew-x-[20deg] text-white'>Countered</h1>
                        </div>
                        <div className='space-y-4 pl-3'>
                            {heroData?.countered_by.length ? heroData.countered_by.map((counter) => (
                            <div key={counter.id} className='flex items-center'>
                                <Image
                                alt={heroData.name}
                                src={`/images/heroes/${counter.key}.png`}
                                className='rounded-full mr-2'
                                loading='lazy'
                                width={36}
                                height={36}
                                />
                                <p className='font-semibold'>{counter.name}</p>
                            </div>
                            )) : 
                            <div className='flex items-center'>
                                <div className='w-9 h-9 rounded-full bg-lightgray mr-2'/><p className='opacity-50 font-semibold italic'>None</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters