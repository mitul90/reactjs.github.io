import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';
import PagesBanner from '../widgets/PagesBanner';
import ProjectsSlider from '../widgets/Projectsslider';
import BannerImg from '../../assets/img/services-banner.jpg';
import ser1 from '../../assets/img/ser1.png';
import ser2 from '../../assets/img/ser2.png';
import ser3 from '../../assets/img/ser3.png';
import ser4 from '../../assets/img/ser4.png';
import ser5 from '../../assets/img/ser5.png';
import ser6 from '../../assets/img/ser6.png';
import ser7 from '../../assets/img/ser7.png';
const Services = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Best Web Development &amp; Design Services, eCommerce Solution | Butterfly</title>
        <meta name="description" content="Butterfly Service World-Class Web Development &amp; Design Services. Custom Web Development Like WordPress, HTML, CSS, and more. Visit Website." />
      </Helmet>
      <PagesBanner PageTitle="Services" BannerImg={BannerImg} />
      <section>
        <Container>
          <div className="sec-heading heading-center">
            <h2>Our Services</h2>
            <h4>Magnam dolores commodi suscipit <br />Necessitatibus consequatur.</h4>
            <span className="title-devider"></span>
          </div>
          <div className="text-center">
            <p>Sit sint consectetur velit. Quisquam quos quisquam cupiditate.</p>
            <p>Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.<br />Sit sint consectetur velit. Quisquam quos quisquam cupiditate.</p>
          </div>
        </Container>
      </section>
      <section className="services-list">
        <Container>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Search doctor</h3>
                <h4>App Maintenance</h4>
                <span className="title-devider"></span>
              </div>
              <strong>You are not allowed to redistribute this template ZIP file on any other website.</strong>
              <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver.</p>
              <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser1} alt="ReactJS Services" title="ReactJS Development Services" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Competitor analysis</h3>
                <span className="title-devider"></span>
              </div>
              <p>Butterfly specialize in Shopify custom development and each web mall that we come up with is unique. </p>
              <p>We specialize in Shopify website development services. Our experts build Shopify to customize theme UI design for a better look eCommerce store. Also, we integrate apps for any additional requirement. Our developer has SCSS expert-level knowledge, it is easy to customize the store themes.</p>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser2} alt="Shopify Development" title="Shopify Development Service" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Growth Suite</h3>
                <h4>Development</h4>
                <span className="title-devider"></span>
              </div>
              <h6>Speed Up Your Chrome Browser With Extensions</h6>
              <p>Drive Your Business Forward with Live Chat and Telephone Support combined with lead generation reporting and Analyzing Your Sales Funnel to Generate More Leads and Increase Conversions.</p>
              <p>we offer a Live Chat Support service that allows businesses to communicate with their customers in real-time and provide immediate support. This service is available for a 7-day free trial, simply click here and leave your information. </p>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser3} alt="Chrome Extension Development" title="Chrome Extension Services" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Start Package</h3>
                <span className="title-devider"></span>
              </div>
              <p>Get everything you need to provide top-notch customer support and drive sales growth with our Start Package. This package includes our Live Chat Services,</p>
              <p>With our Start Package, you get access to all of these services at an affordable price. Contact us today to get started!.</p>
              <ul className="icon-list">
                <li>Easy to edit</li>
                <li>Search engine friendly</li>
                <li>Highly customizable</li>
                <li>Most popular CMS in the world</li>
              </ul>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser4} alt="WordPress Services" title="WordPress Development Services" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Strongly believe</h3>
                <span className="title-devider"></span>
              </div>
              <p>we pride ourselves on offering our customers the highest level of quality when it comes to our service.</p>
              <p>Our live chat support and telephone representative support come with a team of experienced analysts who manage authentic reports and provide powerful tools for taking action to improve your results.</p>
              <ul className="icon-list">
                <li>Mobile-friendly</li>
                <li>Design for every device</li>
                <li>Positive UX</li>
                <li>Helps SEO</li>
              </ul>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser5} alt="Responsive" title="Responsive Services" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col">
              <div className="services-bg">
                <div className="sec-heading heading-center">
                  <h3>WooCommerce</h3>
                  <h4>= eCommerce</h4>
                  <span className="title-devider"></span>
                </div>
                <p>We understand the importance of effectively communicating with customers and strive to provide top-notch support that leads to growth and success for your business.</p>
                <p>By harnessing the strengths of our highly skilled team and advanced technology tools.</p>
                <ul className="icon-list">
                  <li>Powers over 30% of all online stores</li>
                  <li>Built on WordPress</li>
                  <li>Easy store management</li>
                  <li>Ecommerce optimization</li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser6} alt="WooCommerce Services" ttile="WooCommerce Services" width={512} height={400} />
            </Col>
          </Row>
          <Row className="services-item">
            <Col md={6} className="services-content-col"><div className="services-bg">
              <div className="sec-heading heading-center">
                <h3>Start Business</h3>
                <span className="title-devider"></span>
              </div>
              <p>Omri Cohen, MTV Europe Music Award winner and a freak of music! With experience of over 20 years, Omri specialized in sound design, production, mixing & mastering of electronic-based music.</p>
              <p>By developing his own unique work-flow, in the production domain as well as in the mixing-mastering field.</p>
              <ul className="icon-list">
                <li>Logo design</li>
                <li>Infographics</li>
                <li>Business card design</li>
                <li>Ebook creation</li>
              </ul>
            </div>
            </Col>
            <Col md={6} className="services-img-col">
              <LazyLoadImage src={ser7} alt="Graphic Design" ttile="Graphic Design" width={512} height={400} />
            </Col>
          </Row>
        </Container>
      </section>
      <ProjectsSlider portPageClass="service-portfolio" />
    </React.Fragment>
  );
};
export default Services;