import axios from 'axios';

export const withAuth = (username: string, password: number | string) =>
  axios.create({
    baseURL: `https://node-room.herokuapp.com/`,
    // baseURL: `http://localhost:8081/`,
    responseType: 'json',
    auth: {
      username,
      password,
    },
  });

export const withOutAuth = () =>
  axios.create({
    baseURL: `https://node-room.herokuapp.com/`,
    // baseURL: `http://localhost:8081/`,
    responseType: 'json',
  });
