/* eslint-disable @next/next/no-img-element */
"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");


  const supabase = createClient()

  const form = useRef(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();



    if (typeof email !== "string" ) {
      throw new Error("Please provide valid details");
    }


const { data, error } = await supabase.auth.resetPasswordForEmail(email);


    if (error) {
      alert(error.message);

    }



    if(data) {
      alert('We sent a password reset link to your email address.')
    }

  };
  return (
    <section className="bg-white {-- h-screen --}">
      <div className="flex flex-col justify-center h-full mx-auto lg:flex-row">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex justify-center w-full bg-gray-100 lg:w-1/2 dark:bg-gray-900"
        >
          <div className="w-full px-2 mb-12 text-gray-800 sm:w-4/6 md:w-4/6 xl:w-2/3 dark:text-gray-100 sm:mb-0 sm:px-0">
            <div className="flex flex-col items-center justify-center px-2 mt-8 sm:py-20 sm:mt-0">
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
               Forgot Password
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-2 mt-2 text-gray-600 border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-masifunde"
                  type="email"
                />
              </div>

            </div>
            <div className="flex justify-between w-full px-2 pt-6 sm:px-6">


            </div>
            <div className="px-2 sm:mb-16 sm:px-6">
              <button
                type="submit"
                className="w-full px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out rounded focus:outline-none sm:w-auto bg-masifunde hover:bg-masifunde/80"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="relative flex flex-col w-full px-2 py-12 lg:w-1/2 bg-masifunde sm:p-12">
          <div className="flex flex-col justify-center flex-1">
            <div>
              <img
                src="https://dh-ui.s3.amazonaws.com/assets/team.png"
                alt="Forgot Password"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword;
