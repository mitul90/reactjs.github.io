import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import parallaxImgWebp from '../../assets/img/parallax.webp';
const Parallax = (props) => {
  return (
    <section className="parallax-parent">
      <div className="parallax" style={{ backgroundImage: `url(${parallaxImgWebp}` }}></div>
      <Container>
        <h3>Join Our Newsletter</h3>
        <h4>Hire us to show you how good it can get!</h4>
        <Button variant="outline-primary" as={Link} to="/contact">Contact Us</Button>
      </Container>
    </section>
  );
};
export default Parallax;