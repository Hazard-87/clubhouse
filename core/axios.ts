import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
//   baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export default instance;