import axios from 'axios';

const baseURL = `https://62d7cc4849c87ff2af3d179c.mockapi.io/api/v1/stickers`;

export const getStickers = () => {
  return axios.get(baseURL);
};

export const addSticker = (sticker) => {
  return axios.post('/');
};

export const updateSticker = (id) => {
  return axios.put(`/${id}`);
};

export const removeSticker = (id) => {
  return axios.delete(`/${id}`);
};
