import Link from "next/link";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

/* This example requires Tailwind CSS v3.0+ */
const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto min-h-[55vh] overflow-hidden py-20">
        <h1 className="text-4xl font-extrabold text-slate-800 text-center">
          To see the masifunde’s Changemaker Network in action and stay updated,
          click on our social media feed
        </h1>

        <div className="flex items-center justify-center gap-3 mt-8">
          <Link href="https://www.facebook.com/profile.php?id=100083194785525">
            <FaFacebookF  className="text-5xl text-slate-700"/>
          </Link>
          <Link href="https://www.instagram.com/changemaker_network/">
            <FaInstagramSquare className="text-5xl text-slate-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
