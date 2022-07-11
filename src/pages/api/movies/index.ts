import { addMovie } from "@utils/strapi/serverFetchUtils";
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { title } = JSON.parse(req.body);
      const id = await addMovie({
        title,
        slug: slugify(title, { lower: true }),
      });
      res.status(200).json({ id });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
