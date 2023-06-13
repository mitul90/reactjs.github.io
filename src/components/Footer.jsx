import React from "react";
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import SitemapData from './../data/sitemap.json';
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <Container>
          <div className="footer-top">
            <ul className="list-unstyled footer-menu">
              {SitemapData.slice(1).map((data) => {
                return (
                  <li key={data.id}><Link to={data.url}>{data.name}</Link></li>
                );
              })}
            </ul>
            <a className="mail-link" href="mailto:info@butterfly.com">info@butterfly.com</a>
          </div>
          <div className="copyright">Copyright @2023 <strong>Butterfly</strong>. All rights reserved.</div>
        </Container>
      </footer>
    </React.Fragment>
  );
};
export default Footer;