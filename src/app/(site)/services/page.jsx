"use client";

import React from "react";
import HeroSub from "../../components/SharedComponent/HeroSub";
import Services from "../../components/Home/Service";

const ServicesPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  return (
    <>
      <HeroSub
        title="Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
    </>
  );
};

export default ServicesPage;
