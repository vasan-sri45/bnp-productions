"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { portfolioinfo } from "../../../../api/data";

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1320, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="portfolio" className="dark:bg-darkmode">
      <div className="lg:px-9 m-auto px-0 max-w-[1600px]">
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`}>
              <div className={`px-3 group ${index % 2 !== 0 ? "lg:mt-24" : ""}`}>
                
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto transition-all duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>

                <h4 className="pt-9 pb-1 text-2xl font-bold text-midnight_text dark:text-white group-hover:text-primary">
                  {item.title}
                </h4>

                <p className="text-lg text-secondary dark:text-white/50 group-hover:text-primary">
                  {item.info}
                </p>

              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioCard;
