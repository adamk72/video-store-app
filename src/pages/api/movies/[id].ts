import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FirebaseFirestore.DocumentData>
) {
  res.status(400).end();
}
