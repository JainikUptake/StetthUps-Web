import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ component }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  // console.log(user, "----------------------user-------------------");

  useEffect(() => {
    if (!token) {
      navigate("/auth/register");
    }
  });
  return component;
};
export default Protected;