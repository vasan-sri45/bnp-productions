"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section className="dark:bg-darkmode md:pb-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form */}
          <div className="col-span-6">
            <h2 className="max-w-72 mb-9 text-[40px] leading-tight font-bold text-midnight_text dark:text-white">
              Get Online Consultation
            </h2>

            <form
              className="flex flex-wrap w-full m-auto justify-between"
              onSubmit={handleSubmit}
            >
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="first-name" className="pb-3 inline-block text-base">
                    First Name*
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>

                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="last-name" className="pb-3 inline-block text-base">
                    Last Name*
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="email" className="pb-3 inline-block text-base">
                    Email address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>

                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="mobile" className="pb-3 inline-block text-base">
                    Mobile Number*
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="date" className="pb-3 inline-block text-base">
                    Date*
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>

                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="time" className="pb-3 inline-block text-base">
                    Time*
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 text-base rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  className="mt-4 inline-block rounded-lg bg-primary py-4 px-8 text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  Make an appointment
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="col-span-6">
            <img
              src="/images/contact-page/contact.jpg"
              alt="Contact"
              className="w-full h-auto rounded-lg object-cover"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
