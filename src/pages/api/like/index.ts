import { getMovie, updateLikes } from "@utils/strapi/serverFetchUtils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = await JSON.parse(req.body);

    const movie = await getMovie(id);
    const count = (movie?.attributes.likes || 0) + 1;

    await updateLikes(id, count);

    res.status(200).json({ likes: count });
  } catch {
    res.status(400).end();
  }
}
