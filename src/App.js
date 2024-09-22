import React from "react";
import Footer from "./components/footer/footer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/ContactUs/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/Homepage";
import Redirect from "./components/Redirect";
import Seller from "./components/Seller/Seller";
import AllCompanies from "./components/Homepage/Brands/AllCompanies";
import OurClients from "./components/Homepage/Brands/OurClients";
import Products from "./components/CatalogueN/Products";
import OrderFor from "./components/CatalogueN/OrderForm";
import DiwaliPacks from "./components/DiwaliPacks/DiwaliPacks";
import MoodPack from "./components/DiwaliPacks/MoodPack";
import TreatPack from "./components/DiwaliPacks/TreatPack";
import TwistPack from "./components/DiwaliPacks/TwistPack";
import LightupPack from "./components/DiwaliPacks/LightupPack";

function App() {
  return (
    <>
      <div className="page">
        <Router>
          <ScrollToTop>
            {/* <Navbar /> */}
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    {" "}
                    <Homepage /> <Footer />{" "}
                  </>
                }
              />
              <Route
                path="/collections/men/products/mens-5-year-essential-tee"
                exact
                element={
                  <Redirect url="https://store.hustlemad.com/products/mens-5-year-essential-tee" />
                }
              />
              <Route
                path="/collections/men/products/hoodie"
                exact
                element={
                  <Redirect url="https://store.hustlemad.com/collections/men/products/hoodie" />
                }
              />
              <Route
                path="/about"
                exact
                element={
                  <>
                    <Navbar />
                    <AboutUs /> <Footer />{" "}
                  </>
                }
              />
              <Route
                path="/contact"
                exact
                element={
                  <>
                    <Navbar />
                    <Contact /> <Footer />{" "}
                  </>
                }
              />
              <Route
                path="/faq"
                exact
                element={
                  <>
                    <Navbar />
                    <FAQ /> <Footer />{" "}
                  </>
                }
              />
              <Route
                path="/catalogue"
                exact
                element={
                  <>
                    <Navbar />
                    <Products />
                  </>
                }
              />
              <Route
                path="/order"
                exact
                element={
                  <>
                    <Navbar />
                    <OrderFor />
                  </>
                }
              />
              <Route
                path="/partner"
                exact
                element={
                  <>
                    <Navbar />
                    <Seller /> <Footer />
                  </>
                }
              />
              <Route
                path="/allcompanies"
                exact
                element={
                  <>
                    <Navbar />
                    <AllCompanies /> <Footer />
                  </>
                }
              />
              <Route
                path="/clients"
                exact
                element={
                  <>
                    <Navbar />
                    <OurClients /> <Footer />
                  </>
                }
              />
              <Route
                path="/diwalipacks"
                exact
                element={
                  <>
                    <Navbar />
                    <DiwaliPacks />
                  </>
                }
              />
              <Route
                path="/diwalipacks/moodpack"
                exact
                element={
                  <>
                    <Navbar />
                    <MoodPack />
                  </>
                }
              />
              <Route
                path="/diwalipacks/treatpack"
                exact
                element={
                  <>
                    <Navbar />
                    <TreatPack />
                  </>
                }
              />
              <Route
                path="/diwalipacks/twistpack"
                exact
                element={
                  <>
                    <Navbar />
                    <TwistPack />
                  </>
                }
              />
              <Route
                path="/diwalipacks/lightuppack"
                exact
                element={
                  <>
                    <Navbar />
                    <LightupPack />
                  </>
                }
              />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default App;
