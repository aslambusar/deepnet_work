import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getMenus = async () => {
  const response = await axios.get(`${API_URL}/menus`);
  return response.data;
};

export const getMenuItems = async (menuId) => {
  const response = await axios.get(`${API_URL}/menus/${menuId}/items`);
  return response.data;
};
