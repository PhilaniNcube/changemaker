
import Timeline from "@/components/Timeline/Timeline";
import Image from "next/image";
import Link from "next/link";


const Story = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 ">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full flex flex-col justify-center items-center bg-neutral-800 bg-opacity-40 text-white sm:px-12 px-6 rounded-md">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">
                Change starts with you
              </h2>
              <p className="text-sm text-white text-center">
                Linathi Mangether sparking change at Soqhayisa Secondary School
                in Gqeberha
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              width={1920}
              height={1080}
              className="rounded-md lg:block hidden w-full object-cover aspect-[7/3] object-center"
              src="https://res.cloudinary.com/dkqzhae7c/image/upload/v1683833665/phase_3_vpcgva.webp"
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
          <div className="flex lg:flex-row flex-col">
            <div className="w-full lg:w-6/12 text-justify">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                Our Story
              </h2>
              <p className="pr-6 font-medium text-base leading-7 text-gray-600 mt-6 w-full xl:w-9/12">
                Masifunde is an NGO founded in 2004, which runs holistic,
                learner-centred community development programmes for children
                and youth in Walmer Township, Gqeberha. Masifunde&apos;s vision
                is to empower its beneficiaries to participate pro-actively and
                confidently in societal issues and thereby initiating positive
                change in their own lives and the lives of other - and thereby
                acting as changemakers.
              </p>
              <p className="pr-6 font-medium text-base leading-7 text-gray-600 w-full xl:w-9/12 mt-6">
                Since 2013 Masifunde has implemented a variety of city-wide
                programmes with the focus on learner activation mainly on the
                topics of school safety and gender-based violence (GBV). The
                model is based on the believe that positive change is
                everybody&apos;s responsibility and that everybody has some form
                of capacity to make a contribution towards such change. The
                programmes therefore aim to activate all learners in
                participating schools to take positive and constructive action
                as part of the school community.
              </p>
              <p className="pr-6 font-medium text-base leading-7 text-gray-600 w-full xl:w-9/12 mt-6">
                In 2021, Masifunde officially launched its Changemaker Network
                in the Nelson Mandela Bay. Since 2023, the programme gets
                replicated with 20 CSO partners in the Eastern Cape, Limpopo,
                North-West and KwaZulu-Natal. In 2024, Masifunde aims to reach
                200 schools, with 40 CSO partners in all provinces of South
                Africa.
              </p>
              <div className="pr-6 mt-8 font-medium text-base leading-7 text-gray-600 w-full xl:w-9/12">
                Find out more about Masifunde{" "}
                <Link
                  className="text-accent font-light underline"
                  href="https://www.masifunde.org"
                >
                  www.masifunde.org
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-6/12">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
