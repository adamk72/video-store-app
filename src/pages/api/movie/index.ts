import db from "@utils/db";
import { Movie } from "@utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie>
) {
  try {
    const { slug } = req.body;
    const movies = await db.collection("movies").get();
    const entriesData = movies.docs.map((entry) => entry.data());

    if (entriesData.some((entry) => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("movies").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id, slug });
    }
  } catch (e) {
    res.status(400).end();
  }
}
