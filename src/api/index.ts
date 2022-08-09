import axios from 'axios';

const apiBase = process.env.REACT_APP_API_BASE;

export const getMenu = async function () {
  const response = await axios.get(`${apiBase}/menu`, {});
  return response.data;
};

export const getSections = async function () {
  const response = await axios.get(`${apiBase}/sections`, {});
  return response.data;
};

export const getItems = async function () {
  const response = await axios.get(`${apiBase}/items`, {});
  return response.data;
};
