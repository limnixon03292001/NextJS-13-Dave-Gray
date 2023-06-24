
//Using On Demand Revalidation
//https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#using-on-demand-revalidation

// http://localhost:3000/api/revalidate?path=/&secret=hello

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token ' })
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true })

}