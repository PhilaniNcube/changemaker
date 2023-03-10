import React from "react";

const Story = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto  px-8 lg:px-0 ">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">
                Learn more about us
              </h2>
            </div>
          </div>
          <div>
            <img
              className="rounded-md lg:block hidden w-full object-cover aspect-video"
              src="/images/home_banner.jpeg"
              alt="A person Coding"
            />
            <img
              className="rounded-md lg:hidden sm:block hidden w-full object-cover aspect-video"
              src="/images/home_banner.jpeg"
              alt="A person Coding"
            />
            <img
              className="rounded-md sm:hidden block w-full object-cover aspect-video"
              src="/images/home_banner.jpeg"
              alt="A person Coding"
            />
          </div>
        </div>

        <div className="lg:mt-14 sm:mt-7 mt-14">
          <div className="flex lg:flex-row flex-col items-center">
            <div className="w-full lg:w-7/12">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                Our Story
              </h2>
              <p className="pr-6 font-medium text-base leading-7 text-gray-600 mt-6 w-full xl:w-9/12">
                Masifunde is a non-governmental organisation founded in 2004,
                which runs development programmes for children and youth in
                Nelson Mandela Bay, South Africa. Development programmes for
                children and youth in Nelson Mandela Bay, South Africa. One of
                those programs include Masifunde’s Changemaker Network.
              </p>
              <p className="pr-6 font-medium text-base leading-7 text-gray-600 w-full xl:w-9/12 mt-6">
                Masifunde’s Changemaker Network is a learner-led intervention
                aimed to capacitate and empower high-school learners on topics
                such as school safety, violence and bullying amongst others. It
                also builds confidence, boldness and enhances other skills
                throughout the program so that they are equipped with knowledge
                and skills to advocate for these social topics and in this way
                bring about positive change in their respective schools and
                communities.
              </p>
            </div>
            <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
              <div className="w-full grid sm:grid-cols-2 grid-cols-1">
                {/* <!-- Company Founded --> */}
                <div className="pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        Organisation founded
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Masifunde was founded in 2004
                      </p>
                    </div>
                    <div className="-mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#f99d1c" />
                        <circle cx="42" cy="6" r="1.5" stroke="#f99d1c" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div></div>

                {/* <!-- 500k For Responsiveness STARTS--> */}
                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        NMB Goals
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Aiming for 45 schools
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#f99d1c" />
                        <circle cx="42" cy="6" r="1.5" stroke="#f99d1c" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* <!-- 500k For Responsiveness ENDS--> */}

                <div className="border-r-2 border-gray-200"></div>

                {/* <!-- 500k monthly Views --> */}

                <div className="sm:block hidden pb-7">
                  <div className="flex justify-between">
                    <div className="-mt-1 -ml-2">
                      <svg
                        className=""
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5.5"
                          transform="rotate(-180 6 6)"
                          stroke="#f99d1c"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 18 6)"
                          stroke="#f99d1c"
                        />
                        <circle
                          cx="42"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 42 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 26 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="50"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 50 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 34 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="58"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 58 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        NMB Goals
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Aiming for 45 schools
                      </p>
                    </div>
                  </div>
                </div>

                <div></div>

                {/* <!-- 200k Users For Responsiveness STARTS--> */}

                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">
                        Spark Magazine
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Compiled by researchers and learners
                      </p>
                    </div>
                    <div className="-mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#f99d1c" />
                        <circle cx="42" cy="6" r="1.5" stroke="#f99d1c" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- 200k Users For Responsiveness ENDS--> */}

                <div></div>

                {/* <!-- 200k Users --> */}

                <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Spark Magazine
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        Compiled by researchers and learners
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#f99d1c" />
                        <circle cx="42" cy="6" r="1.5" stroke="#f99d1c" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div></div>

                {/* <!-- Activation Workshops For Responsiveness STARTS--> */}

                <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                  <div className="flex justify-between">
                    <div className="w-auto">
                      <h2 className="font-semibold text-xl leading-5 text-gray-800">
                        Activation Workshops
                      </h2>
                      <p className="font-normal text-base leading-6 text-gray-600 mt-2">
                        45 minutes Activation Workshops facilitated to Grade 9
                        learners
                      </p>
                    </div>
                    <div className="mt-1 -mr-2">
                      <svg
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="54" cy="6" r="5.5" stroke="#f99d1c" />
                        <circle cx="42" cy="6" r="1.5" stroke="#f99d1c" />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="10"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="2"
                          cy="6"
                          r="1.5"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Activation Workshops For Responsiveness ENDS--> */}

                <div className=""></div>

                {/* <!-- Activation Workshops --> */}

                <div className="sm:block hidden pb-5">
                  <div className="flex justify-between">
                    <div className="-mt-1 -ml-2">
                      <svg
                        className=""
                        width="60"
                        height="12"
                        viewBox="0 0 60 12"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5.5"
                          transform="rotate(-180 6 6)"
                          stroke="#f99d1c"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 18 6)"
                          stroke="#f99d1c"
                        />
                        <circle
                          cx="42"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 42 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="26"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 26 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.7"
                        />
                        <circle
                          cx="50"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 50 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx="34"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 34 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.5"
                        />
                        <circle
                          cx="58"
                          cy="6"
                          r="1.5"
                          transform="rotate(-180 58 6)"
                          stroke="#f99d1c"
                          strokeOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="ml-auto w-auto">
                      <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-gray-800">
                        Activation Workshops
                      </h2>
                      <p className="w-auto font-normal text-base leading-6 text-gray-600 mt-2">
                        45 minutes Activation Workshops facilitated to Grade 9
                        learners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
