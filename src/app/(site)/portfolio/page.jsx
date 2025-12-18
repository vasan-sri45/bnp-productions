import React from "react";
import Portfolio from "../../components/portfolio/PortfolioList";
import HeroSub from "../../components/SharedComponent/HeroSub";

const PortfolioList = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Our Clients" },
  ];

  return (
    <>
      <HeroSub
        title="Our Clients"
        description="TRUSTED BY LEADING BRANDS "
        breadcrumbLinks={breadcrumbLinks}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioList;
