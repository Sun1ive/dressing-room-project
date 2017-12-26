import axios from 'axios';

export const withAuth: Function = (username, password) =>
  axios.create({
    // baseURL: `https://node-room.herokuapp.com/`,
    baseURL: `http://localhost:8081/`,
    responseType: 'json',
    auth: {
      username,
      password,
    },
  });

export const withOutAuth: Function = () =>
  axios.create({
    // baseURL: `https://node-room.herokuapp.com/`,
    baseURL: `http://localhost:8081/`,
    responseType: 'json',
  });
