import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, name: 'P1' },
    { id: 2, name: 'P2' },
    { id: 3, name: 'P3' },
  ]);
}
