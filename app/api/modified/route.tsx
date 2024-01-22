import fs from 'fs';

export async function GET(request: Request) {
    const filePath = './data/heroes.ts';

    try {
        const stats = fs.statSync(filePath);
        const lastModifiedDate = stats.mtime.toLocaleString();
        return Response.json({ lastModifiedDate });
    } catch (error) {
        return Response.json({ lastModifiedDate: 'Err' });
    }
}