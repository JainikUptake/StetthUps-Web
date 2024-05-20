import { useState, useEffect } from "react";

const useAuth = () => {
  const [isValidUser, setIsValidUser] = useState(!!localStorage.getItem("token"));
  useEffect(() => {
    setIsValidUser(true);
  }, []);
  return isValidUser;
};
export default useAuth;
