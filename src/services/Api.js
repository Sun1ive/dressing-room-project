import axios from 'axios';

export default () =>
  axios.create({
    // baseURL: `https://node-room.herokuapp.com/`,
    baseURL: `http://localhost:8081/`,
    responseType: 'json',
    auth: {
      username: 'Sunlive',
      password: 'Secret'
    },
  });
