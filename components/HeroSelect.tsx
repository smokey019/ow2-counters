import { HeroProps } from '@/lib/types'
import React from 'react'
import Image from 'next/image'
import { FaExclamationCircle  } from 'react-icons/fa'

type Props = {
    handleHeroSelect: (hero: HeroProps) => void;
    handleRoleSelect: (role: string) => void;
    selectedRole: string;
    heroData: HeroProps | null;
    filteredHeroes: HeroProps[];
}

function HeroSelect({ 
    handleHeroSelect, 
    handleRoleSelect, 
    selectedRole,
    heroData,
    filteredHeroes
}: Props) {
    const RoleSelect = ({ role }: { role: string }) => (
        <button
            onClick={() => handleRoleSelect(role)}
          className={`flex items-center ${selectedRole === role ? 'bg-accent' : 'bg-lightgray'} px-4 py-2 rounded-lg skew-x-[20deg]`}
        >
            <span className='-skew-x-[20deg]'>
                {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
        </button>
    )

    return (
        <div className='bg-lightgray/15'>
            <div className='w-1/2 mx-auto px-20 pt-14 pb-6'>
                <div className='flex justify-center space-x-4 font-semibold'>
                    <RoleSelect role="all" />
                    <RoleSelect role="tank" />
                    <RoleSelect role="support" />
                    <RoleSelect role="damage" />
                </div>
                <div className="flex justify-center items-center gap-4 flex-wrap mt-8">
                    {filteredHeroes.map((hero: HeroProps) => (
                        <div key={hero.id} className={`fade-in w-16 h-16 skew-x-[20deg] overflow-hidden transition-transform transform hover:scale-110 border-[3px] ${heroData?.id === hero.id ? 'border-accent' : 'border-lightgray'} hover:border-accent shadow-lg shadow-black/10 rounded-lg`}>
                            <Image
                            onClick={() => handleHeroSelect(hero)} 
                            className={`object-cover -skew-x-[30deg] ${selectedRole === 'all' || selectedRole === hero.role ? 'grayscale-0' : 'grayscale opacity-50'}`} 
                            src={`/images/heroes/${hero.key}.png`} 
                            alt={hero.name}
                            loading='lazy'
                            width={64}
                            height={64}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center text-center text-sm opacity-50 pb-14'>
                <FaExclamationCircle className='h-4 w-4 mr-2' />
                <p>The Overwatch heroes&apos; portraits are the property of Blizzard Entertainment</p>
            </div>
        </div>
    )
}

export default HeroSelect