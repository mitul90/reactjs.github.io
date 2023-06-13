import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectsSlider from '../widgets/Projectsslider';
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import PagesBanner from '../widgets/PagesBanner';
import BannerImg from '../../assets/img/portfolio-banner.jpg';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const PortfolioDetails = () => {
  const { portSlug } = useParams();
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch API data
    fetch('https://hikebranding.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
        setIsLoading(false);
      });

    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const thisProject = apiData.find(port => port.slug === portSlug);
    const date = new Date(thisProject.date);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const finaldate = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
    return (
      <React.Fragment>
        <Helmet>
          <title>Web Development Projects, Website Design Projects, It Company | Butterfly</title>
          <meta name="description" content="Discover Butterfly's expertise in Web Development, Custom WordPress design and development, and Front end projects. Explore Projects." />
        </Helmet>

        {!!(thisProject.title.rendered) ? <PagesBanner PageTitle={thisProject.title.rendered} BannerImg={BannerImg} /> : null}
        <section>
          <Container>
            {!!(thisProject.title.rendered) ? <h2>{thisProject.title.rendered}</h2> : null}
            <Row>
              <Col lg={4}>
                <div className="single-port-img" id="gallery">
                  <a href={thisProject.yoast_head_json.og_image[0].url}
                    data-pswp-width={thisProject.yoast_head_json.og_image[0].width}
                    data-pswp-height={thisProject.yoast_head_json.og_image[0].height}
                    target="_blank"
                    key={'gallery-' + thisProject.id}
                    rel="noreferrer">
                    <img src={thisProject.yoast_head_json.og_image[0].url} alt="" />
                  </a>
                </div>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <span href="blog-single.html">Admin</span></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <span href="blog-single.html"><time>{finaldate}</time></span></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <span href="blog-single.html">12 Comments</span></li>
                  </ul>
                </div>
              </Col>
              <Col lg={8}>
                <div className='postContent' dangerouslySetInnerHTML={{ __html: thisProject.content.rendered }}></div>
              </Col>
            </Row>
          </Container>
        </section>
        <ProjectsSlider portPageClass="detail-portfolio" />
      </React.Fragment>
    );
  }


};
export default PortfolioDetails;