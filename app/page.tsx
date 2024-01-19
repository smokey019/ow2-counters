'use client'
import Image from 'next/image'
import MainLayout from "@/components/MainLayout";
import { heroes } from '@/data/heroes'
import { HeroCountersProps, HeroProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const hero_param = searchParams.get('hero')
  const [heroData, setHeroData] = useState<HeroProps | null>()
  const [selectedRole, setSelectedRole] = useState<string>("all"); // State to store selected role
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(heroes); // State to store filtered heroes based on role

  useEffect(() => {
    const found_hero = heroes.find(hero => hero.key === hero_param)
    if(!found_hero) return
    setHeroData(found_hero)
    setSelectedRole(found_hero.role)
  }, [hero_param])

  const handleRoleSelect = (role: string) => {
    setHeroData(null)
    setSelectedRole(role);

    // If no role is selected, reset to show all heroes
    if (role === 'all') {
      setSelectedRole("all")
      setFilteredHeroes(heroes);
      return;
    }

    // Filter heroes based on the selected role
    //const filtered = heroes.filter(hero => hero.role === role);
    //setFilteredHeroes(filtered);
  }

  const handleHeroSelect = (hero: HeroProps) => {
    setHeroData(hero)
    setSelectedRole(hero.role)
  }

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
    <MainLayout>
      <div className='bg-lightgray/15'>
        <div className='w-1/2 mx-auto px-20 py-14'>
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
      </div>
      <div className='py-4 border-b border-t border-accent/35'>
        <h1 className='text-center text-4xl font-semibold'>
          {heroData ? heroData.name : "Pick a hero!"}
        </h1>
      </div>
      <div className='w-1/2 mx-auto flex justify-center space-x-12 h-96 py-14'>
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
    </MainLayout>
  );
}
