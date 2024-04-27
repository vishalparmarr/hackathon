import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
// internal
import ShopCta from "@components/cta";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ProductDetailsBreadcrumb from "@components/product-details/breadcrumb";
import { useGetProductQuery } from "src/redux/features/productApi";
import ProductDetailsArea from "@components/product-details/product-details-area";
import ErrorMessage from "@components/error-message/error";
import ProductDetailsTabArea from "@components/product-details/product-details-tab-area";
import RelatedProducts from "@components/product-details/related-products";
import { initialOrderQuantity } from "src/redux/features/cartSlice";
import PrdDetailsLoader from "@components/loader/details-loader";
// internal

export default function DynamicShopDetails({ query }) {
  const { data: product, isLoading, isError } = useGetProductQuery(query.id);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialOrderQuantity());
  }, [dispatch]);
  // remove backdrop
  useLayoutEffect(() => {
    const removeBackdrop = () => {
      const modalBackdrop = document.querySelector(".modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.remove();
        document.body.classList.remove("modal-open");
        document.body.removeAttribute("style");
      }
    };
    router.events.on("routeChangeComplete", removeBackdrop);
    return () => {
      router.events.off("routeChangeComplete", removeBackdrop);
    };
  }, [router]);
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="There was an error" />;
  }

  if (!isLoading && !isError) {
    content = (
      <>
        <ProductDetailsBreadcrumb title={product.title} />
        <ProductDetailsArea product={product} />
        <ProductDetailsTabArea product={product} />
        <RelatedProducts id={product._id} tags={product.tags} />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle={"Shop Details"} />
      <Header style_2={true} />
      {content}
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
