// "use client";

// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { portfolioinfo } from "../../../../api/data";

// const PortfolioCard = () => {
//   const settings = {
//     autoplay: true,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1320, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 4 } },
//       { breakpoint: 992, settings: { slidesToShow: 3 } },
//       { breakpoint: 600, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div id="portfolio" className="dark:bg-darkmode">
//       <div className="lg:px-9 m-auto px-0 max-w-[1600px]">
//         <Slider {...settings}>
//           {portfolioinfo.map((item, index) => (
//             <Link key={item.slug} href={`/portfolio/${item.slug}`}>
//               <div className={`px-3 group ${index % 2 !== 0 ? "lg:mt-24" : ""}`}>
                
//                 <div className="relative overflow-hidden rounded-lg">
//                   <Image
//                     src={item.image}
//                     alt={item.alt}
//                     width={1200}
//                     height={800}
//                     className="w-full h-auto transition-all duration-500 group-hover:scale-110"
//                     unoptimized
//                   />
//                 </div>

//                 <h4 className="pt-9 pb-1 text-2xl font-bold text-midnight_text dark:text-white group-hover:text-primary">
//                   {item.title}
//                 </h4>

//                 <p className="text-lg text-secondary dark:text-white/50 group-hover:text-primary">
//                   {item.info}
//                 </p>

//               </div>
//             </Link>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;


// "use client";

// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { portfolioinfo } from "../../../../api/data";

// const PortfolioCard = () => {
//   const settings = {
//     autoplay: true,
//     autoplaySpeed: 2500,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1320, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } }, // ✅ Mobile
//       { breakpoint: 480, settings: { slidesToShow: 1 } }, // ✅ Mobile
//     ],
//   };

//   return (
//     <div className="dark:bg-darkmode">
//       <div className="max-w-[1600px] mx-auto lg:px-9 px-4">
//         <Slider {...settings}>
//           {portfolioinfo.map((item, index) => (
//             <Link key={item.slug} href={`/portfolio/${item.slug}`}>
//               <div
//                 className={`
//                   px-2 sm:px-3 group
//                   ${index % 2 !== 0 ? "lg:mt-24" : ""}
//                 `}
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden rounded-xl">
//                   <Image
//                     src={item.image}
//                     alt={item.alt}
//                     width={1200}
//                     height={800}
//                     className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
//                     unoptimized
//                   />
//                 </div>

//                 {/* Text */}
//                 <div className="text-center lg:text-left">
//                   <h4 className="
//                     pt-4 lg:pt-9
//                     text-base sm:text-lg lg:text-2xl
//                     font-semibold lg:font-bold
//                     text-midnight_text dark:text-white
//                     group-hover:text-primary
//                   ">
//                     {item.title}
//                   </h4>

//                   <p className="
//                     text-sm lg:text-lg
//                     text-secondary dark:text-white/50
//                     group-hover:text-primary
//                   ">
//                     {item.info}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;



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
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1320, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // ✅ Mobile
      { breakpoint: 480, settings: { slidesToShow: 2 } }, // ✅ Mobile
    ],
  };

  return (
    <div className="dark:bg-darkmode overflow-hidden">
      <div className="max-w-[1600px] mx-auto lg:px-9 px-4">
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={item.slug} className="px-2">
              <Link href={`/portfolio/${item.slug}`} className="block h-full">
                
                <div
                  className={`
                    group h-full
                    ${index % 2 !== 0 ? "lg:mt-24" : ""}
                  `}
                >
                  {/* Logo / Image */}
                  <div className="relative overflow-hidden rounded-xl bg-white dark:bg-darkmode shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={500}
                      height={300}
                      className="
                        w-full h-auto
                        object-contain
                        p-4
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                      unoptimized
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center mt-3">
                    <h4 className="
                      text-sm sm:text-base lg:text-xl
                      font-semibold
                      text-midnight_text dark:text-white
                      group-hover:text-primary
                    ">
                      {item.title}
                    </h4>

                    <p className="
                      text-xs sm:text-sm lg:text-base
                      text-secondary dark:text-white/50
                    ">
                      {item.info}
                    </p>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioCard;
