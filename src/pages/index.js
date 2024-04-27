import React from "react";
// internal
import SEO from "@components/seo";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import HeroBanner from "@components/hero-banner";
import ShopCategoryArea from "@components/shop-category/shop-category";
import ShopProducts from "@components/products";
import OfferPopularProduct from "@components/offer-product";
import ShopBanner from "@components/shop-banner";
import ShopFeature from "@components/shop-feature";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";


const HomeShop = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Shop"} />
      <Header />
      <HeroBanner />
      <ShopCategoryArea />
      <ShopProducts />
      <OfferPopularProduct />
      <ShopBanner />
      <ShopFeature />
      <ShopCta />
      <Footer />
    </Wrapper>
  );
};

export default HomeShop;
