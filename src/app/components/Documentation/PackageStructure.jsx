"use client";

import React from "react";
import { Icon } from "@iconify/react";

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const renderVerticalLines = (count) => (
    <div className="mt-2 flex flex-col justify-between gap-2">
      {Counts.slice(0, count).map((item) => (
        <p key={item} className="text-xl text-black dark:text-white/50">
          |
        </p>
      ))}
    </div>
  );

  return (
    <div id="structure" className="scroll-m-28 md:scroll-m-[130px]">
      <h3 className="mt-8 text-2xl font-semibold text-black dark:text-white">
        Package Structure
      </h3>

      <div className="mt-6 rounded-md border border-border p-6 pt-3 dark:border-dark_border">
        <div className="flex items-center gap-4">
          <h5 className="mb-1 mt-3 text-base font-medium">
            Venus Tailwind Nextjs Templates
          </h5>
        </div>

        <ul className="list-none ps-0 md:ps-5">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-black dark:text-white/50">|—</p>
              <span className="font-medium text-midnight_text dark:text-white/50">
                <Icon
                  icon="tabler:folder"
                  className="me-2 inline-block text-base text-primary"
                />
                packages
              </span>
            </div>

            <ul className="list-none ps-5">
              <li className="py-2">
                <div className="flex items-center gap-3">
                  <p className="text-xl text-black dark:text-white/50">|—</p>
                  <span className="font-medium text-midnight_text dark:text-white/50">
                    <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                    markdown
                  </span>
                </div>
              </li>

              <li className="py-2">
                <div className="flex items-center gap-3">
                  <p className="text-xl text-black dark:text-white/50">|—</p>
                  <span className="font-medium text-midnight_text dark:text-white/50">
                    <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                    public
                  </span>
                </div>
              </li>

              <li className="py-2">
                <div className="flex items-center gap-3">
                  <p className="text-xl text-black dark:text-white/50">|—</p>
                  <span className="font-medium text-midnight_text dark:text-white/50">
                    <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                    src
                  </span>
                </div>

                <div className="flex">
                  {renderVerticalLines(26)}

                  <ul className="list-none ps-5 md:ps-12">
                    <li className="py-2">
                      <div className="flex items-center gap-3">
                        <p className="text-xl text-black dark:text-white/50">|—</p>
                        <span className="font-medium text-midnight_text dark:text-white/50">
                          <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                          app
                        </span>
                      </div>

                      <div className="flex">
                        {renderVerticalLines(20)}

                        <ul className="list-none ps-5 md:ps-12">
                          <li className="py-2">
                            <div className="flex items-center gap-3">
                              <p className="text-xl text-black dark:text-white/50">|—</p>
                              <span className="font-medium text-midnight_text dark:text-white/50">
                                <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                (site)
                              </span>
                              <span className="ms-4 text-xs text-midnight_text dark:text-white/50">
                                (Contains all the pages)
                              </span>
                            </div>

                            <ul className="list-none ps-5 md:ps-12">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black dark:text-white/50">|—</p>
                                  <span className="font-medium text-midnight_text dark:text-white/50">
                                    <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                    (auth)
                                  </span>
                                </div>

                                <ul className="list-none ps-5 md:ps-12">
                                  <li className="py-2">
                                    <span className="font-medium text-midnight_text dark:text-white/50">
                                      <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                      signin
                                    </span>
                                  </li>
                                  <li className="py-2">
                                    <span className="font-medium text-midnight_text dark:text-white/50">
                                      <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                      signup
                                    </span>
                                  </li>
                                </ul>
                              </li>

                              <li className="py-2">
                                <span className="font-medium text-midnight_text dark:text-white/50">
                                  <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                  about
                                </span>
                              </li>

                              <li className="py-2">
                                <span className="font-medium text-midnight_text dark:text-white/50">
                                  <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                  blog
                                </span>
                              </li>

                              <li className="py-2">
                                <span className="font-medium text-midnight_text dark:text-white/50">
                                  <Icon icon="tabler:folder" className="me-2 inline-block text-base text-primary" />
                                  contact
                                </span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
