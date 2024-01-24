import fs from 'fs';
import { heroes } from '@/data/heroes';
import { HeroProps } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

export function GET(request: Request) {
    const filePath = './data/heroes.ts';
    
    try {
        let lastModifiedDate: string | undefined;

        // Use try-catch block to handle file not found or other errors
        try {
            const stats = fs.statSync(filePath);
            lastModifiedDate = stats.mtime.toLocaleString();
        } catch (error) {
            // Handle file not found or other errors
            console.error('Error getting file stats:', error);
        }

        const heroesData: HeroProps[] = heroes;
        
        if (lastModifiedDate) {
            return Response.json({ updated_at: formatDistanceToNow(lastModifiedDate, { addSuffix: true }), heroes: heroesData });
        } else {
            return Response.json({ error: 'Error fetching last modified date or heroes data' });
        }
    } catch (error) {
        return Response.json({ error: 'Error fetching heroes data' });
    }
}