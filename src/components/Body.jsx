import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Company from './pages/Company';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import NoMatch from './pages/Nomatch';
const Body = () => {   
  return (
    <Routes>
      <Route path='*' element={<NoMatch />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<Company/>}/>
      <Route path="/project" element={<Portfolio/>}/>
      <Route path="/project/:portSlug" element={<PortfolioDetails/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/sitemap" element={<Sitemap/>}/>
    </Routes>
  );
};
export default Body;