"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);

  const PackageVersions = [
    {
      id: "1",
      packageName: "NextJs",
      img: "/images/documentation/Categories=Nextjs.svg",
      version: "15.1.1",
    },
    {
      id: "2",
      packageName: "React",
      img: "/images/documentation/Categories=React.svg",
      version: "19.0.0",
    },
    {
      id: "3",
      packageName: "Tailwindcss",
      img: "/images/documentation/Categories=Tailwind.svg",
      version: "4.0.0",
    },
    {
      id: "4",
      packageName: "NextAuth",
      img: "/images/documentation/nextauth.png",
      version: "4.24.11",
    },
    {
      id: "5",
      packageName: "Typescript",
      img: "/images/documentation/Categories=Typescript.svg",
      version: "5.6.3",
    },
  ];

  return (
    <>
      <div id="version" className="scroll-m-28 md:scroll-m-[130px]">
        {/* Overlay */}
        {docNavbarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex items-center justify-between">
          <h3 className="mt-4 mb-6 text-2xl font-semibold text-black dark:text-white">
            Package Versions
          </h3>

          <button
            type="button"
            aria-label="Open docs menu"
            onClick={() => setDocNavbarOpen(true)}
            className="block p-0 lg:hidden"
          >
            <Icon icon="gg:menu-right" className="text-3xl" />
          </button>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-0 rounded-md border border-border p-6 dark:border-dark_border lg:flex-nowrap">
          {PackageVersions.map((item) => (
            <div
              key={item.id}
              className="text-center lg:w-1/5 md:w-full border-b border-border dark:border-dark_border lg:border-b-0 lg:border-e lg:last:border-e-0 last:border-b-0"
            >
              <img
                src={item.img}
                alt={`${item.packageName} logo`}
                className="mx-auto h-10 w-10 object-contain"
              />
              <h5 className="mt-3.5 text-2xl font-bold dark:text-white">
                {`v${item.version}`}
              </h5>
              <p className="text-base font-medium text-midnight_text dark:text-white/50">
                {item.packageName}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-1">
          <p className="text-base font-medium text-midnight_text dark:text-white/50">
            Venus Tailwind NextJs Template is built with Tailwindcss and Nextjs.
          </p>
          <p className="text-base font-medium text-midnight_text dark:text-white/50">
            This theme is ready to use and you can totally customize it as per
            your requirement.
          </p>
          <p className="text-base font-medium text-midnight_text dark:text-white/50">
            To customize, you should have knowledge of NextJs, ReactJs,
            Tailwind, and JSX.
          </p>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 block h-full w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 dark:bg-darklight lg:hidden ${
          docNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-white">
            Docs Menu
          </h2>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setDocNavbarOpen(false)}
            className="rounded p-1 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:text-white"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};
