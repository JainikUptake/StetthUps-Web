import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Private = ({ privateComponent }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  // console.log(user, "----------------------user-------------------");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });
  return privateComponent;
};
export default Private;