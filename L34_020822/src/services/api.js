import axios from 'axios';

const baseURL = `https://62d7cc4849c87ff2af3d179c.mockapi.io/api/v1/stickers`;

export const getStickers = () => {
  return axios.get(baseURL);
};

export const addSticker = (sticker) => {
  if (sticker) return axios.post(baseURL, sticker);
  return Promise.reject('No sticker found in params');
};

export const updateSticker = (id, description) => {
  if (id) return axios.put(`${baseURL}/${id}`, { description });
  return Promise.reject('No id found in params');
};

export const removeSticker = (id) => {
  if (id) return axios.delete(`${baseURL}/${id}`);
  return Promise.reject('No id found in params');
};
