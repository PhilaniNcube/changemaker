"use client"

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useSupabase } from "./SupabaseProvider";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const {supabase} = useSupabase()

  let form = useRef(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event)

    if(typeof email !== 'string' || typeof password !== 'string') {
        throw new Error('Please provide valid details')
    }

    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error) {
     alert(error.message)
     console.log({error})
    }

    console.log({data, error})



    // Place your API call here to submit your payload.
  };
  return (
    <section className="bg-white {-- h-screen --}">
      <div className="mx-auto flex justify-center flex-col lg:flex-row h-full">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="w-full lg:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-900"
        >
          <div className="w-full sm:w-4/6 md:w-4/6 xl:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 px-2 sm:px-0">
            <div className="sm:py-20 px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
              <Image
                className="h-16 w-auto"
                src="/images/logo_3.svg"
                width={297}
                height={169}
                alt="Logo"
              />
            </div>
            <div className="pt-10 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight">
                Login To Your Account
              </h3>
            </div>
            <div className="mt-12 w-full px-2 sm:px-6">
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
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-accent dark:focus:border-accent dark:border-gray-700accent/80ray-800 dark:teaccent/800 border-gray-300 border shadow"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-accent dark:focus:border-accent dark:border-gray-700accent/80ray-800 dark:teaccent/800 border-gray-300 border shadow"
                  type="password"
                />
              </div>
            </div>
            <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
              <div className="flex items-center">
                <input
                  id="rememberme"
                  name="rememberme"
                  className="w-3 h-3 mr-2"
                  type="checkbox"
                />
                <label htmlFor="rememberme" className="text-xs">
                  Remember Me
                </label>
              </div>
              <Link href="forgot-password" className="text-xs text-accent">
                Forgot Password?
              </Link>
            </div>
            <div className="px-2 sm:mb-16 sm:px-6">
              <button
                type="submit"
                className="focus:outline-none w-full sm:w-auto bg-accent transition duration-150 ease-in-out hover:bg-accent/80 rounded text-white px-8 py-3 text-sm mt-6"
              >
                Login to Your Account
              </button>
            </div>
          </div>
        </form>

        <div className="w-full lg:w-1/2 bg-accent px-2 py-12 sm:p-12 flex flex-col relative">
          <div className="flex-1 flex flex-col justify-center">
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
