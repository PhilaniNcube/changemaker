import Link from "next/link";
import NationalFunders from "./NationalFunders";

const Details = () => {
  return (
    <section className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-8 gap-10">
        <p className="text-slate-700 text-justify text-base leading-7 mt-8">
          The Changemaker Network model is a whole-of-school community
          intervention supporting the&nbsp;
          <span>
            <Link
              href="/about/nissp"
              className="font-bold cursor-pointer underline"
            >
              National Inclusive and Safer Schools Partnership&nbsp;(NISSP)
            </Link>
          </span>
          &nbsp; of the National Department of Basic Education. The intervention
          activates, provides capacity and supports the role of local Department
          of Education and school communities at large: learners, educators,
          community, volunteers, stakeholders. This project has been implemented
          within the Eastern Cape, KwaZulu-Natal, North West and Limpopo.
        </p>
        <p className="text-slate-700 text-justify text-base leading-7 mt-8">
          The programmes can help guide learners that may be exposed to or
          experiencing violence to find coping skills, positive behavioural
          support, or peer-to-peer education.
        </p>
      </div>
    </section>
  );
};
export default Details;
