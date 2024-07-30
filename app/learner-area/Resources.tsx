import Image from "next/image";
import Link from "next/link";

const mags = [
  {
    image: "/images/nmb/nmb_spark_1.jpg",
    document: "/images/nmb/nmb_spark_1.pdf",
  },
  {
    image: "/images/nmb/nmb_spark_2.jpg",
    document: "/images/nmb/nmb_spark_2.pdf",
  },
  {
    image: "/images/nmb/nmb_spark_3.jpg",
    document: "/images/nmb/nmb_spark_3.pdf",
  }
  ,{
    image: "/images/nmb/nmb_spark_4.jpg",
    document: "/images/nmb/nmb_spark_4.pdf",
  }
]

const Resources = () => {
  return (
			<div className="pb-10 mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
					{mags.map((mag) => (
						<Link
							href={mag.document}
							key={mag.image}
              prefetch={false}
							className="flex flex-col items-center justify-center w-full transition duration-300 ease-in-out rounded-lg shadow"
						>
							<Image
								src={`${mag.image}`}
								alt="Icon"
								width={1748}
								height={2480}
                className="object-cover w-full rounded-lg"
							/>
						</Link>
					))}
				</div>
			</div>
		);
};
export default Resources;
