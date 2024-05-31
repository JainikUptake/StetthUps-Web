import { useState, useEffect } from "react";

const UseAuth = () => {
  const [isValidUser, setIsValidUser] = useState(true);
  useEffect(() => {
    const authValue = localStorage.getItem("token");
    setIsValidUser(!!authValue);
  }, []);
  return isValidUser;
};
export default UseAuth;