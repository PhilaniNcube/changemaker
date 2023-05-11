

const HowItWorks = () => {
  return (
    <section className="bg-white py-10">
      <div className="relative h-full max-w-7xl mx-auto px-8 lg:px-0">
        <section className="max-w-8xl mx-auto container py-16">
          <div>
            <div className="flex items-left flex-col px-4">
              <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-accent">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight lg:w-7/12 md:w-9/12 pt-4">
                  Roleplayers in the Changemaker Network
                </h2>
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 justify-between px-4">
              <div className="flex sm:w-full md:w-full pb-6">
                <div className="w-full">
                  <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-accent">
                    <h4 className="text-2xl font-bold leading-tight">
                      Civil Society Organisations
                    </h4>
                  </span>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Organisations are trained in a one-week training on the
                    content of the changemaker network, facilitation skills,
                    project management, relevant frameworks and policies so that
                    they are equipped to implement the Changemaker Network
                    program in their respective organisations and provinces
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-full pb-6">
                <div className="w-full">
                  <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-accent">
                    <h4 className="text-2xl font-bold leading-tight">
                      District Officials
                    </h4>
                  </span>
                  <p className="text-base text-gray-600 leading-normal pt-2">
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
              </div>
              <div className="flex sm:w-full md:w-full pb-6">
                <div className="w-full">
                  <span className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-accent">
                    <h4 className="text-2xl font-bold leading-tight">
                      Changemakers
                    </h4>
                  </span>
                  <p className="text-base text-gray-600 leading-normal pt-2">
                    Changemakers are expected to advocate for social issues and
                    bring a positive change in their schools and communities.
                    This is achieved through having campaigns and events to
                    create awareness, share knowledge and skills necessary to
                    stand up against presenting social issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HowItWorks;
