import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import CartBreadcrumb from "@components/cart/cart-breadcrumb";
import ShopCta from "@components/cta";
import WishlistArea from "@components/wishlist/wishlist-area";

export default function Wishlist() {
  return (
    <Wrapper>
      <SEO pageTitle={"Wishlist"} />
      <Header style_2={true} />
      <CartBreadcrumb title='My Wishlist' subtitle='Wishlist' />
      <WishlistArea/>
      <ShopCta/>
      <Footer/>
    </Wrapper>
  );
}
