/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
function Hero() {
  return (
    <div className="bg-white overflow-y-hidden">
      <div className="mx-auto max-w-7xl py-12 px-8 lg:px-0">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-accent to-yellow-600 rounded-md overflow-hidden md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div>
                    <h1
                      role="heading"
                      className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black md:text-left text-center"
                    >
                      Are you a learner and would like to engage with other
                      fellow changemakers?
                    </h1>

                    <p className="text-md lg:text-lg mt-3 text-white leading-7">
                      You can join our Facebook group by clicking on the link
                      below
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="https://www.instagram.com/changemaker_network/"
                      aria-label="Join the community"
                      className="mt-5 flex items-center space-x-2 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-slate-800 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Instagram <FaInstagramSquare className="ml-3 h-6 w-6" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/profile.php?id=100083194785525"
                      aria-label="Join the community"
                      className="mt-5 flex items-center space-x-2 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-slate-800 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Facebook <FaFacebookSquare className="ml-3 h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 w-2/3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                    alt="cartoon avatars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
