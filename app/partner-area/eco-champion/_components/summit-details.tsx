import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SparkDetails() {
  return (
    <div className="min-h-screen ">
      <div className="p-6 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold text-masifunde">
                  About the
                  <br />
                  summit
                </h2>

                <div className="mb-8 space-y-4">
                  <Link
                    href="/docs/programme.pdf"
                    className="flex items-center justify-between text-green-600 cursor-pointer hover:text-green-700"
                  >
                    <span className="text-sm">View detailed programme</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/docs/parental_info.pdf"
                    className="flex items-center justify-between text-green-600 cursor-pointer hover:text-green-700"
                  >
                    <span className="text-sm">View parental information</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://pinelodge.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-green-600 cursor-pointer hover:text-green-700"
                  >
                    <span className="text-sm">View the venue</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/t3dy2WWBZ23k27Pq5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-green-600 cursor-pointer hover:text-green-700"
                  >
                    <span className="text-sm">View directions</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="pt-6 border-t">
                  <p className="mb-4 text-sm text-gray-600">
                    Sign Up here if you're interested to be involved
                  </p>
                  <Link
                    href="https://forms.gle/6q8isxjZzGUG3uPj7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full text-white bg-masifunde hover:bg-orange-600">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h1 className="mb-2 text-2xl font-bold">
                SPARK CHANGE Eco Youth Summit:
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Where young voices shape tomorrow's climate solutions.
              </p>

              <div className="mb-8">
                <p className="text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold">
                    mailfunda's SPARK Eco Youth Summit
                  </span>{" "}
                  brings together the next generation of South Africa's
                  environmental leaders. Over 100 high school learners and
                  changemakers (Grades 10-11) from across the country – trained
                  eco-champions through the Changemaker Network – will join
                  forces supported by 40 partner NGOs who implement the
                  programme nationwide. For three days, young leaders will
                  connect with society organisations, and education partners
                  will connect, reflect, and inspire action for a more
                  sustainable future.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="mb-3 text-lg font-bold text-masifunde">
                  Why it Matters?
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  Climate change is one of the greatest challenges of our time –
                  and youth are at the forefront of solutions. This summit is
                  not just a gathering, but a platform for action.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      <span className="font-semibold text-masifunde">
                        Reflect
                      </span>{" "}
                      on the environmental awareness campaigns and community
                      action projects led in schools nationwide.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      <span className="font-semibold text-masifunde">
                        Learn
                      </span>{" "}
                      through expert workshops on climate change, sustainable
                      living, and community resilience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      <span className="font-semibold text-masifunde">
                        Collaborate
                      </span>{" "}
                      across provinces and organisations to strengthen the
                      national eco-champion network.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      <span className="font-semibold text-masifunde">
                        Inspire
                      </span>{" "}
                      the public by showcasing youth-led projects and solutions.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-lg font-bold text-masifunde">
                  3 Day Programme Highlights
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-800">
                      Day 1 - Reflection & Connection
                    </h3>
                    <ul className="ml-4 space-y-1 text-sm text-gray-600">
                      <li>• Opening ceremony and Plenary Discussions</li>
                      <li>• Team-building and eco-excursion</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-gray-800">
                      Day 2 - Learning & Collaboration
                    </h3>
                    <ul className="ml-4 space-y-1 text-sm text-gray-600">
                      <li>
                        • Expert workshops on climate science, and sustainable
                        living
                      </li>
                      <li>
                        • Exhibition of community action projects from across
                        South Africa
                      </li>
                      <li>• Vision 2030 dialogue</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-gray-800">
                      Day 3 - Public Exhibition & Celebration
                    </h3>
                    <ul className="ml-4 space-y-1 text-sm text-gray-600">
                      <li>• Public showcase of learner and NGO eco-projects</li>
                      <li>
                        • Panel discussions with experts, partners, and the
                        media
                      </li>
                      <li>
                        • Award ceremony & youth pledge to environmental action
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-orange-50">
                <h2 className="mb-3 text-lg font-bold text-masifunde">
                  Join Us on Day 3!
                </h2>
                <p className="mb-3 font-semibold text-gray-800">
                  On Thursday, 9 October 2025, the summit opens its doors to the
                  public.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      Visit the Eco Exhibition of youth projects and NGO
                      initiatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      Engage in panel discussions on the future of environmental
                      action in South Africa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-masifunde">•</span>
                    <span>
                      Celebrate the commitment of young changemakers as they
                      present their pledges for a sustainable tomorrow.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
