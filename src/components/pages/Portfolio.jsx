import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PagesBanner from '../widgets/PagesBanner';
import BannerImg from '../../assets/img/portfolio-banner.jpg';
const Portfolio = () => {
  const [Listing, setListing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://hikebranding.com/wp-json/wp/v2/posts");
      setListing(await res.json());
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Web Development Projects, Website Design Projects, It Company | Butterfly</title>
        <meta name="description" content="Discover Butterfly's expertise in Web Development, Custom WordPress design and development, and Front end projects. Explore Projects." />
      </Helmet>
      <PagesBanner PageTitle="Projects" BannerImg={BannerImg} />
      <section>
        <Container>
          <div className="sec-heading heading-center">
            <h2>Projects</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.<br /> Sit sint consectetur velit.</p>
            <span className="title-devider"></span>
          </div>
          <Row>
            {Listing.map((data) => {
              return (
                <Col sm={6} lg={4} key={data.id}>
                  <Link className="portfolio-block" to={`/project/${data.slug}`}>
                    <div className="portfolio-img"><LazyLoadImage src={data.yoast_head_json.og_image[0].url} alt={data.title.rendered} title={data.title.rendered} width="416" height="312" /></div>
                    <strong>{data.title.rendered.split(' ').slice(0, 4).join(' ')}</strong>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Portfolio;