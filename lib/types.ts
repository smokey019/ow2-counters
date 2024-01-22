export type HeroProps = {
    id: number
    key: string
    name: string
    portrait?: string
    role: string
    counters: HeroCountersProps[]
    countered_by: HeroCountersProps[]
    notes: string
}

export type HeroCountersProps = {
    id: number
    key: string
    notes: string
}