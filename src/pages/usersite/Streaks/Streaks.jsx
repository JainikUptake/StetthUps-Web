import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./Streaks.css";
import Header from "../../../components/usersite/header/header";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../../redux-toolkit/profileSlice";
import { ClaimLifeLine, GetStreak } from "../../../redux-toolkit/streakSlice";
import Swal from "sweetalert2";
import { ChevronLeftSquare, Equal, Flame, HeartPulse } from "lucide-react";

const Streaks = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { profile } = useSelector((state) => state.userDetails);
  const {
    getStreak,
    loading: loadingStreak,
    error: errorStreak,
  } = useSelector((state) => state.getStreak);
  const message = getStreak?.message;

  useEffect(() => {
    dispatch(userProfile());
    dispatch(GetStreak());
  }, [dispatch]);

  useEffect(() => {
    setLoading(loadingStreak);
    if (message) {
      Swal.fire({
        title: "Success!",
        text: `${message}`,
        icon: "success",
      });
    }
  }, [message, loadingStreak]);

  const handleClaimLifeLine = async () => {
    try {
      setLoading(true);
      const response = await dispatch(ClaimLifeLine());
      setLoading(false);
      const claimMessage = response?.payload?.message;
      if (claimMessage) {
        Swal.fire({
          title: "Success!",
          text: `${claimMessage}`,
          icon: "success",
        });
      }
    } catch (error) {
      setLoading(false);
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
        <div className="streaks-container">
          <div className="streaks-card">
            <Container>
              <div className="d-flex align-items-center">
                <div>
                  <ChevronLeftSquare
                    size={48}
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                </div>
                <div className="fs-3">Streaks</div>
              </div>
              <Col
                sm={3}
                className="d-flex flex-column align-items-center totalLifeLine-cards"
              >
                <span className="fw-bolder fs-2">Total Lifeline</span>
                <div className="fw-bold fs-4">{profile?.lifeline}</div>
              </Col>
              <div className="mt-3">
                <Row>
                  <Col sm={4} className="text-center">
                    <span className="fw-bold score">{getStreak?.streak}</span>
                    <Flame size={100} strokeWidth={0.5} />
                    <div className="fw-bold fs-2">Streaks</div>
                  </Col>
                  <Col sm={4} className="text-center">
                    <Equal size={100} strokeWidth={2.25} />
                  </Col>
                  <Col sm={4} className="text-center">
                    <span className="fw-bold score">{getStreak?.streak}</span>
                    <HeartPulse size={100} strokeWidth={0.75} />
                    <div className="fw-bold fs-2">Lifeline</div>
                  </Col>
                </Row>
              </div>
              <Button
                className="custom-button fs-4 mt-4"
                onClick={handleClaimLifeLine}
              >
                Claim Life Line
              </Button>
              {loading && <div className="loader"></div>}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Streaks;
