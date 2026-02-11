const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-4 shadow-md">
      <div className="bg-gray-300 h-40 rounded-xl"></div>
      <div className="bg-gray-300 h-4 mt-4 rounded w-3/4"></div>
      <div className="bg-gray-300 h-4 mt-2 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
