import axios from "axios";
import Swal from "sweetalert2";

const baseURL = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
// Add a request interceptor
baseURL.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `${token}`;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

baseURL.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error, "error here");
    if (
      error.response &&
      (error.response.status === 401 ||
        error.response.status === 498 ||
        error.response.status === 404)
    ) {
      const errorMessage = error.response.data.message;

      if (errorMessage.includes("Token Expired")) {
        const result = await Swal.fire({
          icon: "error",
          title: "Session Timeout",
          text: "Your session has expired. Please log in again.",
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          allowOutsideClick: false,
        });

        if (result.isConfirmed) {
          localStorage.clear();
          window.location.href = "/";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default baseURL;