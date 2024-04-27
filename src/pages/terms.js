import SEO from "@components/seo";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import SectionTop from "@components/terms-policy/section-top-bar";
import Footer from "@layout/footer";
import TermsArea from "@components/terms-policy/terms-area";

export default function Terms() {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms"} />
      <Header style_2={true} />
      <SectionTop
        title="Terms and Conditions"
        subtitle="The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
      />
      <TermsArea/>
      <Footer />
    </Wrapper>
  );
}
