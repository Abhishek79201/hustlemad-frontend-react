import React, { useState } from "react";
import Info from "./Homepage/Info/Info";
import Packs from "./Homepage/packs/packs";
import Testimonials from "./Homepage/Testimonials/Testimonials";
import Features from "./Homepage/features/features";
import Home from "./Homepage/Home/Home";
import Subscription from "./Homepage/Subscription/subscription";
import Brands from "./Homepage/Brands/Brands";
import Consumers from "./Homepage/Consumers/Consumers";
import About from "./Homepage/About/About";
import Schedule from "./Homepage/Schedule/Schedule";

function Homepage() {
  document.title = "Hustlemad";
  const [pack,setPack] = useState("");
  const onPackSelectHandler = (value)=>setPack(value);
  return (
    <div>
      <Home />
      <Consumers />
      <About />
      <Schedule />
      <Brands />
      {/* <Subscription /> */}
      <Features />
      <Testimonials />
      <Packs onPackSelectHandler={onPackSelectHandler}/>
      <Info pack={pack}/>
    </div>
  );
}

export default Homepage;
