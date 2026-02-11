import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../services/api";
import { motion } from "framer-motion";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const res = await fetchRecipeDetails(id);
      setRecipe(res.data);
    };
    loadDetails();
  }, [id]);

  if (!recipe)  return <div className="p-10">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 max-w-6xl mx-auto"
    >
      <Link to="/" className="text-orange-500">← Back</Link>

      <h1 className="text-3xl font-bold mt-4">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        className="rounded-2xl mt-6 w-full max-h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {recipe.extendedIngredients.map((item) => (
              <li key={item.id} className="flex gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2"></span>
                {item.original}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Instructions
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: recipe.instructions,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDetails;
