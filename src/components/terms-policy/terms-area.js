import Link from "next/link";
import React from "react";

const TermsArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">
                  Last updated: September 18, 2022
                </h4>
                <p>
                  These are the Terms and Conditions governing the use of this
                  Service and the agreement that operates between You and the
                  Company. These Terms and Conditions set out the rights and
                  obligations of all users regarding the use of the Service.Your
                  access to and use of the Service is conditioned on Your
                  acceptance of and compliance with these Terms and Conditions.
                  These Terms and Conditions apply to all visitors, users and
                  others who access or use the Service.
                </p>
                <p>
                  By using or accessing the Services in any manner, you
                  acknowledge that you accept the practices and policies
                  outlined in this Privacy Policy, and you hereby consent that
                  Harry will collect, use, and share your information in the
                  following ways. Remember that your use of Services is at all
                  times subject to the Terms as set forth at
                  https://harry.com/legal/terms, which incorporate this Privacy
                  Policy. Any terms Harry uses in this Privacy Policy without
                  defining them have the definitions given to them in the Terms.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Definitions</h3>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">
                  Purposes of these Terms and Conditions:
                </h3>
                <ul>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &quot;control&quot; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong>Country</strong> refers to: California, United
                    States
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to Harry.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Website</strong> refers to Harry, accessible from{" "}
                    <Link
                      href="/"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      harry.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>You may contact us at any time via:</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:harry.com">support@harry.com</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                      target="_blank"
                    >
                      harry PTY LTD <br /> 4270, Brisbane, Australia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsArea;
