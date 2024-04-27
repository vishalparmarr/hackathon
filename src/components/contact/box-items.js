import React from "react";
import Image from "next/image";
// internal
import SocialLinks from "@components/social";
import icon_1 from "@assets/img/contact/icon/contact-icon-1.png";
import icon_2 from "@assets/img/contact/icon/contact-icon-3.png";
import icon_3 from "@assets/img/contact/icon/contact-icon-2.png";

// single item
function SingleItem({ icon, title, content }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="contact__item text-center mb-30 transition-3 white-bg">
        <div className="contact__icon">
          <Image src={icon} alt="icon" />
        </div>
        <div className="contact__content">
          <span className="contact-item-subtitle">{title}</span>
          {content}
        </div>
      </div>
    </div>
  );
}

const BoxItems = () => {
  return (
    <div
      className={`contact__item-area contact__translate-2`}
    >
      <div className="container">
        <div className="row">
          <SingleItem
            icon={icon_1}
            title="Contact"
            content={
              <>
                <p>
                  <a href="mailto:location@website.com">location@website.com</a>
                </p>
                <p>
                  <a href="tel:602-762-472-96">+(602) 762 472 96</a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_2}
            title="Location"
            content={
              <>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                    target="_blank"
                  >
                    88 New South Head Rd, Triple, New York
                  </a>
                </p>
              </>
            }
          />
          <SingleItem
            icon={icon_3}
            title="Social Media"
            content={
              <>
                {" "}
                <p>Follow on social media</p>
                <div className="contact__social">
                  <SocialLinks />
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BoxItems;
