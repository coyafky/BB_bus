import { c } from "vite/dist/node/types.d-aGj9QkWt";

const axios = require("axios");

const API_URL = "http://localhost:3000";

export const getCities = async () => {
  try {
    const response = await axios.get(`${API_URL}/cities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};
export const getRoutes = async (start, end) => {
    try {
      const response = await axios.get(`${API_URL}/routes`, {
        params: {
          start,
          end
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching routes:', error);
      return [];
    }
}