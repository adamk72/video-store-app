/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const iconVariants = [
  { name: "like", threshold: -1, size: "24px" },
  { name: "heart", threshold: 13, size: "36px" },
  { name: "fire", threshold: 21, size: "48px" },
];

/**
 * @returns an icon based on the number of likes applied to the movie.
 */
const LikeIcon = ({ count }: { count: number }) => {
  const [effect, setEffect] = useState(false);
  const variant = iconVariants.reduce((prev, curr) =>
    curr.threshold <= count ? { ...curr } : { ...prev }
  );

  useEffect(() => {
    if (variant.threshold === count) setEffect(true);
  }, [variant, count]);

  return (
    <img
      src={`/images/${variant.name}.svg`}
      alt={`${variant.name} icon`}
      height={variant.size}
      width={variant.size}
      className={`${effect && "animate-wiggle"}`}
      onAnimationEnd={() => setEffect(false)}
    />
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
        <LikeIcon count={likes} />
      </button>
      <span>{likes}</span>
    </div>
  );
};
