import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-4"
    >
      <img
        src={recipe.image}
        className="rounded-xl h-40 w-full object-cover"
      />
      <h2 className="text-lg font-semibold mt-3">
        {recipe.title}
      </h2>
      <p className="text-sm text-gray-600">
        {recipe.readyInMinutes} mins
      </p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-orange-500 mt-2 inline-block"
      >
        View Details →
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
