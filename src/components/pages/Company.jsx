import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Parallax from "../widgets/parallaxSec";
import about from '../../assets/img/about-page.jpg';
import about1 from '../../assets/img/about.png';
import PagesBanner from '../widgets/PagesBanner';
import BannerImg from '../../assets/img/company-banner.jpg';
const Company = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Web Design &amp; By Mitul | About Us</title>
        <meta name="description" content="Butterfly is a Leading Web Design and Development Company that offers the best Custom eCommerce Web Development Services. Explore More." />
      </Helmet>
      <PagesBanner PageTitle="About Us" BannerImg={BannerImg} />
      <section>
        <Container>
          <div className="sec-heading heading-center">
            <h2>What is Butterfly?</h2>
            <h4>What We Offer For You</h4>
            <span className="title-devider"></span>
          </div>
          <div className="text-center">
            <p>There are many variations of passages of Lorem Ipsum available.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>            
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="about-row">            
            <Col lg={6} className="ps-sm-5 about-content">
              <div className="sec-heading left-bdr-title mb-4">
                <h4>Innovative variations</h4>
                <h3>Solution</h3>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available but the majority is have suffered alteration in that some form by injected humour or randomised that words which don't look even slightly believable. If you are going a to use a passage of Lorem Ipsum you need to be sure there isn't anything.</p>
              <p>So whether you wish to take your business to the digital platform or upgrade it to the next level, we are here to help you.</p>
              <ul className="icon-list list-column2">
                <li>Monster Titans Success</li>
                <li>Stay motivated, Read</li>
                <li>24*7 Support</li>
                <li>From A Public Address</li>
                <li>Generic Responses</li>
                <li>Research &amp; Concept</li>
              </ul>
            </Col>
            <Col lg={6} className="about-img">
              <LazyLoadImage src={about} alt="Web Development" title="Web Development Company" width={546} height={411} />
            </Col>
          </Row>
          <Row className="about-row">   
            <Col lg={6} className="ps-sm-5 about-content">
              <div className="sec-heading left-bdr-title mb-4">
                <h4>We Offering</h4>
                <h3>Super Fast Product</h3>
              </div>             
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a great explorer of the truth of human happiness.</p>
              <p>Traveling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower</p>
              <p>A collection of textile samples lay spread out on the table Samsa was a traveling salesman</p>
            </Col>
            <Col lg={6} className="about-img">
              <LazyLoadImage className="img-fluid" src={about1} alt="Web Design Company" title="Web Design Company" width={546} height={527} />             
            </Col> 
          </Row>          
        </Container>
      </section>
      <Parallax/>
      <section>
        <Container>
          <Row>
            <Col xl={3} md={4}><h3>What does the Future of Transport Management Systems Look Like?.</h3></Col>
            <Col xl={9} md={8}>              
              <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright.</p>
              <p>raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the.</p>
              <p>Through a wide variety of mobile applications, we've developed a unique visual system and strategy that can be applied across the spectrum of available applications.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Company;