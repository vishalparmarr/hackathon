import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import LoginArea from "@components/login-register/login-area";


export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle={"Login"} />
      <Header style_2={true} />
      <LoginArea/>
      <Footer/>
    </Wrapper>
  );
}
