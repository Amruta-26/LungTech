import React from "react";
import "./LandingPage.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Banner from "../../Components/Banner/Banner";
// import Footer from "../../Components/Footer/Footer"
// import Process from "../../Components/Process/Process";

const LandingPage = () => {
  return (
        <div>

          <NavigationBar className="nav" />
       
          {/* we need a banner component which will be placed just after the navbar */}
          <Banner className="banner" />
          {/* <h2 className="text-center ">Our Process</h2> */}
          {/* <Process className="process" /> */}
  
          {/* footer */}
          {/* <Footer /> */}
        </div>
  );
};

export default LandingPage;
