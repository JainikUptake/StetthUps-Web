// import axios from "axios";
// import Swal from "sweetalert2";
// import { TOKEN } from "../constants";

// const baseURL = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "https://api.propadel.co.in",
// });

// baseURL.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(TOKEN);
//     if (token) {
//       config.headers["Authorization"] = `${token}`;
//     }
//     // Set CORS headers if needed
//     config.headers["Access-Control-Allow-Origin"] = true;
//     config.headers["Access-Control-Allow-Methods"] =
//       "GET, POST, PUT, DELETE, OPTIONS";
//     config.headers["Access-Control-Allow-Headers"] =
//       "Content-Type, Authorization";
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// baseURL.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // console.log(error , "error here")
//     // Check if the error is due to an expired token
//     if (
//       error.response &&
//       (error.response.status === 401 ||
//         error.response.status === 498 ||
//         error.response.status === 404)
//     ) {
//       const errorMessage = error.response.data.message;

//       if (errorMessage.includes("Token Expired")) {
//         const result = await Swal.fire({
//           icon: "error",
//           title: "Session Timeout",
//           text: "Your session has expired. Please log in again.",
//           confirmButtonText: "OK",
//           cancelButtonText: "Cancel",
//           allowOutsideClick: false,
//         });

//         if (result.isConfirmed) {
//           localStorage.clear();
//           window.location.href = "/";
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default baseURL;
