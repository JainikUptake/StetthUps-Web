import axios from "axios";
import Swal from "sweetalert2";


const baseURL = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

baseURL.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseURL.interceptors.response.use(
  (response) => response,
  async (error) => {
    // console.log(error , "error here")
    // Check if the error is due to an expired token
    if (
      error.response &&
      (error.response.status === 401 ||
        error.response.status === 498 ||
        error.response.status === 404)
    ) {
    //   const errorMessage = error.response.data.message;

    
    }
    return Promise.reject(error);
  }
);

export default baseURL;
