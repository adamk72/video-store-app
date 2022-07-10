import db from "@utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  try {
    if (method === "GET" && id) {
      const movieDoc = await db
        .collection("movies")
        .doc(id as string)
        .get();
      const movie = movieDoc.data();

      res.status(200).json({ movie: movie });
    }
  } catch (e) {
    res.status(400).end();
  }
}
