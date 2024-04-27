import React from "react";

const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">Effective date: May 25, 2023</h4>
                <p>
                  Harry knows that you care about how your personal information
                  is used and shared, and Harry takes your privacy seriously.
                  Please read the following to learn more about Harry Privacy
                  Policy (“Privacy Policy”). This Privacy Policy also tells you
                  about your rights and choices with respect to your Personal
                  Information, and how you can reach us to update your contact
                  information or get answers to questions you may have about our
                  privacy practices.
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
                <h3 className="policy__title">Information Collection</h3>
                <p>
                  You can visit and enjoy our Website without disclosing any
                  Personal Information about yourself. However, for the Service
                  to work properly we will need you to share with us certain
                  Personal Information.
                </p>

                <p>
                  For the purposes of this Privacy Policy, “Personal
                  Information” means information that identifies, relates to,
                  describes, is reasonably capable of being associated with, or
                  could be reasonably linked, directly or indirectly, with a
                  particular consumer, device or household. It does not include
                  de-identified or aggregate information, or public information
                  lawfully available from governmental records.
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">Use of Personal Information</h3>
                <ul>
                  <li>To provide and maintain the Service;</li>
                  <li>To detect, prevent and address technical issues;</li>
                  <li>
                    To register you as a user and to provide the services you
                    require;
                  </li>
                  <li>
                    To decide whether to offer you a Capchase product or
                    service;
                  </li>
                  <li>To notify you about changes to our Service;</li>
                  <li>To provide customer care and support;</li>
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

export default PolicyArea;
