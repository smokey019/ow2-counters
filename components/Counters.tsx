import React from 'react'
import { HeroProps } from '@/lib/types'
import Notes from './Notes';
import { BsExclamationCircle } from "react-icons/bs";
import { Tooltip, Image } from "@nextui-org/react";
import { heroes } from '@/data/heroes'

type Props = {
    heroData: HeroProps | null;
}

function getHeroByKey(key: string) {
    const foundHero = heroes.find(hero => hero.key === key)
    if(foundHero) return foundHero
    // Return null if no hero is found with the given key
    return null;
}

const HoverNotes = ({ children, content }: { children: JSX.Element, content: string }) => {
    if(!content) return children
    return (
        <Tooltip 
        content={content}
        delay={0}
        closeDelay={0}
        className='p-3 rounded-lg bg-lightgray text-sm font-semibold w-56'>
            {children}
        </Tooltip>
    )
}

function Counters({ heroData }: Props) {
    return (
        <div className='border-t border-b border-accent bg-black/10 transition-[height] duration-500 ease-in-out'>
            <div className='w-full lg:w-2/4 mx-auto lg:flex justify-center py-20 lg:space-x-24'>
                <Notes hero={heroData} />
                <div className='lg:flex lg:space-x-12 lg:border-l-2 border-lightgray/25 px-14 lg:px-0 space-y-12 lg:space-y-0'>
                    <div className='lg:pl-24'>
                        <div className='w-fit font-semibold text-xl mb-8 border-2 border-accent px-6 py-1 rounded-lg skew-x-[20deg]'>
                            <h1 className='-skew-x-[20deg] text-white'>Counters</h1>
                        </div>
                        <div className='space-y-4'>
                            {heroData?.counters.length ? heroData.counters.map((counter) => (
                            <HoverNotes key={counter.id} content={counter.notes}>
                                <div className='flex items-center'>
                                    <Image
                                        alt={heroData.name}
                                        src={`/images/heroes/${counter.key}.png`}
                                        className='rounded-full'
                                        loading='lazy'
                                        width={36}
                                        height={36}
                                    />
                                    <p className='ml-2 flex font-semibold select-none'>
                                        {getHeroByKey(counter.key)?.name}
                                        {counter.notes && <BsExclamationCircle className='ml-2' />}
                                    </p>
                                </div>
                            </HoverNotes>
                            )) : 
                            <div className='flex items-center'>
                                <div className='w-9 h-9 rounded-full bg-lightgray mr-2'/><p className='opacity-50 font-semibold italic'>None</p>
                            </div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className='w-fit font-semibold text-xl mb-8 border-2 border-accent px-6 py-1 rounded-lg skew-x-[20deg]'>
                            <h1 className='-skew-x-[20deg] text-white w-fit'>Countered by</h1>
                        </div>
                        <div className='space-y-4 lg:pl-3'>
                            {heroData?.countered_by.length ? heroData.countered_by.map((counter) => (
                            <HoverNotes key={counter.id} content={counter.notes}>
                                <div className='flex items-center'>
                                    <Image
                                        alt={heroData.name}
                                        src={`/images/heroes/${counter.key}.png`}
                                        className='rounded-full'
                                        loading='lazy'
                                        width={36}
                                        height={36}
                                    />
                                    <p className='ml-2 flex font-semibold select-none'>
                                        {getHeroByKey(counter.key)?.name} 
                                        {counter.notes &&
                                            <BsExclamationCircle className='ml-2' />
                                        }
                                    </p>
                                </div>
                            </HoverNotes>
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