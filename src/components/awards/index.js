import React from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from "next/link";
// internal
import award_img_1 from "@assets/img/award/award-1.jpg";
import award_img_2 from "@assets/img/award/award-2.jpg";
import award_img_3 from "@assets/img/award/award-3.jpg";
import award_img_4 from "@assets/img/award/award-4.jpg";
import {RightArrowTwo} from "@svg/index";

// data
const award_data = [
  {
    id: "one",
    topic: "FREE SHIPPING",
    title: "Modern painting award jump",
    data_src: award_img_1,
    subtitle: "Runner Up - “ Decor of the week “",
    delay: ".3s",
  },
  {
    id: "two",
    topic: "FREE RETURN",
    title: "People's choice: best design",
    data_src: award_img_2,
    subtitle: "Runner Up - “ Decor of the week “",
    delay: ".5s",
  },
  {
    id: "three",
    topic: "SECURE PAYMENT",
    title: "Webby's, Site of the Year",
    data_src: award_img_3,
    subtitle: "Runner Up - “ Decor of the week “",
    delay: ".7s",
  },
  {
    id: "four",
    topic: "BEST QUALITY",
    title: "Awwwards site of the day",
    data_src: award_img_4,
    subtitle: "Runner Up - “ Decor of the week “",
    delay: ".7s",
  },
];

const Awards = () => {
  return (
    <>
      <section className={`award__area pt-120 pb-120 pb-10 white-bg`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className={`section__title-wrapper-9 mb-55 text-center`}>
                <h3 className="section__title-9">Our Awards.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="award__item-wrapper-9">
                {award_data.map((item, i) => {
                  const { id, data_src, delay, subtitle, title, topic } = item;
                  return (
                    <React.Fragment key={i}>
                      <div
                        className="award__item-9 p-relative wow fadeInUp"
                        data-wow-delay={delay}
                        data-wow-duration="1s"
                      >
                        <div className="row align-items-center">
                          <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="award__topic">
                              <p>{topic}</p>
                            </div>
                          </div>
                          <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="award__content-9">
                              <h3 className="award__title-9">
                                <Link
                                  id={id}
                                  href="#"
                                  className="tp-img-reveal tp-img-reveal-item"
                                >
                                  {title}
                                </Link>
                              </h3>
                              <p>{subtitle}</p>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="award__btn-9 text-md-end">
                              <Link
                                href="#"
                                className="career-link-btn"
                              >
                                <RightArrowTwo/>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ReactTooltip anchorId={id} type='light'>
                        <Image src={data_src} alt="src" />
                      </ReactTooltip>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Awards), { ssr: false });
