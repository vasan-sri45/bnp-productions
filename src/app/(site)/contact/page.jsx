import React from "react";
import ContactForm from "../../components/Contact/Form";
import ContactInfo from "../../components/Contact/ContactInfo";
import Location from "../../components/Contact/OfficeLocation";
import HeroSub from "../../components/SharedComponent/HeroSub";

const ContactPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Ready to turn your brand into a content powerhouse?"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      {/* <Location /> */}
    </>
  );
};

export default ContactPage;
