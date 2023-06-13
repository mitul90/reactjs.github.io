import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ScrollToTop from "./components/widgets/pageChangeTop";
const App = () => {  
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
export default App;