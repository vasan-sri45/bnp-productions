"use client";

import { useEffect, useState } from "react";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("version");

  const getNavItem = (item) => {
    setNavItem(item);
  };

  useEffect(() => {
    // Handle hash changes from browser navigation if needed
  }, [navItem]);

  const DocsNav = [
    {
      id: 1,
      navItem: "Package Versions",
      hash: "version",
    },
    {
      id: 2,
      navItem: "Package Structure",
      hash: "structure",
    },
    {
      id: 3,
      navItem: "Quick Start",
      hash: "start",
    },
    {
      id: 4,
      navItem: "Project Configuration",
      hash: "configuration",
    },
  ];

  const handleNavClick = (hash, e) => {
    e.preventDefault();
    getNavItem(hash);

    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed mt-4 flex flex-col items-start gap-0.5 pe-4">
      {DocsNav.map((item) => (
        <a
          key={item.id}
          href={`#${item.hash}`}
          onClick={(e) => handleNavClick(item.hash, e)}
          className={`min-w-full rounded-md px-4 py-2.5 text-base font-medium text-midnight_text hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 ${
            item.hash === navItem
              ? "bg-primary text-white hover:bg-primary hover:text-white dark:text-opacity-100"
              : "dark:text-white/60"
          }`}
        >
          {item.navItem}
        </a>
      ))}
    </div>
  );
};
