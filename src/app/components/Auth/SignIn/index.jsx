"use client";

import { useContext, useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import toast, { Toaster } from "react-hot-toast";
import AuthDialogContext from "@/app/context/AuthDialogContext";

const Signin = ({ signInOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authDialog = useContext(AuthDialogContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with real sign-in logic
    const result = { error: null, status: 200 };

    if (result?.error) {
      setError(result.error);
      authDialog?.setIsFailedDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsFailedDialogOpen(false);
      }, 1100);
      return;
    }

    if (result?.status === 200) {
      signInOpen?.(false);
      authDialog?.setIsSuccessDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsSuccessDialogOpen(false);
      }, 1100);
    } else {
      authDialog?.setIsFailedDialogOpen(true);
      setTimeout(() => {
        authDialog?.setIsFailedDialogOpen(false);
      }, 1100);
    }
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border" />
        <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-darklight">
          OR
        </span>
        <Toaster />
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border border-border dark:border-dark_border bg-transparent px-5 py-3 text-base text-dark placeholder:text-gray-400 outline-hidden transition focus:border-primary dark:text-white"
          />
        </div>

        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-border dark:border-dark_border bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary dark:text-white"
          />
        </div>

        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition hover:bg-darkprimary"
          >
            Sign In
          </button>
        </div>
      </form>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white"
      >
        Forget Password?
      </a>

      <p className="text-body-secondary text-base">
        Not a member yet?{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-primary hover:underline"
        >
          Sign Up
        </a>
      </p>
    </>
  );
};

export default Signin;
