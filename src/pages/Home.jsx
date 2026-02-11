import { useEffect, useState } from "react";
import { fetchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import SkeletonCard from "../components/SkeletonCard";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
   const loadRecipes = async () => {
     setLoading(true);
     try {
       const res = await fetchRecipes(query);
      
       console.log("response:", res.data);
      
       const data =
         res.data.results || res.data.recipes || [];
      
       setRecipes(data);
      
     } catch (err) {
       console.log("API Error:", err);
       setRecipes([]);
     }
     setLoading(false);
   };
  
   loadRecipes();
  }    , [query]);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6"
    >
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {loading ? (
          Array(6)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No recipes found.
          </p>
        )}
    </div>


    </motion.div>
  );
};

export default Home;
