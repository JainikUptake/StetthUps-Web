import { useState, useEffect } from "react";

const useAuth = () => {
  const [isValidUser, setIsValidUser] = useState(false);
  useEffect(() => {
    const authValue = localStorage.getItem("token");
    setIsValidUser(!!authValue);
  }, []);
  return isValidUser;
};
export default useAuth;
