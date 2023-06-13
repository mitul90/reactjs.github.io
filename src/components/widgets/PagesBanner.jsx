import React from "react";
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';
import ZeroGif from '../../assets/img/0.gif';
const PagesBanner = (props) => {
  return (
    <section className="cmn-banner">
      <Container className="text-center">
        <h1>{props.PageTitle}</h1>
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>    
          {window.location.href.indexOf("project/") > -1 ? <li className="breadcrumb-item"><Link to="/project">Project</Link></li> : null}
          <li className="breadcrumb-item active">{props.PageTitle}</li>
        </ul>
      </Container>
      <img className="div-img" src={ZeroGif} style={{ backgroundImage: `url(${props.BannerImg})` }} alt="Banner Img" title="Baner Image" />
    </section>
  );
};
export default PagesBanner;