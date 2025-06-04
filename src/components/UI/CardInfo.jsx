export const CardInformation = ({ title, count, bg }) => {
  const bgClass =
    {
      green: "bg-accent-green",
      blue: "bg-accent-blue",
      beige: "bg-accent-beige",
      brown: "bg-accent-brown",
      sky: "bg-accent-sky",
    }[bg] || "bg-light-gray";

  return (
    <div
      className={`p-4 rounded-lg shadow-md flex flex-col justify-center gap-2 ${bgClass}`}
    >
      <h2 className="text-secondary font-bold text-4xl">{count}</h2>
      <span className="text-gray-500 text-lg font-semibold">{title}</span>
    </div>
  );
};
