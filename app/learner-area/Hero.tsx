/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
function Hero() {
  return (
    <div className="overflow-y-hidden bg-white">
      <div className="px-8 py-12 mx-auto max-w-7xl lg:px-0">
        <div className="flex justify-center w-full">
          <div className="w-full px-5 py-4 overflow-hidden rounded-md md:w-11/12 xl:w-10/12 bg-gradient-to-r from-accent to-yellow-600 md:py-8 md:px-8 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-col-reverse flex-wrap items-center md:flex-row">
                <div className="flex flex-col items-center justify-center w-full pt-4 pb-6 md:w-2/3 md:pb-0 md:pr-6 md:block md:pt-0">
                  <div>
                    <h1

                      className="text-xl font-black text-center text-white md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 md:text-left"
                    >
                      Are you a learner and would like to engage with other
                      fellow changemakers?
                    </h1>

                    <p className="mt-3 leading-7 text-white text-md lg:text-lg">
                      You can join our Facebook group by clicking on the link
                      below
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/changemaker_network/"
                      aria-label="Join the community"
                      className="flex items-center px-4 py-3 mt-5 space-x-2 text-sm font-bold bg-white rounded-lg lg:mt-8 lg:py-4 lg:px-8 text-slate-800 lg:text-lg xl:text-xl hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Instagram <FaInstagramSquare className="w-6 h-6 ml-3" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=100083194785525"
                      aria-label="Join the community"
                      className="flex items-center px-4 py-3 mt-5 space-x-2 text-sm font-bold bg-white rounded-lg lg:mt-8 lg:py-4 lg:px-8 text-slate-800 lg:text-lg xl:text-xl hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Facebook <FaFacebookSquare className="w-6 h-6 ml-3" />
                    </a>
                  </div>
                </div>
                <div className="w-2/3 md:w-1/3">
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
