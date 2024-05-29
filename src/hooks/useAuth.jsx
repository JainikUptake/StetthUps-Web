// import { useState, useEffect } from "react";

// const useAuth = () => {
//   const [isValidUser, setIsValidUser] = useState(!!localStorage.getItem("token"));
//   useEffect(() => {
//     setIsValidUser(true);
//   }, []);
//   return isValidUser;
// };
// export default useAuth;

import { useState, useEffect } from "react";

const useAuth = () => {
  // const [isValidUser, setIsValidUser] = useState(() => {
  //   return !!localStorage.getItem("token");
  // });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // You can add more complex validation logic here if needed
  //     setIsValidUser(true);
  //   } else {
  //     setIsValidUser(false);
  //   }
  // }, []);

  const istoken = localStorage.getItem("token")
  return Boolean(istoken);
};

export default useAuth;
