import Link from "next/link";
import SelfTest from "./SelfTest";
import Image from "next/image";

const Implementation = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
              <Image src="/images/advert_.jpeg" width={1240} height={1754} alt="Join" className="w-[80%] objet-cover shadow-md" />
          </div>

          <div className="w-full text-slate-800">
            <SelfTest />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Implementation;
