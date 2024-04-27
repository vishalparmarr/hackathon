import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import CartBreadcrumb from "@components/cart/cart-breadcrumb";
import CartArea from "@components/cart/cart-area";
import ShopCta from "@components/cta";


export default function Cart() {
  return (
    <Wrapper>
      <SEO pageTitle={"Cart"} />
      <Header style_2={true} />
      <CartBreadcrumb title='My Cart' subtitle='Cart' />
      <CartArea/>
      <ShopCta/>
      <Footer />
    </Wrapper>
  );
}
