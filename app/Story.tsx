/* eslint-disable @next/next/no-img-element */

import Timeline from "@/components/Timeline/Timeline";
import { HomepageContent } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";


const Story = ({ content , children}: { content: HomepageContent, children:ReactNode }) => {
  return (
    <section className="py-10 bg-white">
      <div className="px-8 mx-auto max-w-7xl ">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full px-6 text-white rounded-md bg-neutral-800 bg-opacity-40 sm:px-12">
              <h2 className="text-3xl font-bold leading-7 text-center lg:text-4xl lg:leading-9">
                Change starts with you
              </h2>
              <p className="text-sm text-center text-white">
                Linathi Mangether sparking change at Soqhayisa Secondary School
                in Gqeberha
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              width={1920}
              height={1080}
              className="rounded-md lg:block hidden w-full object-cover aspect-[7/3] object-top "
              src="/images/home_banner.jpeg"
              alt="Student"
            />
            <img
              className="rounded-md lg:hidden sm:block hidden w-full object-cover aspect-[5/3]"
              src="/images/home_banner.jpeg"
              alt="Student"
            />
            <img
              className="rounded-md sm:hidden block w-full object-cover aspect-[5/3]"
              src="/images/home_banner.jpeg"
              alt="Student"
            />
          </div>
        </div>

        <div className="lg:mt-14 sm:mt-7 mt-14">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full text-justify lg:w-6/12">
              <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
                {content.homepageStory}
              </h2>
              <div
                id="content"
                className="w-full pr-6 mt-6 text-base font-medium leading-7 text-gray-600 xl:w-9/12"
              >
                <PortableText value={content?.storyContent!} />
              </div>
              {/* <p>
                masifunde is an NGO founded in 2004, which runs holistic,
                learner-centred community development programmes for children
                and youth in Walmer Township, Gqeberha. masifunde&apos;s vision
                is to empower its beneficiaries to participate pro-actively and
                confidently in societal issues and thereby initiating positive
                change in their own lives and the lives of other - and thereby
                acting as changemakers.
              </p>
              <p className="w-full pr-6 mt-6 text-base font-medium leading-7 text-gray-600 xl:w-9/12">
                Since 2013 masifunde has implemented a variety of city-wide
                programmes with the focus on learner activation mainly on the
                topics of school safety and gender-based violence (GBV). The
                model is based on the believe that positive change is
                everybody&apos;s responsibility and that everybody has some form
                of capacity to make a contribution towards such change. The
                programmes therefore aim to activate all learners in
                participating schools to take positive and constructive action
                as part of the school community.
              </p>
              <p className="w-full pr-6 mt-6 text-base font-medium leading-7 text-gray-600 xl:w-9/12">
                In 2021, masifunde officially launched its Changemaker Network
                in the Nelson Mandela Bay. Since 2023, the programme gets
                replicated with 20 CSO partners in the Eastern Cape, Limpopo,
                North-West and KwaZulu-Natal. In 2024, masifunde aims to reach
                200 schools, with 40 CSO partners in all provinces of South
                Africa.
              </p>
              <div className="w-full pr-6 mt-8 text-base font-medium leading-7 text-gray-600 xl:w-9/12">
                Find out more about masifunde{" "}
                <Link
                  className="font-light underline text-masifunde"
                  href="https://www.masifunde.org"
                >
                  www.masifunde.org
                </Link>
              </div> */}
            </div>

            <div className="w-full lg:w-6/12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
