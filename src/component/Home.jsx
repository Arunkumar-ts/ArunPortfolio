import Image from "react-bootstrap/Image";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { IoIosSend } from "react-icons/io";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import impProject from "../impProject.json";
import Projects from "../Projects.json";
import { TypeAnimation } from "react-type-animation";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDownload = () => {
    let date = new Date();
    let fullDate = String(date).slice(0, 16);
    const link = document.createElement("a");
    link.href = "/arunResume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = `Arun ts - Resume ${fullDate}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [open, setOpen] = useState(false);

  const handleEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_bqny6as",
      "template_7ki2589",
      e.target,
      "AIKTpf7fxGxi_2N36"
    );
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success",
    });
  };

  return (
    <div style={{ backgroundColor: "rgba(255, 165, 0,0.1)" }} id="nav">
      <br />
      {/* Navbar */}
      <Container
        className=" border rounded-5  navbarContainer "
        style={{ backgroundColor: "white" }}
      >
        <Navbar expand={"md"}>
          <Container>
            <Navbar.Brand className="brand">
              <a href="https://tsarunportfolio.netlify.app">
                <h2 style={{ display: "inline" }}>Arun Kumar ts</h2>
                <span style={{ color: "blue" }}>.</span>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              className="rounded-5 offCanvaButton"
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              style={{ width: "70%", backgroundColor: "#FFE6C9" }}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="brand">
                  <a href="https://tsarunportfolio.netlify.app">
                    <h2 style={{ display: "inline" }}>Arun Kumar ts</h2>
                    <span style={{ color: "blue" }}>.</span>
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="#nav"
                    className="link text-black"
                    onClick={handleClose}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#aboutMePage"
                    className="link text-black"
                    onClick={handleClose}
                  >
                    About me
                  </Nav.Link>
                  <Nav.Link
                    href="#projectsPage"
                    className="link text-black"
                    onClick={handleClose}
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    href="#contactMePage"
                    className="link text-black"
                    onClick={handleClose}
                  >
                    Contact me
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button
              variant="light"
              className="my-resume d-none d-lg-block"
              onClick={handleDownload}
            >
              My resume <MdDownloading />
            </Button>
          </Container>
        </Navbar>
      </Container>

      {/* Home */}
      <Container id="homePage">
        <div className="my-detail">
          <center>
            <Image
              src="portfolio_img.png"
              width={300}
              className=" d-block d-md-none "
            />
          </center>
          <h3 id="h5-top">👋 Hi, It's Me</h3>
          <h1>Arun Kumar ts</h1>
          <h3>
            And I'm a{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Software Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                speed={50}
                style={{
                  fontSize: "25px",
                  fontWeight: 700,
                  color: "orangered",
                }}
                repeat={Infinity}
              />
            </span>
          </h3>
          <p className="smallIntro">
            Computer Science graduate, Web Developer, Frontend Developer,
            Software Developer Passionate about creating responsive and
            user-friendly applications. Always eager to learn and grow in the
            tech field.
          </p>
          <div className="mt-4">
            <a className="social-link" href="https://github.com/arunkumar-ts">
              <FaGithub />
            </a>
            <a
              className="social-link  "
              href="https://www.linkedin.com/in/arunkumar-ts2005"
            >
              <FaLinkedin />
            </a>
            <a className="social-link " href="https://wa.me/9342772857">
              <FaWhatsapp />
            </a>
          </div>
          <a href="#contactMePage">
            <Button variant="light" className="my-resume mt-5 me-2 ">
              contact me <FaArrowRight />
            </Button>
          </a>

          <Button
            variant="light"
            className="my-resume mt-5 "
            onClick={handleDownload}
          >
            my resume <MdDownloading />
          </Button>

          <Image
            src="portfolio_img.png"
            width={390}
            className="portfolio_img d-none d-md-block "
          />
        </div>
      </Container>

      {/* AboutMe */}
      <Container id="aboutMePage">
        <div className=".about-me-detail mt-0 mt-md-5 pt-0 pt-md-5">
          <h2>
            About <span className="textShadow">Me</span>
          </h2>
          <h4>Web Developer!</h4>
          <p className="smallIntro">
            I am a fresher and a dedicated Computer Science graduate with a
            strong foundation in both front-end and back-end development. My
            technical expertise includes HTML, CSS, JavaScript, React,
            Bootstrap, and Firebase Firestore on the front end, along with
            programming languages such as C, C++, Java, and Python. I also have
            experience working with MySQL for database management. I am
            passionate about building efficient and functional web applications
            and continuously seek opportunities to enhance my skills and
            contribute to meaningful software development projects.
          </p>
          <h2 className="textShadow text-black my-3">Skils</h2>
          <div>
            <h5>C++</h5>
            <ProgressBar className="custom-orangered" now={70} />

            <h5>Java</h5>
            <ProgressBar className="custom-orangered" now={90}/>
            
            <h5>Python</h5>
            <ProgressBar className="custom-orangered" now={60}/>

            <h5>JavaScript</h5>
            <ProgressBar className="custom-orangered" now={90} />

            <h5>React JS</h5>
            <ProgressBar className="custom-orangered" now={70} />
          </div>
        </div>
      </Container>

      {/* Projects */}
      <Container id="projectsPage" className="mt-0 mt-md-5 pt-0 pt-md-5">
        <h2>
          <span className="textShadow">My</span> Projects
        </h2>
        <div className="project d-flex justify-content-center align-items-center">
          {impProject.map((project1) => (
            <Project
              key={project1.id}
              title={project1.title}
              image={project1.image}
              discription={project1.discription}
              live_link={project1.live_link}
            />
          ))}
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div className="project d-flex justify-content-center align-items-center">
                {Projects.map((project1) => (
                  <Project
                    key={project1.id}
                    title={project1.title}
                    image={project1.image}
                    discription={project1.discription}
                    live_link={project1.live_link}
                  />
                ))}
              </div>
            </div>
          </Collapse>
        </div>
        <div className="showML">
          {!open ? (
            <button
              className="showML-btn"
              onClick={() => setOpen(true)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Show More
            </button>
          ) : (
            <button
              className="showML-btn"
              onClick={() => setOpen(false)}
              aria-controls="example-collapse-text"
            >
              Show Less
            </button>
          )}
        </div>
      </Container>

      {/* ContactMe */}
      <Container id="contactMePage">
        <h2 className="mb-3">
          Contact <span className="textShadow">Me</span>
        </h2>
        <Container>
          <Form className="formemail rounded p-3" onSubmit={handleEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="inputEmail"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="inputEmail"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                className="inputEmail"
                name="message"
                required
              />
            </Form.Group>
            <Button className="my-resume" type="submit" variant="light">
              Send <IoIosSend />
            </Button>
          </Form>
        </Container>
      </Container>

      {/* Footer */}
      <Container className="p-3"></Container>
    </div>
  );
};

export default Home;

const Project = ({ title, image, discription, live_link }) => {
  const [openDis, setOpenDis] = useState(false);

  return (
    <div className="project">
      <Card
        style={{ width: "15rem", backgroundColor: "transparent" }}
        className="shadow bordercord "
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {!openDis && discription.slice(0, 100).concat(" ...")}
          </Card.Text>
          <Collapse in={openDis}>
            <div id="example-collapse-text">{discription}</div>
          </Collapse>
          <div className="d-flex justify-content-end">
            {!openDis ? (
              <button
                className="showML-btn"
                onClick={() => setOpenDis(true)}
                aria-controls="example-collapse-text"
                aria-expanded={openDis}
              >
                Show More
              </button>
            ) : (
              <button
                className="showML-btn"
                onClick={() => setOpenDis(false)}
                aria-controls="example-collapse-text"
              >
                Show Less
              </button>
            )}
          </div>
          <a href={live_link}>
            <Button className="my-resume btn-sm" variant="light">
              View Project <FaArrowRight />
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
