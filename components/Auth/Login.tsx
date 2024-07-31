/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAction } from "@/actions/login";
import SubmitButton from "../submit-button";

const Login = () => {


  const router = useRouter()

  return (
    <section className="bg-white {-- h-screen --}">
      <ToastContainer position="top-right" autoClose={2500} />
      <div className="flex flex-col justify-center h-full mx-auto lg:flex-row">
        <form
          action={loginAction}
          className="flex justify-center w-full bg-gray-100 lg:w-1/2 dark:bg-gray-900"
        >
          <div className="w-full px-2 mb-12 text-gray-800 sm:w-4/6 md:w-4/6 xl:w-2/3 dark:text-gray-100 sm:mb-0 sm:px-0">
            <div className="flex flex-col items-center justify-center px-2 mt-8 sm:py-8 sm:mt-0">
              <Image
                className="w-auto h-16"
                src="/images/logo_3.svg"
                width={297}
                height={169}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center px-2 pt-10">
              <h3 className="text-2xl font-bold leading-tight md:text-3xl sm:text-4xl">
                Login To Your Account
              </h3>
            </div>
            <div className="w-full px-2 mt-12 sm:px-6">
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="text-lg font-semibold leading-tight"
                >
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  className="w-full h-10 px-2 mt-2 text-gray-600 border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-masifunde dark:focus:border-masifunde dark:border-gray-700 dark:text-accent/80"
                  type="email"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold leading-tight"
                >
                  Password
                </label>
                <input
                  required
                  id="password"
                  name="password"
                  className="w-full h-10 px-2 mt-2 text-gray-600 border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-masifunde dark:focus:border-masifunde dark:border-gray-700"
                  type="password"
                />
              </div>
            </div>
            <div className="flex justify-between w-full px-2 pt-6 sm:px-6">

              <Link href="forgot-password" className="text-xs text-masifunde">
                Forgot Password?
              </Link>
            </div>
            <div className="px-2 sm:mb-16 sm:px-6">
              <SubmitButton
                className="w-full px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out rounded focus:outline-none sm:w-auto bg-masifunde hover:bg-masifunde/80"
              >
                Login to Your Account
              </SubmitButton>
            </div>
          </div>
        </form>

        <div className="relative flex flex-col w-full px-2 py-12 lg:w-1/2 bg-masifunde sm:p-12">
          <div className="flex flex-col justify-center flex-1">
            <div>
              <img
                src="https://dh-ui.s3.amazonaws.com/assets/team.png"
                alt="Login"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
