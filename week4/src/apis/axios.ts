import axios from "axios";

export const serverAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
