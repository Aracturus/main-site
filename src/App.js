import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./mediaquery.css";
import Navbar from "./Navbar";
import HeadingContent from "./HeadingContent";
import HeadingParagraph from "./HeadingParagraph";
import MainCard from "./MainCard";
import FirstPage from "./FirstPage";
import Brands from "./Brands";
import Profile from "./Profile";
import SliderGallery from "./SliderGallery";
import SliderGalleryReverse from "./SliderGalleryReverse";
import MainContent from "./MainContent";
import Clients from "./Clients";
import Bigbtn from "./Bigbtn";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <HeadingContent class="text-center text-capitalize display-3 w-50 mx-auto headingContent">
        Get the attention your brand deserves
      </HeadingContent>

      <HeadingParagraph class="mt-3 mx-auto text-center text-capitalize headingPara">
        Get quality design without the cost & complexity
      </HeadingParagraph>

      <MainCard />
      <FirstPage />
      <Brands />
      <Profile />

      <HeadingContent class="text-center text-capitalize display-3 w-50 mt-lg-5  mx-auto headingContent gallery">
        Gallery
      </HeadingContent>

      <SliderGallery />
      <SliderGalleryReverse />
      <HeadingContent class="text-center text-capitalize display-3 w-lg-50 w-75 mx-auto slider-reverse-position">
        We can design just about anything
      </HeadingContent>
      {/* <Sidebar /> */}

      <MainContent />
      <Clients />
      <HeadingContent class="text-center text-capitalize display-3 w-50 mx-auto headingContent after-heading">
        Let's create a measurable impact on your business
      </HeadingContent>
      <Bigbtn />
      <Footer />
    </>
  );
};
export default App;
