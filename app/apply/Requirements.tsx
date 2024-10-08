const Requirements = () => {
  return (
    <section className="py-10 bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
          <div className="w-full">
            <p className="text-base leading-7 text-justify text-slate-700">
              We have selected implementation partners in 40 Districts, in all
              nine provinces and currently do not select additional
              organisations.
            </p>
            <p className="text-base leading-7 text-justify text-slate-700">
              You may nevertheless submit your application to have you on the
              waiting list should we start to search new implementation partners
            </p>
          </div>
          {/* <div className="w-full">
            <h3 className="mb-3 font-bold text-md md:text-lg">
              Please note: Applications only from the following provinces and
              districts permitted:
            </h3>
            <ul className="pl-6 text-sm leading-7 list-disc md:text-base">
              <li className="leading-7 text-slate-700">
                Eastern Cape - Alfred Nzo
              </li>
              <li className="leading-7 text-slate-700">
                Limpopo - Sekhukhune East, Waterberg
              </li>
              <li className="leading-7 text-slate-700">
                KwaZulu-Natal - Amajuba, Harry Gwala, Ugu, Umlazi, Umzinyathi
              </li>
              <li className="leading-7 text-slate-700">
                North West - Dr Kenneth Kaunda, Ngaka Modiri Molema
              </li>
            </ul>{" "}
            <h3 className="mb-3 font-bold text-md md:text-lg">
              We are not accepting applications from Nelson Mandela Bay, as
              masifunde has implemented this program within this district.
            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Requirements;
