import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { password ,username } = req.body;

  if (password === process.env.APP_ADMIN_PASSWORD && username === process) {
    // Password matches, proceed to create session or token
    return res.status(200).json({ success: true, message: "Authentication successful" });
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}