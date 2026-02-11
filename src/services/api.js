import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API Key:", API_KEY); // Debugging line to check if the API key is loaded
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query = "") => {
  if (!query) {
    return axios.get(`${BASE_URL}/random`, {
      params: {
        apiKey: API_KEY,
        number: 12,
      },
    });
  }

  return axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      number: 12,
      addRecipeInformation: true,
    },
  });
};
export const fetchRecipeDetails = async (id) => {
  return axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
};
