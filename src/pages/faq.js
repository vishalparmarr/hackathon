import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import FaqBreadcrumb from "@components/faq/faq-breadcrumb";
import FaqArea from "@components/faq/faq-area";


export default function Faq() {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <Header style_2={true} />
      <FaqBreadcrumb/>
      <FaqArea/>
      <Footer />
    </Wrapper>
  )
}

