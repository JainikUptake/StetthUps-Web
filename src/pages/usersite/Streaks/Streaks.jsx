import { ChevronLeftSquare, Equal, Flame, HeartPulse } from "lucide-react";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./Streaks.css";
import Header from "../../../components/usersite/header/header";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../../redux-toolkit/ProfileSlice";
import { ClaimLifeLine, GetStreak } from "../../../redux-toolkit/streakSlice";
import Swal from "sweetalert2";

const Streaks = () => {
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(userProfile())
  // },[])

  const { profile } = useSelector((state) => state.userDetails);
  console.log(profile, "-----streakss");

  const {
    getStreak,
    loading: loadingStreak,
    error: errorStreak,
  } = useSelector((state) => state.getStreak);
  console.log(getStreak?.message, "-----ggg");
  const message = getStreak?.message;

  useEffect(() => {
    if (message) {
      Swal.fire({
        title: "Success!",
        text: `${message}`,
        icon: "success",
      });
    }
  }, [message]);

  useEffect(() => {
    dispatch(userProfile());
    dispatch(GetStreak());
  }, []);
  //
  const handleClaimLifeLine = async () => {
    try {
      const response = await dispatch(ClaimLifeLine());

      console.log(response, "response");
      const claimMessage = response?.payload?.message;
      if (claimMessage) {
        Swal.fire({
          title: "Success!",
          text: `${claimMessage}`,
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error}`,
      });
    }
  };

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="streaks-card">
            <Container>
              <div className="d-flex">
                <div>
                  <ChevronLeftSquare
                    size={48}
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                </div>

                <div className="fs-3">Streaks</div>
              </div>
              <Col sm={3} className="d-flex flex-column align-items-center">
                <span className="fw-bolder fs-2">Total Lifeline</span>

                <div>
                  <HeartPulse size={100} strokeWidth={0.75} />
                  <div className="fw-bold fs-4 totalLifeLine">
                    {profile?.lifeline}
                  </div>
                </div>
              </Col>
              <div className="mt-5">
                <Row>
                  <Col sm={3}>
                    <span className="fw-bold score">{getStreak?.streak}</span>

                    <Flame size={100} strokeWidth={0.5} />

                    <div className="fw-bold fs-2">Streaks</div>
                  </Col>
                  <Col sm={3}>
                    <Equal size={100} strokeWidth={2.25} />
                  </Col>
                  <Col sm={3}>
                    <span className="fw-bold score">{getStreak?.streak}</span>
                    <HeartPulse size={100} strokeWidth={0.75} />
                    <div className="fw-bold fs-2">Lifeline</div>
                  </Col>
                </Row>
              </div>
              <Button
                className="custom-button fs-4"
                onClick={() => handleClaimLifeLine()}
              >
                Claim Life Line
              </Button>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Streaks;
