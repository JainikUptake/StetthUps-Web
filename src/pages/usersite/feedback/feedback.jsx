import React, { useState } from "react";
import "./feedback.css";
import Header from "../../../components/usersite/header/header";
import { userFeedback } from "../../../redux-toolkit/FeedbackSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Feedback = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  //
  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(userFeedback({ message }));

      console.log(response, "feedback jsx response");
      if (response.payload.status == 200) {
        Swal.fire({
          title: "Success!",
          text: `Feedback Sent Successfully`,
          icon: "success",
        });
      }
      // if (status) {
      //   Swal.fire({
      //     title: "Success!",
      //     text: `login Successful`,
      //     icon: "success",
      //   });
      //   // window.location.reload()
      //   navigate("user/dashboard");
      // }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Someting went wrong`,
      });
    }
  };

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="feedback-card">
            <form action="">
              <label>Write your post:</label>
              <textarea
                name="postContent"
                rows={4}
                cols={40}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="button" onClick={handleFeedback}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
