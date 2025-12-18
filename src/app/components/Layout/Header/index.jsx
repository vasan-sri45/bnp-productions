"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import useMounted from "../../../hooks/useMounted";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { headerData } from "./Navigation/menuData";

const Header = () => {
  /* ✅ ALL hooks at the TOP, ALWAYS */
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef(null);

  /* Effects */
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ✅ ONLY AFTER all hooks */
  if (!mounted) {
    return <div className="h-24 w-full" />; // placeholder, NOT null
  }

  return (
    <header
      className={`fixed top-0 z-50 h-24 w-full transition-all ${
        sticky
          ? "bg-white shadow-lg dark:bg-darklight"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between p-6">
        <Logo />

        <nav className="hidden lg:flex gap-6">
          {headerData.map((item, i) => (
            <HeaderLink key={i} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button
            className="lg:hidden"
            onClick={() => setNavbarOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-darkmode transition-transform ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-4 flex flex-col gap-4">
          {headerData.map((item, i) => (
            <MobileHeaderLink key={i} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
