import React from "react";

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                It started with a <br /> bang now we are here.
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p>
                Ut at maximus magna. Vestibulum interdum sapien in facilisis
                imperdiet. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Proin ac placerat
                risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum
                mattis diam non luctus elementum. Cras sollicitudin, nisi in
                semper viverra, felis diam consequat mi, quis tincidunt ligula
              </p>

              <p>
                Nam nibh diam, varius quis lectus eget, laoreet cursus metus.
                morbi augue lectus, dapibus eget justo nec, consectetur auctor
                nis luctus neque.!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
