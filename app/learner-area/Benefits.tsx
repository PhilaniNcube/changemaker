import Image from "next/image";

const benefits = [
  {
    title: "Learn or develop a new skill",
  },
  {
    title: "Become part of a community",
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
        <div className="w-full flex items-center">
          {" "}
          <h2 className="font-semibold text-3xl lg:leading-9 leading-7 text-gray-800 ">
            Changemakers are changing the world, one act at a time. But what are
            the benefits for them?
          </h2>
        </div>{" "}
        <Image
          src="/images/benefits.JPG"
          width="2976"
          height={1984}
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
