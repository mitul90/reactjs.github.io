import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Parallax from "../widgets/parallaxSec";
import ProjectsSlider from '../widgets/Projectsslider';
import { Helmet } from 'react-helmet-async';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typed from "typed.js";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';
import slide3 from '../../assets/img/slide3.png';
import howWeWork from '../../assets/img/how-we-work.png';
import about from '../../assets/img/about.png';

const Home = () => {
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Voluptatem", "Fugit", "Cupiditate", "Laborios"], startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Web Development &amp; Design Company | Mitul</title>
        <meta name="description" content="This theme design and develop by Mitul." />
      </Helmet>
      <section className="main-slider">
        <Swiper pagination={{ "clickable": true }} navigation={{ "clickable": true }} loop={true} autoplay={{ delay: 5000, disableOnInteraction: true }} speed={1200} slidesPerView={1}>
          <SwiperSlide>
            <Container>
              <Row className="align-items-center justify-content-between">
                <Col md={6}>
                  <h6>Lorem ipsum &amp; dolor</h6>
                  <h1>Delectus eius Services</h1>
                  <p>Option offendit oportere ad vis, mea habeo perfecto vituperata ea. Nec no graece adversarium. Cu brute virtute usu, ex sea harum dicunt admodum. </p>
                  <Button className="d-none d-md-table" as={Link} to="/services">Analyze your site</Button>
                </Col>
                <Col md={6}>
                  <LazyLoadImage src={slide2} alt="Web Design &amp; Development Services" title="Web Design &amp; Development Services" width={523} height={374} />
                  <Button className="d-md-none" as={Link} to="/services">Eius Services</Button>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Row className="align-items-center justify-content-between">
                <Col md={6}>
                  <h6>Curabitur cum consequat</h6>
                  <h2 className="h1">Viverra tincidunt velit vitae</h2>
                  <p>Dictumst dignissim varius penatibus platea maecenas curae nascetur, purus ullamcorper ante fringilla hendrerit quis augue. Nibh litora leo natoque orci sociis accumsan himenaeos duis curae.</p>
                  <Button className="d-none d-md-table" as={Link} to="/about-us">About Us</Button>
                </Col>
                <Col md={6}>
                  <LazyLoadImage src={slide1} alt="Web Development Company" title="Web Development Company" width={546} height={466} />
                  <Button className="d-md-none" as={Link} to="/about-us">About Us</Button>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Row className="align-items-center justify-content-between">
                <Col md={6}>
                  <h6>Talented designers making</h6>
                  <h2 className="h1">Build Better With Bike</h2>
                  <p>App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                  <Button className="d-none d-md-table" as={Link} to="/services">Web Services</Button>
                </Col>
                <Col md={6}>
                  <LazyLoadImage src={slide3} alt="Slider3" title="Chrome Extension Development Services" width={546} height={466} />
                  <Button className="d-md-none" as={Link} to="/services">Web Services</Button>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xl={6} md={5}>
              <LazyLoadImage className="img-fluid d-none d-md-block" src={about} alt="about" title="About IT Company" height={636} width={614} />
            </Col>
            <Col xl={5} md={7}>
              <div className="sec-heading">
                <h4>About Us</h4>
                <h2>About What We Do & Who We Are</h2>
              </div>
              <LazyLoadImage className="img-fluid habout-img d-md-none" src={about} alt="about" title="About IT Company" height={636} width={614} />
              <p className="p-22">We are team of talented designers making websites with Bootstrap.</p>
              <p className="p-sm-22">Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</p>
              <p>Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
              <Button as={Link} to="/about-us">About Us</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="sec-heading heading-center">
            <h2>Our Values</h2>
            <h5>Odit est perspiciatis</h5>
            <span className="title-devider"></span>
          </div>
          <Row className="services-row">
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-paintbrush-pencil"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Nemo Enim</h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-display-code"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Dele cardo</h4>
                  <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-cart-shopping"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Magni Dolores</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-music"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Nemo Enim</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-laptop-arrow-down"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Beatae veritatis</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box top-icon">
                <span className="service-icon"><i className="fa-light fa-rocket-launch"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Explicabo consectetur</h4>
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="technologis">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="sec-heading mb-3">
                <h3>Sapiente Magnam <span ref={el}></span></h3>
                <h5>Sed ut perspiciatis</h5>
              </div>
              <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam.</p>
              <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
              <Button className="d-none d-lg-table" as={Link} to="/project">Projects</Button>
            </Col>
            <Col lg={6}>
              <ul className="list-unstyled technologis-list">
                <li><i class="fa-sharp fa-light fa-truck-fast"></i><span>Voluptatem</span></li>
                <li><i class="fa-light fa-envelope"></i><span>Beatae</span></li>
                <li><i class="fa-light fa-music"></i><span>Voluptates</span></li>
                <li><i class="fa-light fa-mug-hot"></i><span>Explicabo</span></li>
                <li><i class="fa-sharp fa-light fa-video"></i><span>Molestiae</span></li>
                <li><i class="fa-sharp fa-light fa-plane"></i><span>Maintance</span></li>
                <li><i class="fa-light fa-gift"></i><span>Development</span></li>
                <li><i class="fa-light fa-bell"></i><span>Fixing</span></li>
                <li><i class="fa-light fa-house"></i><span>Extension</span></li>
              </ul>
              <Button className="d-lg-none" as={Link} to="/project">Projects</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="sec-heading heading-center">
            <h2>Check What Us</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <span className="title-devider"></span>
          </div>
          <Row className="services-row">
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-laptop-code"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Molestiae dolor</h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. </p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-clock"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Labore conse</h4>
                  <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-pen-line"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Corporis voluptates</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-code"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Ullamco laboris</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-laptop-mobile"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Beatae veritatis</h4>
                  <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="services-box left-icon">
                <span className="service-icon"><i className="fa-light fa-face-smile"></i></span>
                <div className="service-content">
                  <h4 className="service-title">Voluptatem </h4>
                  <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="how-we-work">
        <Container>
          <div className="sec-heading heading-center">
            <h2>How we work</h2>
            <h5>with our clients</h5>
            <span className="title-devider"></span>
          </div>
          <Row className="how-work-row">
            <Col lg={4}>
              <div className="left-sec d-flex">
                <div className="content-block">
                  <h4>Rocket Speed of App</h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                </div>
                <div className="number-block"><span>1</span></div>
              </div>
              <div className="left-sec d-flex">
                <div className="content-block">
                  <h4>Multi Workflow</h4>
                  <p className="mb-0">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata.</p>
                </div>
                <div className="number-block"><span>2</span></div>
              </div>
            </Col>
            <Col lg={4} className="how-we-work-picture">
              <LazyLoadImage src={howWeWork} alt="how-we-work" title="Web Development Workflow" width={416} height={412} className="how-work-img" />
            </Col>
            <Col lg={4} className="how-last-col">
              <div className="right-sec d-flex">
                <div className="number-block"><span>4</span></div>
                <div className="content-block">
                  <h4>App Maintenance</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="right-sec d-flex">
                <div className="number-block"><span>3</span></div>
                <div className="content-block">
                  <h4>Services &amp; Features</h4>
                  <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Parallax />
      <ProjectsSlider />
    </React.Fragment>
  );
};
export default Home;