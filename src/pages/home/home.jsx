import React, { useState } from "react";
import "./home.css";
import images from "../../assets";
import Header from "../../components/header/header";
import {
  Button,
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import Footer from "../../components/footer/footer";
// import { Button } from "bootstrap";
const Home = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <Header />

      <Row className="bg-image">
        <Container>
          <Col lg={6} className="studentContent mt-5 p-5">
            <div className="display-3 fw-bolder">
              Only Audio Visual Question Bank Globally
              <span className="text-primary"> For Medical Students</span>
            </div>
            <div className="fw-light fs-4 text">
              Unlock a world of knowledge with the ultimate audio visual
              question bank, followed analytics and more by our support team to
              ensure success in your medical exams.
            </div>

            <div>
              <button type="button" class="btn btn-lg btn-primary studentBtn">
                Get Started
              </button>
              <button type="button" class="btn btn-lg btn-primary studentBtn">
                Learn More
              </button>
            </div>
          </Col>
        </Container>
      </Row>

      <div className="eduBgColor">
        <Container>
          <Row>
            <Col>
              <div className="text-info text-center fs-5 eduText mt-5">
                EDUCATION MATTERS
              </div>
              <div className="text-center fs-1 fw-bold">
                Better understanding means higher results
              </div>
              <div className="text-center fw-normal fs-4 eduLearn">
                Learning through our interactive course will ensure better
                understanding of each subject, driving deeper knowledge and
                question-solving ability.
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="cards">
            <Col md={4}>
              <div className="card flex-row border-0  cardsSpace">
                <img
                  className="card-img-left example-card-img-responsive mt-3 mx-2"
                  src={images.question}
                  height="35px"
                  width="35px"
                  alt="Question"
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">500 Cases</h4>
                  <p className="card-text">
                    Our audio-visual question bank has more than 500 cases from
                    which you can polish your skills.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card flex-row border-0 cardsSpace">
                <img
                  className="card-img-left example-card-img-responsive mt-3 mx-2"
                  src={images.question}
                  height="35px"
                  width="35px"
                  alt="Question"
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">500 Cases</h4>
                  <p className="card-text">
                    Our audio-visual question bank has more than 500 cases from
                    which you can polish your skills.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card flex-row border-0 cardsSpace">
                <img
                  className="card-img-left example-card-img-responsive mt-3 mx-2"
                  src={images.question}
                  height="35px"
                  width="35px"
                  alt="Question"
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">500 Cases</h4>
                  <p className="card-text">
                    Our audio-visual question bank has more than 500 cases from
                    which you can polish your skills.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="text-center fs-3 fw-bold my-5">Why Stethups?</div>
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={images.checkdoc} className="w-100" alt="" />
          </Col>
          <Col lg={6} className="d-flex flex-column py-5">
            <div className="bg-white fs-1 fw-bold text-center text-md-start">
              The Complete Audio Visual Guide
            </div>
            <div className="fs-3 px-3 px-md-0">
              Welcome to StethUps, where medical education meets innovation.
              Founded by Dr. Harsh and Dr. Prachi, StethUps offers a dynamic
              online platform that revolutionizes learning through immersive
              audio-visual experiences. Our curated question bank features
              animated patient videos, detailed analysis, and personalized
              feedback, enhancing understanding and critical thinking skills.
              Accessible across multiple platforms, StethUps empowers students
              to study anytime, anywhere, on any device. Join us and embark on a
              transformative journey towards becoming a confident and competent
              healthcare professional.
            </div>
          </Col>
        </Row>
      </Container>

      <Row className="bgColor mt-5 py-4">
        <Col
          md="6"
          className="d-flex justify-content-center align-items-center"
        >
          <h3 className="text-white text-center fw-bold bgColorText">
            Start learning, improve results today!
          </h3>
        </Col>
        <Col
          md="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Button color="dark" size="lg">
            Get Started
          </Button>
        </Col>
      </Row>

      <div>
        <Card inverse className="my-5">
          <CardImg
            alt="Card image cap"
            src={images.home_banner}
            style={{
              height: "45vh",
            }}
            width="100%"
          />
          <CardImgOverlay className="overlayImg">
            <CardTitle tag="h5" className="fs-1 fw-bold text-center py-3">
              Start learning medical science effectively
            </CardTitle>
            <CardText className="fs-4 text-center">
              Prepare for your medical competitive exams, the modern way
            </CardText>
            <CardText className="d-flex justify-content-center">
              <button type="button" className="btn btn-lg btn-primary mt-3 ">
                Get Started
              </button>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>

      {/* accordionId */}
      <div className="accordionBgColor">
        <div className="container accordion-container">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem className="mb-3">
              {" "}
              {/* Add margin-bottom for space */}
              <AccordionHeader targetId="1">
                How does money back guarantee work
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>
                  {" "}
                  Yes, we stand behind the quality of our product.
                </strong>{" "}
                If for any reason you’re not satisfied with your StethUps
                subscription, we offer a hassle-free money-back guarantee.
                Simply contact our support team within 15 days of your purchase,
                and we’ll promptly refund your payment, no questions asked. Your
                satisfaction is our priority.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="mb-3">
              {" "}
              {/* Add margin-bottom for space */}
              <AccordionHeader targetId="2">
                How is the content delivered?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                The content is delivered through our online web application or
                mobile application. You can download our application through
                play store or app store.
              </AccordionBody>
            </AccordionItem>
            {/* Add more AccordionItems here with the same margin-bottom class */}
            <AccordionItem className="mb-3">
              {" "}
              {/* Add margin-bottom for space */}
              <AccordionHeader targetId="3">
                What payment methods can I use?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                The content is delivered through our online web application or
                mobile application. You can download our application through
                play store or app store.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="mb-3">
              {" "}
              {/* Add margin-bottom for space */}
              <AccordionHeader targetId="4">
                How can StethUps help me in my medical studies?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                The content is delivered through our online web application or
                mobile application. You can download our application through
                play store or app store.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
