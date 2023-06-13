import React from "react";
import { Container, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import forZeoroFor from '../../assets/img/page-no-found.svg';
import forZeoroForMen1 from '../../assets/img/404-men1.svg';
import forZeoroForMen2 from '../../assets/img/404-men2.svg';
const NoMatch = () => {
  return (
    <React.Fragment>     
      <Helmet>
        <title>Page not found - 404 Page | Butterfly</title>
      </Helmet>
      <section className="no-page-height">
        <Container>
          <h1>ERROR</h1><br/>
          <div className="noimg-sec">
            <img className="no-img1" src={forZeoroForMen1} alt="404" title="404" width={150} height={214}/>
            <img className="no-img" src={forZeoroFor} alt="404" title="404"/>
            <img className="no-img2" src={forZeoroForMen2} alt="404" title="404" width={120} height={234}/>
          </div>   
          <h3>This page is outside of the Universe</h3>
          <p>The page you are trying to access doesn't exist or has been moved.<br/>
          Try going back to our homepage.</p>
          <Button as={Link} to="/">Go to Homepage</Button><br/><br/>
          <small>If you think this is an error, contact our team at <Link to="/contact">Contact Us</Link></small>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default NoMatch;