export const SecondaryButton = ({
  text,
  onClick,
  type = "button",
  active = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200
        flex items-center justify-center gap-2 border shadow-sm
        ${
          active
            ? "bg-primary text-white border-primary"
            : "bg-white text-secondary border-gray-300 hover:bg-primary hover:text-white"
        }`}
    >
      {text}
    </button>
  );
};
