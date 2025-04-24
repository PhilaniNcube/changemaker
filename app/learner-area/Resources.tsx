import Image from "next/image";
import Link from "next/link";
import MagazineSlider from "../nmb/MagazineSlider";

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
        <MagazineSlider />
				
			</div>
		);
};
export default Resources;
