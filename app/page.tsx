'use client'
import Image from 'next/image'
import MainLayout from "@/components/MainLayout";
import { heroes } from '@/data/heroes'
import { HeroCountersProps, HeroProps } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [heroData, setHeroData] = useState<HeroProps | null>()
  const [selectedRole, setSelectedRole] = useState<string>("all"); // State to store selected role
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(heroes); // State to store filtered heroes based on role

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
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-accent/10 py-6'>
        <h1 className='text-center text-4xl font-semibold'>
          {heroData ? heroData.name : "Pick a hero!"}
        </h1>
      </div>
      <div className='w-1/2 mx-auto flex justify-center space-x-12 h-96 py-8'>
        <div className='space-y-6'>
          <div className='flex justify-between space-x-20'>
            <div>
              <h1 className='w-32 font-semibold text-2xl mb-6 text-accent'>Counters</h1>
              <div className='space-y-3'>
                {heroData?.counters.length ? heroData.counters.map((counter) => (
                  <div key={counter.id} className='flex items-center'>
                    <Image
                      alt={heroData.name}
                      src={`/images/heroes/${counter.key}.png`}
                      className='rounded-full mr-2'
                      width={32}
                      height={32}
                    />
                    <p className='font-semibold text-sm'>{counter.name}</p>
                  </div>
                )) : <p className='opacity-50 font-semibold italic'>None</p>}
              </div>
            </div>
            <div>
              <h1 className='w-32 font-semibold text-2xl mb-6 text-accent'>Countered</h1>
              <div className='space-y-3'>
                {heroData?.countered_by.length ? heroData.countered_by.map((counter) => (
                  <div key={counter.id} className='flex items-center'>
                    <Image
                      alt={heroData.name}
                      src={`/images/heroes/${counter.key}.png`}
                      className='rounded-full mr-2'
                      width={32}
                      height={32}
                    />
                    <p className='font-semibold text-sm'>{counter.name}</p>
                  </div>
                )) : <p className='opacity-50 font-semibold italic'>None</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
