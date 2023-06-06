import Link from "next/link";

const page = () => {
  return (
    <main className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 h-[70vh] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          To qualify you need to ideally get 10/10. We motivate you to work on
          outstanding requirements and when ready, please apply on the link
          below.
        </h1>
        <div className="flex items-center justify-center mt-3">
          <Link
            href="/apply"
            className="bg-slate-700 mt-3 px-10 py-2 text-white"
          >
            Apply
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
