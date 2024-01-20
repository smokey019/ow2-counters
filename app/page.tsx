'use client'
import MainLayout from "@/components/MainLayout";
<<<<<<< HEAD
import { heroes } from '@/data/heroes'
import { HeroProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import HeroSelect from '@/components/HeroSelect';
import Counters from '@/components/Counters';
import Notes from "@/components/Notes";
=======
import { heroes } from '@/data/heroes';
import { HeroProps } from "@/lib/types";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
>>>>>>> 20832f2c8eabba441a4d20b91b0bcd6a076fb155

export default function Home() {
  const searchParams = useSearchParams();
  const hero_param = searchParams.get('hero')
  const [heroData, setHeroData] = useState<HeroProps | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(heroes);

  useEffect(() => {
    const found_hero = heroes.find(hero => hero.key === hero_param)
    if(!found_hero) return
    handleHeroSelect(found_hero)
  }, [hero_param])

  const handleRoleSelect = (role: string) => {
    setHeroData(null)
    setSelectedRole(role);

    if (role === 'all') {
      setSelectedRole("all")
      setFilteredHeroes(heroes);
      return;
    }
  }

  const handleHeroSelect = (hero: HeroProps) => {
    setHeroData(hero)
    setSelectedRole(hero.role)
  }

  const PickAHero = () => (
    <div className='py-4 border-b border-t border-accent/35'>
      <h1 className='text-center text-4xl font-semibold'>
        {heroData ? heroData.name : "Pick a hero!"}
      </h1>
    </div>
  )

  return (
    <MainLayout>
<<<<<<< HEAD
      <HeroSelect 
        handleHeroSelect={handleHeroSelect} 
        handleRoleSelect={handleRoleSelect}
        selectedRole={selectedRole}
        heroData={heroData}
        filteredHeroes={filteredHeroes}
      />
      <PickAHero />
      <Counters heroData={heroData} />
      <Notes notes={heroData?.notes} />
=======
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
                <h1 className='-skew-x-[20deg] text-white'>Countered By</h1>
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
>>>>>>> 20832f2c8eabba441a4d20b91b0bcd6a076fb155
    </MainLayout>
  );
}
