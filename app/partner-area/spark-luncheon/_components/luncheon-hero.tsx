import Image from "next/image";

const LuncheonHero = ({leftImage, rightImage}:{leftImage:string, rightImage:string}) => {
  return (
			<section className="w-full bg-black min-h-[300px] max-h-[400px] relative isolate">
				<Image
					src="/images/background.jpg"
					width={1932}
					height={1351}
					alt="Background"
					className="object-cover w-full mx-auto max-h-[400px] object-top"
				/>
        <div className="absolute inset-0">
          <div className="relative flex h-full mx-auto max-w-7xl isolate">
             <div className="flex items-center justify-start h-full">
            <Image src={leftImage} width={318} height={199} alt="Left Image" className="object-cover" />
             </div>
             <div className="absolute top-0 right-0 hidden h-full overflow-y-visible lg:block">
            <Image src={rightImage} width={1920} height={617} alt="Right Image" className="relative object-cover object-right-bottom w-full h-full scale-110 z-[10] translate-y-4" />
             </div>
          </div>
        </div>
			</section>
		);
};
export default LuncheonHero;
