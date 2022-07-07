/* eslint-disable @next/next/no-img-element */

const ICON_DIM = "24px";

const LikeIcon = ({ variant }: { variant: "none" | "like" }) => {
  return (
    <img
      src={`/images/${variant}.svg`}
      alt={variant === "none" ? "No likes yet" : "Thumbs up to like"}
      height={ICON_DIM}
      width={ICON_DIM}
    />
  );
};

export const Likes = ({ count }: { count: number }) => {
  return (
    <div className="flex">
      <LikeIcon variant="like" /> {count ? ` x ${count}` : null}
    </div>
  );
};
