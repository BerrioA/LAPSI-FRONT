export const HeadPage = ({ page, description }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-secondary">{page}</h1>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  );
};


