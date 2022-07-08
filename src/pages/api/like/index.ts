import db from "@utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FirebaseFirestore.DocumentData>
) {
  try {
    const { id } = await JSON.parse(req.body);
    const movieDoc = await db.collection("movies").doc(id).get();
    const movie = movieDoc.data();
    const count = (movie?.likes || 0) + 1;
    await db.collection("movies").doc(id).update({ likes: count });

    res.status(200).json({ likes: count });
  } catch {
    res.status(400).end();
  }
}
