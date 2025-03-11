import axios from "axios";

const API_URL = "http://localhost:5000/users";

// Add a user
export const addUser = async (user) => {
  return await axios.post(`${API_URL}/add`, user);
};

// Get all users
export const getUsers = async () => {
  return await axios.get(`${API_URL}/all`);
};
