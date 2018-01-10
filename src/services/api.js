import axios from 'axios';

export const withHeaders = token =>
  axios.create({
    // baseURL: `https://node-room.herokuapp.com/`,
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: token,
    },
  });

export const withOutAuth = () =>
  axios.create({
    // baseURL: `https://node-room.herokuapp.com/`,
    baseURL: `http://localhost:8081/`,
  });
