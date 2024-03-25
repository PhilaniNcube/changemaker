import type { NationalPageRolePlayers } from "@/sanity/lib/client";

type PageProps = {
  roleplayers: NationalPageRolePlayers[];
};

const HowItWorks = ({ roleplayers }: PageProps) => {
  return (
    <section className="py-10 bg-white">
      <div className="relative h-full px-8 mx-auto max-w-7xl">
        <section className="w-full py-16">
          <div>
            <div className="flex flex-col px-4 items-left">
              <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-masifunde">
                <h2 className="pt-4 text-4xl font-extrabold leading-tight text-left lg:text-5xl lg:w-7/12 md:w-9/12">
                  Roleplayers in the Changemaker Network
                </h2>
              </span>
            </div>
            <div className="grid justify-between grid-cols-1 gap-8 px-4 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:gap-24">
              {/* <div className="flex pb-6 sm:w-full md:w-full">
                <div className="w-full">
                  <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-masifunde">
                    <h4 className="text-2xl font-bold leading-tight">
                      Civil Society Organisations
                    </h4>
                  </span>
                  <p className="pt-2 text-base leading-normal text-gray-600">
                    Organisations are trained in a one-week training on the
                    content of the changemaker network, facilitation skills,
                    project management, relevant frameworks and policies so that
                    they are equipped to implement the Changemaker Network
                    program in their respective organisations and provinces
                  </p>
                </div>
              </div> */}
              {/* <div className="flex pb-6 sm:w-full md:w-full">
                <div className="w-full">
                  <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-masifunde">
                    <h4 className="text-2xl font-bold leading-tight">
                      District Officials
                    </h4>
                  </span>
                  <p className="pt-2 text-base leading-normal text-gray-600">
                    Their role consists of supporting Civil Society
                    Organisations (CSO’s) through assisting in identifying
                    schools and gaining access to these schools. They are
                    trained alongside Civil Society Organisations (CSO’s) so
                    that together they can align their visions for the
                    implementation of MCN. Additionally, they provide guidance
                    and various linkages to DoE frameworks and policies that
                    inform and mandate the implementation of violence/GBV
                    prevention programmes in schools.
                  </p>
                </div>
              </div> */}

              {roleplayers.map((item, index) => (
                <div key={item.title} className="flex pb-6 sm:w-full md:w-full">
                  <div className="w-full">
                    <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-masifunde">
                      <h4 className="text-2xl font-bold leading-tight">
                        {item.title}
                      </h4>
                    </span>
                    <p className="pt-2 text-base leading-normal text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
