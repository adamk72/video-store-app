/* eslint-disable @next/next/no-img-element */
import FireSymbol from "public/images/fire.svg";
import HeartSymbol from "public/images/heart.svg";
import LikeSymbol from "public/images/like.svg";

import { useEffect, useState } from "react";

const iconVariants = [
  { threshold: -1, icon: <LikeSymbol className="h-6 w-6 text-sky-700" /> },
  { threshold: 13, icon: <HeartSymbol className="h-8 w-8 text-pink-400" /> },
  { threshold: 21, icon: <FireSymbol className="h-12 w-12 text-orange-600" /> },
];

/**
 * @returns an icon based on the number of likes applied to the movie.
 */
const Licon = ({ count }: { count: number }) => {
  const [effect, setEffect] = useState(false);
  const variant = iconVariants.reduce((prev, curr) =>
    curr.threshold <= count ? { ...curr } : { ...prev }
  );

  useEffect(() => {
    if (variant.threshold === count) setEffect(true);
  }, [variant, count]);

  return (
    <>
      {variant && (
        <div
          className={`${effect && "animate-wiggle"}`}
          onAnimationEnd={() => setEffect(false)}
        >
          {variant.icon}
        </div>
      )}
    </>
  );
};

export const Likes = ({ count, id }: { count: number; id: string }) => {
  const [likes, setLikes] = useState(count);

  const onClick = async (id: string) => {
    const res = await fetch(`/api/like`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    const data: { likes: number } = await res.json();
    setLikes(data.likes);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={() => onClick(id)}>
        <Licon count={likes} />
      </button>
      <span>{likes}</span>
    </div>
  );
};
