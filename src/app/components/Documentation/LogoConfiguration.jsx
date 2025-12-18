import React from "react";

export const LogoConfiguration = () => {
  return (
    <>
      <h3 className="text-black text-xl font-semibold mt-8 dark:text-white">
        Logo
      </h3>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-white/50 flex lg:flex-row flex-col">
          1. Change Logo over here:&nbsp;
          <span className="font-semibold text-base overflow-x-auto">
            src/components/Layout/Header/Logo/index.tsx
          </span>
        </p>

        <div className="py-4 px-3 rounded-md bg-black mt-8">
          <div className="text-sm text-gray-400">
            <p>&lt;Link href=&quot;/&quot;&gt;</p>
            <p className="ms-2">&lt;Image</p>
            <p className="ms-3">src=&quot;/images/logo/logo.svg&quot;</p>
            <p className="ms-3">alt=&quot;logo&quot;</p>
            <p className="ms-3">width=&#123;160&#125;</p>
            <p className="ms-3">height=&#123;50&#125;</p>
            <p className="ms-3">quality=&#123;100&#125;</p>
            <p className="ms-3">className=&apos;dark:hidden&apos;</p>
            <p className="ms-2">/&gt;</p>
            <p className="ms-2">&lt;Image</p>
            <p className="ms-5">
              src=&quot;/images/footer/footer-logo-white.svg&quot;
            </p>
            <p className="ms-5">alt=&quot;logo&quot;</p>
            <p className="ms-5">width=&#123;160&#125;</p>
            <p className="ms-5">height=&#123;50&#125;</p>
            <p className="ms-5">quality=&#123;100&#125;</p>
            <p className="ms-5">className=&apos;dark:block hidden&apos;</p>
            <p className="ms-2">/&gt;</p>
            <p className="ms-2">&lt;/Link&gt;</p>
          </div>
        </div>
      </div>
    </>
  );
};
