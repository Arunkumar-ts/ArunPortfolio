import Image from "react-bootstrap/Image";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleDownload = () => {
    let date = new Date();
    let fullDate = String(date).slice(0,16)
    const link = document.createElement('a');
    link.href = '/files/Arun ts - Resume.pdf'; 
    link.download = `Arun ts - Resume ${fullDate}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div style={{ backgroundColor: "rgba(255, 165, 0,0.1)" }}>
      <br />
      {/* Navbar */}
      <Container className=" border rounded-5 shadow navbarContainer " style={{ backgroundColor: "white" }}>
        <Navbar expand={"md"} >
          <Container >
            <Navbar.Brand className="brand">
              <h2 style={{ display: "inline" }}>Arun Kumar ts</h2>
              <span style={{ color: "blue" }}>.</span>
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
                  Arun Kumar ts<span style={{ color: "blue" }}>.</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="#homePage"
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
                  <Nav.Link className="link text-black" onClick={handleClose}>
                    Projects
                  </Nav.Link>
                  <Nav.Link className="link text-black" onClick={handleClose}>
                    Contact me
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button variant="light" className="my-resume d-none d-lg-block" onClick={handleDownload}>
              My resume <MdDownloading />
            </Button>
          </Container>
        </Navbar>
      </Container>

      {/* MainDetail */}
      <Container id="homePage" >
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
            And I'm a <span>Frontend Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis debitis voluptates natus provident quidem esse vitae
            modi at animi dignissimos!
          </p>
          <div className="mt-4">
            <a className="social-link shadow" href="https://github.com/arunkumar-ts">
              <FaGithub />
            </a>
            <a
              className="social-link shadow "
              href="https://www.linkedin.com/in/arunkumar-ts2005"
            >
              <FaLinkedin />
            </a>
            <a className="social-link shadow" href="https://wa.me/9342772857">
              <FaWhatsapp />
            </a>
          </div>

          <Button variant="light" className="my-resume mt-4 me-2 shadow">
            contact me <FaArrowRight />
          </Button>

          <Button variant="light" className="my-resume mt-4 shadow" onClick={handleDownload}>
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
        <div className=".about-me-detail">
          <h2>
            About <span style={{ color: "orangered" }}>Me</span>
          </h2>
          <h4>Frond End Developer!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nisi
            commodi ratione consectetur, officiis voluptate sint quia,
            voluptatibus inventore necessitatibus sit! Explicabo, distinctio
            natus consequatur perspiciatis quasi neque cupiditate earum nesciunt
            consequuntur commodi magni odit quia id? Molestias quis sequi Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eligendi, ex sint cum ducimus hic eveniet doloribus reiciendis nulla
            vel dolores expedita magni in incidunt nostrum laborum voluptates
            error vero asperiores architecto qui quas maxime commodi facilis!
            Commodi deserunt repudiandae illum sed iure doloremque, consequatur
            blanditiis ratione totam officia amet, nihil repellendus aperiam
            fugit odio est rem quasi sint incidunt nisi explicabo, aspernatur
            atque eligendi possimus? Aut commodi exercitationem impedit
            corporis, rerum natus iusto molestiae atque, error ipsum tenetur
            perferendis accusamus quod consequatur aliquam quos vitae, odio
            deleniti quia ratione. Officiis commodi pariatur est odio ad quos
            laboriosam quaerat quod. nostrum assumenda optio illum in
            voluptatibus amet, mollitia adipisci minus.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
