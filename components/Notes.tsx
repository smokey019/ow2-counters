import { HeroProps } from '@/lib/types'
import React from 'react'
import Image from 'next/image'

type Props = {
    hero: HeroProps | null
}

function Notes({ hero }: Props) {
    return (
        <div className='text-center'>
            <div>
                <div key={hero?.id} className='flex justify-center items-center mb-4'>
                    {hero ?
                    <>
                        <Image
                            alt={hero.name ? hero.name : 'Hero name'}
                            src={`/images/heroes/${hero.key}.png`}
                            className='rounded-full mr-4'
                            loading='lazy'
                            width={36}
                            height={36}
                        />
                        <h1 className='text-4xl font-semibold'>{hero.name}</h1>
                    </>
                    : 
                    <div className='flex items-center'>
                        <div className='w-9 h-9 rounded-full bg-lightgray mr-4'/><p className='text-4xl font-semibold'>Hero</p>
                    </div>
                    }
                </div>
                {hero?.notes ? <p className='opacity-50 w-96'>{hero.notes}</p> 
                :
                <div className="flex-1 space-y-4 mt-6 w-80">
                    <div className="h-2 bg-lightgray rounded"></div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="h-2 bg-lightgray rounded col-span-2"></div>
                            <div className="h-2 bg-lightgray rounded col-span-1"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="h-2 bg-lightgray rounded col-span-1"></div>
                            <div className="h-2 bg-lightgray rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Notes