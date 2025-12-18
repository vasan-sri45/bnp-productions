import React from "react";

const NotFound = () => {
  return (
    <section className="bg-white pt-8 pb-20 dark:bg-darkmode">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* Image Section */}
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto max-w-[357px] text-center">
              <img
                src="/images/svgs/404.svg"
                alt="404 Not Found"
                className="mx-auto w-full h-auto"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                We Can&apos;t Seem to Find The Page You&apos;re Looking For.
              </h3>

              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>

              <a
                href="/"
                className="inline-block rounded-md bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-blue-700"
              >
                Go To Home
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotFound;
