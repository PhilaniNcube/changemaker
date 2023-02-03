import Image from "next/image";

const Hero = () => {
  return <section className="relative">
    <Image src="/images/school.jpeg" width={6000} height={4000} alt="About" priority className="w-full aspect-[3/1] object-cover" />
    <div className="absolute inset-0 bg-slate-600/80">
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-center items-center text-white h-full">
         <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl">About Us</h1>
         <p className="text-center text-sm lg:text-lg leading-7 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia maxime incidunt laudantium natus. Totam, vero exercitationem? Magni eaque ad quibusdam maiores ducimus possimus, dicta in pariatur magnam cupiditate odit modi, praesentium minima, vero cum sed repellat. Quidem impedit laboriosam vel expedita ipsa maxime dolor ipsam tenetur, soluta velit sunt eaque quam saepe reprehenderit praesentium possimus? Accusantium nam quam consectetur, aut dolores deserunt quibusdam, animi voluptate nulla delectus saepe dignissimos consequuntur nostrum. Aperiam quis temporibus adipisci, culpa atque officiis voluptate enim quos sit praesentium fuga!</p>
      </div>
    </div>
  </section>;
};
export default Hero;
