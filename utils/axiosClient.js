import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  // headers: { "X-Custom-Header": "foobar" },
});

export default axiosClient;
