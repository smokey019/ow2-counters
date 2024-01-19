'use client'
import Image from 'next/image'
import MainLayout from "@/components/MainLayout";
import heroes from "@/data/heroes.json";
import { HeroProps } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [heroData, setHeroData] = useState<HeroProps>()
  const [selectedRole, setSelectedRole] = useState<string | undefined>("all"); // State to store selected role
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(heroes); // State to store filtered heroes based on role

  const handleRoleSelect = (role: string) => {
    setHeroData(undefined)
    setSelectedRole(role);

    // If no role is selected, reset to show all heroes
    if (role === 'all') {
      setFilteredHeroes(heroes);
      return;
    }

    // Filter heroes based on the selected role
    const filtered = heroes.filter(hero => hero.role === role);
    setFilteredHeroes(filtered);
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
      <div className='mb-12 px-20 rounded-xl'>
        <div className='flex justify-center space-x-4 mt-8 font-semibold'>
          <RoleSelect role="all" />
          <RoleSelect role="tank" />
          <RoleSelect role="support" />
          <RoleSelect role="damage" />
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap mt-8">
          {filteredHeroes.map((hero: HeroProps) => (
            <div key={hero.id} className={`w-14 h-14 skew-x-[20deg] overflow-hidden transition-transform transform hover:scale-110 border-2 ${heroData?.id === hero.id ? 'border-accent' : 'border-lightgray'} hover:border-accent shadow-lg shadow-black/10 rounded-lg`}>
              <Image
                onClick={() => setHeroData(hero)} 
                className={`object-cover -skew-x-[30deg]`} 
                src={`/images/heroes/${hero.key}.png`} 
                alt={hero.name}
                width={56}
                height={56}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-2xl text-center">Selected: <span>{heroData ? heroData.name : "None"}</span></p>
    </MainLayout>
  );
}
