import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeam = ({item}) => {
  const {img, mail, name, social_links, title } = item || {};
  return (
    <div className={`team__item`}>
      <div className="team__thumb w-img fix transition-3">
        <div className="tp-thumb-overlay wow"></div>
        <Link href="#">
          <Image
            src={img}
            alt="team-img"
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="team__action">
          <ul>
            <li>
              <a href={mail}>
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-share-alt"></i>
              </a>
              <div className="team__social">
                <ul>
                  {social_links.map((l, i) => (
                    <li key={i}>
                      <a href={l.link} target={l.target}>
                        <i className={l.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="team__content">
        <h3 className="team__title">
          <Link href="#">{name}</Link>
        </h3>
        <span className="team__designation">{title}</span>
      </div>
    </div>
  );
};

export default SingleTeam;
