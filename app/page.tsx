'use client'
import MainLayout from "@/components/MainLayout";
import { heroes } from '@/data/heroes'
import { HeroProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import HeroSelect from '@/components/HeroSelect';
import Counters from '@/components/Counters';

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

  return (
    <MainLayout>
      <HeroSelect 
        handleHeroSelect={handleHeroSelect} 
        handleRoleSelect={handleRoleSelect}
        selectedRole={selectedRole}
        heroData={heroData}
        filteredHeroes={filteredHeroes}
      />
      <Counters heroData={heroData} />
    </MainLayout>
  );
}
