export const ThirdButton = ({
  text,
  onClick,
  type = "button",
  active = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200
        flex items-center justify-center gap-2 border shadow-sm
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
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
