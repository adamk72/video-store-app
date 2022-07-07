import db from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FirebaseFirestore.DocumentData>
) {
  try {
    const movies = await db.collection("movies").get();
    const moviesData = movies.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ moviesData });
  } catch (e) {
    res.status(400).end();
  }
}
