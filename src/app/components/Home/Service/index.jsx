// import React from 'react';
// import { Icon } from '@iconify/react';

// const Services = () => {
//   const services = [
//     { icon: "🎥", title: "Video Production", points: ["TV Commercials", "Corporate Films", "Reels & Brand Shoots"] },
//     { icon: "📱", title: "Social Media Marketing", points: ["Strategy, Creatives, Copywriting & Execution"] },
//     { icon: "💰", title: "Performance Marketing", points: ["Meta & Google Ads", "Lead Generation Campaigns"] },
//     { icon: "🌟", title: "Personal Branding", points: ["Actor/Founder Branding", "BTS Content", "Consulting + Training", "Brand Workshops"] },
//     { icon: "💻", title: "Web Solutions", points: ["Websites, Web Apps, Integrations", "Fast, mobile-optimized systems built for conversion"] }
//   ];

//   const handleGetStarted = (serviceTitle) => {
//     // Handle click - you can add your routing logic here
//     console.log(`Get started with ${serviceTitle}`);
//     // For example: navigate to service page or open modal
//   };

//   return (
//     <section className='bg-section dark:bg-darklight' id='services'>
//       <div className='container mx-auto max-w-6xl px-4'>
//         <div className='flex gap-2 items-center justify-center'>
//           <span className='w-3 h-3 rounded-full bg-success'></span>
//           <span className='font-medium text-midnight_text text-xs sm:text-sm dark:text-white/50'>
//             OUR SERVICES – "WHAT WE OFFER"
//           </span>
//         </div>

//         <h2 className='text-2xl sm:text-4xl leading-snug font-bold text-midnight_text text-center pt-6 pb-12 dark:text-white'>
//           Everything your brand needs to stand out — and scale.
//         </h2>

//         <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-7'>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className='bg-white dark:bg-darkmode text-center py-10 px-6 rounded-xl shadow-service flex flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow'
//               onClick={() => handleGetStarted(service.title)}
//             >
//               <div className="text-4xl">{service.icon}</div>

//               <h3 className='text-xl font-bold dark:text-white'>{service.title}</h3>

//               <ul className='text-sm font-normal dark:text-white/60 leading-relaxed space-y-1'>
//                 {service.points.map((point, i) => <li key={i}>• {point}</li>)}
//               </ul>

//               <div className="text-primary hover:text-blue-600 font-medium flex items-center justify-center gap-1">
//                 Get Started
//                 <Icon icon='ei:chevron-right' width='22' height='22'/>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import Link from "next/link";

const Services = () => {
  const services = [
    { icon: "🎥", title: "Video Production", points: ["TV Commercials", "Corporate Films", "Reels & Brand Shoots"] },
    { icon: "📱", title: "Social Media Marketing", points: ["Strategy, Creatives, Copywriting & Execution"] },
    { icon: "💰", title: "Performance Marketing", points: ["Meta & Google Ads", "Lead Generation Campaigns"] },
    { icon: "🌟", title: "Personal Branding", points: ["Actor/Founder Branding", "BTS Content", "Consulting + Training", "Brand Workshops"] },
    { icon: "💻", title: "Web Solutions", points: ["Websites, Web Apps, Integrations", "Fast, mobile-optimized systems built for conversion"] }
  ];

  const handleGetStarted = (serviceTitle) => {
    console.log(`Get started with ${serviceTitle}`);
  };

  return (
    <section className="bg-section dark:bg-darklight" id="services">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex gap-2 items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-success"></span>
          <span className="font-medium text-midnight_text text-xs sm:text-sm dark:text-white/50">
            OUR SERVICES – "WHAT WE OFFER"
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-center pt-6 pb-12 dark:text-white">
          Everything your brand needs to stand out — and scale.
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkmode text-center py-10 px-6 rounded-xl shadow-service cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleGetStarted(service.title)}
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="text-xl font-bold dark:text-white">
                {service.title}
              </h3>

              <ul className="text-sm dark:text-white/60 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* <div className="text-primary flex items-center justify-center gap-1">
                Get Started
                <Icon icon="ei:chevron-right" width="22" height="22" />
              </div> */}

                  <Link
      href="/contact"   
      className="text-primary flex items-center justify-center gap-1"
    >
      Get Started
      <Icon icon="ei:chevron-right" width="22" height="22" />
    </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
