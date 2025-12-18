"use client";

import { useContext, useState } from "react";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import toast, { Toaster } from "react-hot-toast";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const SignUp = ({ signUpOpen }) => {
  const [loading, setLoading] = useState(false);
  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const finalData = Object.fromEntries(formData.entries());

    try {
      // Replace with your real API endpoint
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully registered");
        signUpOpen?.(false);
        authDialog?.setIsUserRegistered(true);

        setTimeout(() => {
          authDialog?.setIsUserRegistered(false);
        }, 1100);
      } else {
        toast.error(data?.message || "Registration failed");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border" />
        <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-darklight">
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-transparent px-5 py-3 text-base text-dark placeholder:text-gray-300 outline-hidden transition focus:border-primary dark:text-white"
          />
        </div>

        <div className="mb-[22px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-transparent px-5 py-3 text-base text-dark placeholder:text-gray-300 outline-hidden transition focus:border-primary dark:text-white"
          />
        </div>

        <div className="mb-[22px]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-md border border-border dark:border-dark_border bg-transparent px-5 py-3 text-base text-dark placeholder:text-gray-300 outline-hidden transition focus:border-primary dark:text-white"
          />
        </div>

        <div className="mb-9">
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-base text-white transition hover:bg-darkprimary disabled:opacity-50"
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-base">
        By creating an account you agree with our{" "}
        <a
          href="#!"
          onClick={(e) => e.preventDefault()}
          className="text-primary hover:underline"
        >
          Privacy
        </a>{" "}
        and{" "}
        <a
          href="#!"
          onClick={(e) => e.preventDefault()}
          className="text-primary hover:underline"
        >
          Policy
        </a>
      </p>

      <p className="text-body-secondary text-base">
        Already have an account?
        <a
          href="#!"
          onClick={(e) => e.preventDefault()}
          className="pl-2 text-primary hover:underline"
        >
          Sign In
        </a>
      </p>

      <Toaster />
    </>
  );
};

export default SignUp;
