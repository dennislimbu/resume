import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} class="logo" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dennis-limbu/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
            </div>
            <p>Copyright 2025 Dennis Limbu. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}