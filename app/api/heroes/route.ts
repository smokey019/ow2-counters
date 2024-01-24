import fs from 'fs';
import { heroes } from '@/data/heroes';
import { HeroProps } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'

export function GET(request: Request) {
    const filePath = './data/heroes.ts';
    const stats = fs.statSync(filePath);
    const lastModifiedDate = stats.mtime.toLocaleString();

    try {
        const heroesData: HeroProps[] = heroes;
        return Response.json({ updated_at: formatDistanceToNow(lastModifiedDate, { addSuffix: true }), heroes: heroesData });
    } catch (error) {
        return Response.json({ error: 'Error fetching heroes data' });
    }
}