// external
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// internal
import { Line, ShapeLine } from "@svg/index";
import SingleTeam from "./single-team";
import team_data from "./team-data";


const Teams = () => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[]);
  return (
    <>
      <section
        className={`team__area pt-110 pb-110`}
      >
        <div className="container">
            <div className="row align-items-end">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-7">
                <div className="section__title-wrapper mb-60">
                  <h3 className="section__title">
                    One{" "}
                    <span className="section__title-highlight">
                      Team <ShapeLine />{" "}
                    </span>
                    ,<br />
                    Many Talents
                  </h3>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-5">
                <div className="team__join mb-70 text-sm-end">
                  <Link href="#" className="tp-link-btn-2">
                    Join Our Team
                    <span>
                      <Line />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          <div className="row">
            <div className="col-xxl-12">
              <div
                className="team__slider wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1.2s"
              >
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  className="team__slider-active swiper-container"
                  loop={loop}
                  modules={[Pagination]}
                  pagination={{
                    el: ".team-slider-dot",
                    clickable: true,
                  }}
                  breakpoints={{
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {team_data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <SingleTeam item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="team-slider-dot tp-swiper-dot text-center mt-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
