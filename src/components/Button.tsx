export const Button = ({
  label,
  onClick,
  type = "button",
}: {
  label: string;
  onClick?: VoidFunction;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      className="focus:shadow-outline rounded bg-button-surface py-2 px-4 font-bold text-button hover:bg-button-hover focus:outline-none"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
