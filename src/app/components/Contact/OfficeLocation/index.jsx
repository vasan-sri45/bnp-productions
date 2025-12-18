"use client";

import React from "react";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section className="bg-primary md:py-24 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Pune Head Office */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
          <div className="col-span-3">
            <h2 className="max-w-56 text-[40px] leading-tight font-bold text-white">
              Pune Head Office
            </h2>
          </div>

          <div className="col-span-3">
            <p className="max-w-64 text-xl sm:text-2xl leading-7 font-normal text-white/50">
              4292 Mapleview Drive Greenfield Zip code 38230
            </p>
          </div>

          <div className="col-span-3">
            <a
              href="mailto:headoffice@venus.com"
              onClick={(e) => e.preventDefault()}
              onAuxClick={() => handleEmailClick("headoffice@venus.com")}
              className="cursor-pointer text-xl sm:text-2xl font-medium underline text-white hover:opacity-80"
            >
              headoffice@venus.com
            </a>

            <a
              href="tel:731-621-5503"
              onClick={(e) => e.preventDefault()}
              onAuxClick={() => handlePhoneClick("731-621-5503")}
              className="mt-2 flex w-fit cursor-pointer items-center gap-2 text-xl sm:text-2xl text-white/80 hover:text-opacity-100"
            >
              <span className="text-white/40">Call</span>
              731-621-5503
            </a>
          </div>
        </div>

        {/* Bengaluru Office */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-7 pt-12">
          <div className="col-span-3">
            <h2 className="max-w-52 text-[40px] leading-tight font-bold text-white">
              Bengaluru Office
            </h2>
          </div>

          <div className="col-span-3">
            <p className="max-w-64 text-xl sm:text-2xl leading-7 font-normal text-white/50">
              3502 Marcus Street Geraldine Zip code 35974
            </p>
          </div>

          <div className="col-span-3">
            <a
              href="mailto:Office@venus.com"
              onClick={(e) => e.preventDefault()}
              onAuxClick={() => handleEmailClick("Office@venus.com")}
              className="cursor-pointer text-xl sm:text-2xl font-medium underline text-white hover:opacity-80"
            >
              Office@venus.com
            </a>

            <a
              href="tel:731-235-7993"
              onClick={(e) => e.preventDefault()}
              onAuxClick={() => handlePhoneClick("731-235-7993")}
              className="mt-2 flex w-fit cursor-pointer items-center gap-2 text-xl sm:text-2xl text-white/80 hover:text-opacity-100"
            >
              <span className="text-white/40">Call</span>
              731-235-7993
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
