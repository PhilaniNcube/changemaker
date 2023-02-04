import Link from "next/link";

const Implementation = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-slate-700 text-sm md:text-md">
            To support the roll-out of the Changemaker Network in the four
            provinces, we are looking for 20 civil society organizations (five
            per province) to become local partners in implementing the
            Changemaker network in five high schools.
          </p>
          <div className="w-full text-slate-800">
            <h3 className="text-md md:text-lg font-bold underline mb-3">
              Please note: Applications only from the following provinces and
              districts permitted:
            </h3>
            <ul className="list-disc pl-5 text-slate-600 text-sm">
              <li>Eastern Cape - Alfred Nzo</li>
              <li>Limpopo - Sekhukhune East, Waterberg</li>
              <li>
                KwaZulu-Natal - Amajuba, Harry Gwala, Ugu, Umlazi, Umzinyathi
              </li>
              <li>North West - Dr Kenneth Kaunda, Ngaka Modiri Molema</li>
            </ul>

            <h3 className="italic text-md font-medium my-3">
              We are not accepting applications from Nelson Mandela Bay, as
              Masifunde has implemented this program within this district.{" "}
            </h3>

            <Link className="bg-accent text-black px-6 font-bold py-2 mt-4" href="https://docs.google.com/forms/d/1BjJxaWkouxo426KASvzFUMRw6qOB7whqizBiZkSfw3o/viewform?ts=62d6a16e&edit_requested=true">Apply</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Implementation;
