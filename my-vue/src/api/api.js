import axios from "axios";

const myApi =  axios.create({
  baseURL: 'http://10.10.0.233:8084/admin/',
  timeout: 10000,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default myApi