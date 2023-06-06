import Link from "next/link";
import SelfTest from "./SelfTest";
import Image from "next/image";

const Implementation = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
              <Image src="/images/advert.jpeg" width={1240} height={1754} alt="Join" className="w-[80%] objet-cover" />
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
