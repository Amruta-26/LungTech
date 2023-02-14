import React from "react";
import "./LandingPage.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Banner from "../../Components/Banner/Banner";
import Service from "../../Components/Service/Service"
// import Footer from "../../Components/Footer/Footer"
// import Process from "../../Components/Process/Process";

const LandingPage = () => {
  return (
    <div>
      <div className="nav-banner">
        <NavigationBar className="nav" />
        {/* we need a banner component which will be placed just after the navbar */}
        <Banner className="banner" />
      </div>
      <br />
      <div className="sevices">
        <Service className="service"/>
      </div>
      <br/>
    </div>
  );
};

export default LandingPage;
