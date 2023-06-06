const Requirements = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
          <div className="w-full">
            <p className="text-slate-700 text-justify text-base leading-7">
              To support the roll-out of the Changemaker Network in the four
              provinces, we are looking for 20 civil society organizations (five
              per province) to become local partners in implementing the
              Changemaker network in five high schools.
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-md md:text-lg font-bold  mb-3">
              Please note: Applications only from the following provinces and
              districts permitted:
            </h3>
            <ul className="list-disc pl-6 text-sm md:text-base leading-7">
              <li className="text-slate-700 leading-7">
                Eastern Cape - Alfred Nzo
              </li>
              <li className="text-slate-700 leading-7">
                Limpopo - Sekhukhune East, Waterberg
              </li>
              <li className="text-slate-700 leading-7">
                KwaZulu-Natal - Amajuba, Harry Gwala, Ugu, Umlazi, Umzinyathi
              </li>
              <li className="text-slate-700 leading-7">
                North West - Dr Kenneth Kaunda, Ngaka Modiri Molema
              </li>
            </ul>{" "}
            <h3 className="text-md md:text-lg font-bold  mb-3">
              We are not accepting applications from Nelson Mandela Bay, as
              Masifunde has implemented this program within this district.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Requirements;
