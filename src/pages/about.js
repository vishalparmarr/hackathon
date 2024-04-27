import React from "react";
import SEO from "@components/seo";
import ShopCta from "@components/cta";
import AboutArea from "@components/about";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const About = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"About"} />
      <Header style_2={true} />
      <AboutArea />
      <ShopCta />
      <Footer />
    </Wrapper>
  );
};

export default About;
