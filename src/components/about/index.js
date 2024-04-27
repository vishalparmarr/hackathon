import React from "react";
// internal
import TextArea from "./text-area";
import Services from "./services";
import AboutGallery from "./about-gallery";
import AboutFaqs from "./about-faqs";
import Teams from "@components/teams";
import Brands from "@components/brands";
import Awards from "@components/awards";
import BreadcrumbTwo from "@components/common/breadcrumb/breadcrumb-2";

const About = () => {
  return (
    <React.Fragment>
      <BreadcrumbTwo
        subtitle="About us"
        title={
          <>
            Welcome to our <br /> Harri Shop
          </>
        }
      />
      <TextArea />
      <Services />
      <AboutGallery />
      <Awards />
      <AboutFaqs />
      <Teams />
      <Brands />
    </React.Fragment>
  );
};

export default About;
