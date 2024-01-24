'use client'
import MainLayout from "@/components/MainLayout";
import { heroes } from '@/data/heroes'
import { HeroProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import HeroSelect from '@/components/HeroSelect';
import Counters from '@/components/Counters';
import fetcher from "@/data/fetcher";
import useSWR from "swr";
import Spinner from "@/components/Spinner";

export default function Home() {
  const { data: heroesData, error: heroesError, isLoading } = useSWR(
    "api/heroes",
    fetcher
  )

  const searchParams = useSearchParams();
  const hero_param = searchParams.get('hero')
  const [heroData, setHeroData] = useState<HeroProps | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [filteredHeroes, setFilteredHeroes] = useState<HeroProps[]>(heroesData || []);
  
  useEffect(() => {
    const found_hero = heroes.find(hero => hero.key === hero_param)
    if(!found_hero) return
    handleHeroSelect(found_hero)
  }, [hero_param, heroesData])

  useEffect(() => {
    // Fetch heroes data if it's not available
    if (!heroesData) {
      return;
    }

    // Update filteredHeroes only when heroesData is available
    setFilteredHeroes(heroesData.heroes);
  }, [heroesData])

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
      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <Spinner />
        </div>
      ) : ( 
        <HeroSelect 
          handleHeroSelect={handleHeroSelect} 
          handleRoleSelect={handleRoleSelect}
          selectedRole={selectedRole}
          heroData={heroData}
          filteredHeroes={filteredHeroes}
          updated_at={heroesData.updated_at}
        />
      )}
      <Counters heroData={heroData} />
    </MainLayout>
  );
}
