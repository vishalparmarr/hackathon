import { useState } from "react";
// internal
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Header from "@layout/header";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import NiceSelect from "@ui/NiceSelect";
import ErrorMessage from "@components/error-message/error";
import SingleProduct from "@components/products/single-product";
import ProductLoader from "@components/loader/product-loader";
import EmptyCart from "@components/common/sidebar/cart-sidebar/empty-cart";
import { useGetShowingProductsQuery } from "src/redux/features/productApi";
import LoadMoreBtn from "@components/load-more-btn";
import BreadcrumbTwo from "@components/common/breadcrumb/breadcrumb-2";

export default function Search({ query }) {
  const searchText = query?.query;
  const { data: products, isError, isLoading } = useGetShowingProductsQuery();
  const [shortValue, setShortValue] = useState("");
  const perView = 8;
  const [next, setNext] = useState(perView);

  // selectShortHandler
  const shortHandler = (e) => {
    setShortValue(e.value);
  };

  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 4);
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <ProductLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="There was an error" />;
  }

  if (!isLoading && !isError && products?.products?.length === 0) {
    content = <ErrorMessage message="No products found!" />;
  }

  if (!isLoading && !isError && products?.products?.length > 0) {
    let all_products = products.products;
    let product_items = all_products.filter((prd) =>
      prd.title.toLowerCase().includes(searchText?.toLowerCase())
    );
    // Price low to high
    if (shortValue === "Price low to high") {
      product_items = all_products
        .slice()
        .sort((a, b) => Number(a.originalPrice) - Number(b.originalPrice));
    }
    // Price high to low
    if (shortValue === "Price high to low") {
      product_items = all_products
        .slice()
        .sort((a, b) => Number(b.originalPrice) - Number(a.originalPrice));
    }
    if (product_items.length === 0) {
      content = (
        <div className="pb-100">
          <EmptyCart search_prd={true} />
        </div>
      );
    } else {
      content = (
        <section className="shop__area pb-60 pt-100">
          <div className="container">
            <div className="shop__top mb-50">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5">
                  <div className="shop__result">
                    <p>Total {product_items.length} items Found</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <div className="shop__sort d-flex flex-wrap justify-content-md-end align-items-center">
                    <div className="shop__sort-item">
                      <div className="shop__sort-select">
                        <NiceSelect
                          options={[
                            { value: "Short By Price", text: "Short By Price" },
                            {
                              value: "Price low to high",
                              text: "Price low to high",
                            },
                            {
                              value: "Price high to low",
                              text: "Price high to low",
                            },
                          ]}
                          defaultCurrent={0}
                          onChange={shortHandler}
                          name="Short By Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop__main">
              <div className="row">
                {product_items?.slice(0, next)?.map((product) => (
                  <div
                    key={product._id}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <SingleProduct product={product} />
                  </div>
                ))}
              </div>
            </div>
            {next < product_items?.length && (
              <div className="row">
                <div className="col-xxl-12">
                  <LoadMoreBtn handleLoadMore={handleLoadMore} />
                </div>
              </div>
            )}
          </div>
        </section>
      );
    }
  }

  return (
    <Wrapper>
      <SEO pageTitle={"Search Products"} />
      <Header style_2={true} />
      <BreadcrumbTwo title="Search Result" />
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
