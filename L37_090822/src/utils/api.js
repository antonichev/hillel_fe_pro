import axios from 'axios';

const baseURL = `https://62d7cc4849c87ff2af3d179c.mockapi.io/api/v1/users`;

export const getUsers = () => {
  return axios.get(baseURL);
};

export const getUser = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

export const addUser = (user) => {
  if (user) return axios.post(baseURL, user);
  return Promise.reject('Incorrect params');
};

export const updateUser = (id, user) => {
  if (id && user) return axios.put(`${baseURL}/${id}`, user);
  return Promise.reject('Incorrect params');
};

export const removeUser = (id) => {
  if (id) return axios.delete(`${baseURL}/${id}`);
  return Promise.reject('Incorrect params');
};
