import { Button } from "@/components/ui/button";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Learn or develop a new skill",
  },
  {
    title: "Become part of a community",
  },
  {
    title: "Become part of a network of changemakers",
  },
  {
    title: "Have a sense of achievement",
  },
  {
    title: "Boost your career options",
  },
  {
    title: "Find what you are passionate about",
  },
  {
    title:
      "Advocate for causes and issues that directly or indirectly affect you",
  },
  {
    title: "Make a difference to a cause that has an impact globally",
  },
  {
    title: "Do something your future self will thank you for",
  },
  {
    title: "Increase self-confidence",
  },
];

const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <div className="w-full flex items-center">
            {" "}
            <h2 className="font-semibold text-3xl lg:leading-9 leading-7 text-gray-800 ">
              Changemakers are changing the world, one act at a time. What are
              the benefits to being a changemaker?
            </h2>
          </div>
          <div className="my-4">
            <Link
              href="https://www.facebook.com/groups/960613284612519"
              target="_blank"
            >
              <Button
                type="button"
                className="bg-blue-600 text-white font-medium"
              >
                <FacebookIcon className="w-6 h-6 mr-2" />
                Follow Us
              </Button>
            </Link>
          </div>
        </div>{" "}
        <Image
          src="/images/learner_area.jpeg"
          width="1500"
          height={1000}
          alt="Benefits of being a changemaker"
          className="w-full aspect-video object-cover rounded-2xl"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex items-center p-6 justify-center bg-slate-200 rounded-lg shadow hover:bg-masifunde transition duration-300 ease-in-out w-full aspect-[5/3]"
          >
            <p className="font-medium text-slate-800 text-md text-center">
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Benefits;
