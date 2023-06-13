import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import Logo from '../assets/img/logo.png';
import SitemapData from './../data/sitemap.json';
const Header = () => {
  const { pathname } = useLocation();
  const collectionId = pathname.split('/')[1]
  const [HeaderFixed, setHeaderFixed] = useState(false);
  const changeHeaderFixed = () => {
    if (window.scrollY >= 70) {
      setHeaderFixed(true);
    }
    else {
      setHeaderFixed(false);
    }
  };
  window.addEventListener('scroll', changeHeaderFixed);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className={HeaderFixed ? 'header-fixed' : ''}>
      <Navbar collapseOnSelect expand="md" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={Logo} alt="Web Development Company Logo" title="Web Development Company Logo" width={102} height={32} /></Navbar.Brand>
          <Button variant="primary" onClick={handleShow} className="d-md-none d-block nav-btn"><i className="fa-light fa-bars"></i></Button>          
          <Navbar.Collapse>
            <Nav className="ms-auto" as="ul" activeKey={collectionId === "portfolio" ? '/portfolio' : pathname}>
              {SitemapData.map((data) => {
                return (
                  <Nav.Item key={data.id} as="li">
                    <Nav.Link eventKey={data.url} as={Link} to={data.url} className={data.btnClass}>{data.name}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
         <img src={Logo} alt="Company Logo" width={102} height={32} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ms-auto" as="ul" activeKey={collectionId === "portfolio" ? '/portfolio' : pathname}>
            {SitemapData.map((data) => {
              return (
                <Nav.Item key={data.id} as="li" onClick={handleClose}>
                  <Nav.Link eventKey={data.url} as={Link} to={data.url}>{data.name}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
export default Header;