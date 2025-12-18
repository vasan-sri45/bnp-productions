import React from "react";

const Hero = () => {
  return (
    <section className="relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10">
        {/* Left column */}
        <div
          className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full bg-success" />
            <span className="font-medium text-midnight_text text-sm dark:text-white/50">
              Brew N Play Production
            </span>
          </div>

          <h1 className="text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]">
            We Brew your Content, You Play in the market N win
          </h1>

          <p className="text-grey dark:text-white/70 text-x1 font-semibold">
            A full-service digital production &amp; marketing studio helping brands
            create, scale, and convert — all under one roof.
          </p>

          <a
            href="#learn-more"
            className="py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8"
          >
            Get Started
          </a>

          <div className="flex items-center mt-12 gap-4">
            <div className="flex items-center">
              <img
                src="/images/hero/hero-profile-1.jpg"
                alt="hero-profile-1"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border border-solid border-white -ml-0 object-cover"
              />
              <img
                src="/images/hero/hero-profile-2.jpg"
                alt="hero-profile-2"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border border-solid border-white -ml-3 object-cover"
              />
              <img
                src="/images/hero/hero-profile-3.jpg"
                alt="hero-profile-3"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border border-solid border-white -ml-3 object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-normal text-grey max-w-56">
                Need help?{" "}
                <a href="#contact" className="text-primary hover:text-blue-700">
                  Contact our experts
                </a>{" "}
                View Our Work, Let&apos;s Talk.
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-[70%] before:-translate-y-[40%] lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <img
            src="/images/hero/hero-image.png"
            alt="hero-image"
            width={350}
            height={150}
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
