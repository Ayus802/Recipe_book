import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query = "") => {
  if (!query) {
    return axios.get(`${BASE_URL}/random`, {
      params: {
        apiKey: API_KEY,
        number: 24,
      },
    });
  }

  return axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      number: 24,
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
