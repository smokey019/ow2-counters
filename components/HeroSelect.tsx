import { HeroProps } from '@/lib/types'
import React, { useState } from 'react'
import { Image } from '@nextui-org/react'
import { heroes } from '@/data/heroes'
import { MdOutlineInfo, MdOutlineUpdate } from "react-icons/md";
import NextImage from 'next/image'

type Props = {
    handleHeroSelect: (hero: HeroProps) => void;
    handleRoleSelect: (role: string) => void;
    selectedRole: string;
    heroData: HeroProps | null;
    filteredHeroes: HeroProps[];
    updated_at: string
}

function HeroSelect({ 
    handleHeroSelect, 
    handleRoleSelect, 
    selectedRole,
    heroData,
    filteredHeroes,
    updated_at
}: Props) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const RoleSelect = ({ role }: { role: string }) => (
        <button
            onClick={() => handleRoleSelect(role)}
            className={`flex items-center ${selectedRole === role ? 'bg-accent' : 'bg-lightgray'} px-4 py-2 rounded-lg skew-x-[20deg] w-full lg:w-fit`}
        >
            <span className='-skew-x-[20deg]'>
                {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
        </button>
    )

    const handleSearchInputChange = (event: { target: { value: string } }) => {
        const query = event.target.value;
        setSearchQuery(query);
        
        const filteredHeroes = heroes.filter(hero =>
            hero.key.toLowerCase().includes(query.toLowerCase())
        );

        if(filteredHeroes.length > 0) {
            handleHeroSelect(filteredHeroes[0])
        }

        if (query.trim() === "") {
            handleRoleSelect("all")
        }
    };
    
    const handleSubmit = (event
        : { preventDefault: () => void }) => {
        event.preventDefault();
        const filteredHeroes = heroes.filter(hero =>
            hero.key.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if(filteredHeroes.length > 0) {
            handleHeroSelect(filteredHeroes[0])
        }
    };

    return (
        <div className='bg-lightgray/15 shadow-xl shadow-accent/10'>
            <div className='lg:w-1/2 mx-auto px-20 pt-14 pb-6'>
                <div className='lg:flex justify-center items-center lg:space-x-4 font-semibold space-y-3 lg:space-y-0'>
                    <RoleSelect role="all" />
                    <RoleSelect role="tank" />
                    <RoleSelect role="support" />
                    <RoleSelect role="damage" />
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder='Search...' 
                            className='px-4 py-2 rounded-lg skew-x-[20deg] border-2 border-accent bg-transparent' 
                        />
                    </form>
                </div>
                <div className="flex justify-center items-center gap-4 flex-wrap mt-8">
                    {filteredHeroes.map((hero: HeroProps) => (
                        <div key={hero.id} className={`fade-in w-16 h-16 skew-x-[20deg] overflow-hidden transition-transform transform hover:scale-110 border-[3px] ${heroData?.id === hero.id ? 'border-accent' : 'border-lightgray'} hover:border-accent shadow-lg shadow-black/10 rounded-lg`}>
                            <Image
                            as={NextImage}
                            onClick={() => handleHeroSelect(hero)} 
                            className={`object-cover -skew-x-[30deg] ${selectedRole === 'all' || selectedRole === hero.role ? 'grayscale-0' : 'grayscale opacity-50'}`} 
                            src={`/images/heroes/${hero.key}.png`} 
                            alt={hero.name}
                            width={64}
                            height={64}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-20'>
                <div className='hidden items-center justify-center text-center mt-2 pb-2'>
                    {!updated_at ? 
                        <div className="h-[22px] w-96 rounded-full animate-pulse bg-accent"></div> 
                    : 
                        <p className='flex items-center font-semibold italic opacity-50 text-sm'> <MdOutlineUpdate className='hidden lg:block h-[22px] w-[22px] mr-1' /> Last update: <span className='ml-1'>{updated_at}</span></p>
                    }
                </div>
                <div className='flex items-center justify-center text-center text-sm opacity-50 pb-14'>
                    <MdOutlineInfo  className='hidden lg:block h-[22px] w-[22px] mr-1' />
                    <p>The Overwatch heroes&apos; portraits are the property of Blizzard Entertainment</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSelect