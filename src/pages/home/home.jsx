import React, { useState } from "react";
import "./home.css";
import images from "../../assets";
import Header from "../../components/header/header";
import {
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Footer from "../../components/footer/footer";
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
        <Col xs="12" md="6" className="bg-white bannerContent contentHome">
          <h2 className="display-3 fw-bold">
            Only Audio Visual Question Bank Globally
            <span className="text-primary"> For Medical Students</span>
          </h2>
          <div className="fw-light fs-4 text">
            Unlock a world of knowledge with the ultimate audio visual question
            bank, followed analytics and more by our support team to ensure
            success in your medical exams.
          </div>

          <div>
            <button type="button" class="btn btn-lg btn-primary btnHome">
              Get Started
            </button>
            <button type="button" class="btn btn-lg btn-primary btnHome">
              Learn More
            </button>
          </div>
        </Col>
        <Col xs="12" md="6" className=""></Col>
      </Row>
      <div>
        <div className="text-info text-center fs-5 eduHome">
          EDUCATION MATTERS
        </div>
        <div className="text-center fs-1 fw-bold">
          Better understanding mean higher results
        </div>
      </div>
      <div className="text-center fw-normal fs-4 learnHome">
        Learning through our interactive course will ensure better understanding
        of each subject, driving deeper knowledge and question solving ability.
      </div>

      <Row className="my-5">
        <Col className="bg-light" sm="4" xs="6">
          <div className="card flex-row">
            <img
              className="card-img-left example-card-img-responsive mt-3"
              src={images.question}
              height="35px"
              width="35px"
            />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">500 Cases</h4>
              <p className="card-text">
                Our audio visual question bank has more than 500 cases from
                which you can polish your skills
              </p>
            </div>
          </div>
        </Col>
        <Col className="bg-light" sm="4" xs="6">
          <div className="card flex-row">
            <img
              className="card-img-left example-card-img-responsive mt-3"
              src={images.question}
              height="35px"
              width="35px"
            />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">1,200 Questions</h4>
              <p className="card-text">
                More than 1,200 questions, along with comprehensive video cases
                to gain in depth knowledge
              </p>
            </div>
          </div>
        </Col>
        <Col className="bg-light" sm="4">
          <div className="card flex-row">
            <img
              className="card-img-left example-card-img-responsive mt-3"
              src={images.question}
              height="35px"
              width="35px"
            />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">Dashboard</h4>
              <p className="card-text">
                {" "}
                Dashboard Have a self paced learning experience with
                personalised dashboard and detailed analysis
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-center fs-3 fw-bold mb-3">Why Stethups?</div>
      <Row className="hello">
        <Col xs="12" md="6" className="">
          <img src={images.checkdoc} alt="" />
        </Col>
        <Col xs="12" md="6">
          <div className="bg-white fs-2 fw-bold">
            The Complete Audio Visual Guide
          </div>
          <div className="fs-5">
            Welcome to StethUps, where medical education meets innovation.
            Founded by Dr. Harsh and Dr. Prachi, StethUps offers a dynamic
            online platform that revolutionizes learning through immersive
            audio-visual experiences. Our curated question bank features
            animated patient videos, detailed analysis, and personalized
            feedback, enhancing understanding and critical thinking skills.
            Accessible across multiple platforms, StethUps empowers students to
            study anytime, anywhere, on any device. Join us and embark on a
            transformative journey towards becoming a confident and competent
            healthcare professional.
          </div>
        </Col>
      </Row>
      <Row className="bgColor mt-5">
        <Col xs="12" md="6">
          <h3 className=" text-white text-center fw-bold bgColorText ">
            Start learning, improve results today!
          </h3>
        </Col>
        <Col xs="12" md="6" className="btnGetStart">
          <button type="button" className="btn btn-lg btn-dark ">
            Get Started
          </button>
        </Col>
      </Row>
      {/* <div className="bgColor mt-5">
        <h3 className=" text-white text-center fw-bold bgColorText ">
          Start learning, improve results today!
          <button type="button" class="btn btn-lg btn-dark btnGetStart">
            Get Started
          </button>
        </h3>
      </div> */}
      <div className="fs-2 fw-bold text-center mt-5">
        Start learning medical science effectively
      </div>
      <div className="fs-5 text-center">
        Prepare your medical competitive exams, the modern way
      </div>
      <button
        type="button"
        className="btn btn-lg btn-primary mt-3   btnPrepare "
      >
        Get Started
      </button>
      <div className="accrodian">
        <h1 className="text-center fw-bold">Common Questions</h1>
      </div>

      {/* accordionId */}
      <div className="container">
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">
              How does money back gurrent work
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <strong> Yes, we stand behind the quality of our product.</strong>{" "}
              If for any reason you’re not satisfied with your StethUps
              subscription, we offer a hassle-free money-back guarantee. Simply
              contact our support team within 15 days of your purchase, and
              we’ll promptly refund your payment, no questions asked. Your
              satisfaction is our priority.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              The content is delivered through our online web application or
              mobile application. You can download our application through play
              store or app store.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              Contact our customer support info@steth.in for more details. We
              accept domestic as well as international payments
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="4">
              StethUps offers a comprehensive question bank featuring animated
              patient videos, detailed analysis, and personalized feedback. Our
              innovative approach to audio-visual learning enhances
              understanding and critical thinking skills, empowering you to
              excel academically and in real-world clinical practice
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="5">
              Currently, StethUps requires an internet connection to access our
              platform and study materials. However, you can download certain
              resources for offline viewing, providing flexibility in your study
              routine.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default Home;
