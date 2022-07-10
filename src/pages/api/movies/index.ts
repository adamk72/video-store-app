import db from "@utils/db";
import { Movie } from "@utils/types";
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ id: string }>
) {
  try {
    if (req.method === "POST") {
      const movie = JSON.parse(req.body) as Movie;
      const doc = {
        ...movie,
        slug: slugify(movie.title, { lower: true }),
        created: new Date().toISOString(),
      };
      const { id } = await db.collection("movies").add(doc);
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}
