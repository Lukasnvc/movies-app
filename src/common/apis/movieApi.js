import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.MOVIE_API_KEY;

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});
