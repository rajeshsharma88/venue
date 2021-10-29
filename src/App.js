import React from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./Components/header_footer/header";
import Footer from "./Components/header_footer/footer";
import Featured from "./Components/featured";
import VenueNfo from "./Components/venueNfo";
import HighLights from "./Components/highlights";
import Pricing from "./Components/pricing";
import Location from "./Components/location/Index";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <HighLights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
