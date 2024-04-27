import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import ForgotArea from "@components/forgot/forgot-area";


export default function Forgot() {
  return (
    <Wrapper>
      <SEO pageTitle={"Forgot"} />
      <Header style_2={true} />
      <ForgotArea/>
      <Footer/>
    </Wrapper>
  );
}
