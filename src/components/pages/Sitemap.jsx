import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import SitemapData from './../../data/sitemap.json';
const Sitemap = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sitemap Page</title>
        <meta name="description" content="Nested component" />
        <meta name="keywords" content="my super keyword, another great keyword, a killer keyword" />
      </Helmet>
      <section>
        <Container>
          <ul>
            {SitemapData.map((data) => {
              return (
                <li key={data.id}><Link to={data.url}>{data.name}</Link></li>
              );
            })}
          </ul>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Sitemap;