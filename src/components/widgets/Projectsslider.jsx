import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import projectDatas from '../../data/portfolio.json';

const ProjectsSlider = (props) => {
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  const [Listing, setListing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://hikebranding.com/wp-json/wp/v2/posts");
      setListing(await res.json());
    };
    fetchData();
  }, []);
  return (
    <section className={'port-slide ' + props.portPageClass}>
      <Container>
        <div className="sec-heading heading-center">
          <h2>Projects</h2>
          <h5>Explore our recent projects</h5>
          <span className="title-devider"></span>
        </div>
        <Swiper loop={true} autoHeight={true} spaceBetween={0} autoplay={{ delay: 5000, disableOnInteraction: true }} breakpoints={{350: {slidesPerView: 2,}, 768: {slidesPerView: 3,},992: {slidesPerView:4,},}}>
          {Listing.map((data) => {
            return (
              <SwiperSlide key={data.id}><Link className="port-slide-item" to={`/project/${data.slug}`}><div className="port-slide-image"><LazyLoadImage src={data.yoast_head_json.og_image[0].url} alt={data.name} title={data.name} width={data.yoast_head_json.og_image[0].width} height={data.yoast_head_json.og_image[0].height} /></div><strong>{data.title.rendered.split(' ').slice(0, 4).join(' ')}</strong></Link></SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
}
export default ProjectsSlider;