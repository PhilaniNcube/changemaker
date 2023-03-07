const schools = [
  {
    id: 1,
    title: "Booysens Park Secondary School",
  },
  {
    id: 2,
    title: "Chapman High School",
  },
  {
    id: 3,
    title: "Coselelani  Secondary School",
  },
  {
    id: 4,
    title: "David Livingstone  Secondary School",
  },
  {
    id: 5,
    title: "Douglas Mbopa  High School",
  },
  {
    id: 6,
    title: "EZ Khabane High School",
  },
  {
    id: 7,
    title: "Gamble Street Secondary School",
  },
  {
    id: 8,
    title: "Hoërskool Uitenhage High School",
  },
  {
    id: 9,
    title: "Ithembelihle Comprehensive Technical High School",
  },
  {
    id: 10,
    title: "James Jolobe  Secondary School",
  },
  {
    id: 11,
    title: "Khumbulani High School",
  },
  {
    id: 12,
    title: "Kwazakhele High School",
  },
  {
    id: 13,
    title: "Limekhaya High School",
  },
  {
    id: 14,
    title: "Loyiso Senior Secondary School",
  },
  {
    id: 15,
    title: "Lungisa High School",
  },
  {
    id: 16,
    title: "Masibambane Senior Secondary School",
  },
  {
    id: 17,
    title: "Masiphathisane  Senior Secondary School",
  },
  {
    id: 18,
    title: "Mfesane  Secondary School",
  },
  {
    id: 19,
    title: "Molly Blackburn Secondary School",
  },
  {
    id: 20,
    title: "Mzontsundu Secondary School",
  },
  {
    id: 21,
    title: "Ndyebo  Senior Secondary School",
  },
  {
    id: 22,
    title: "Ndzondelelo High School",
  },
  {
    id: 23,
    title: "Newell High School",
  },
  {
    id: 24,
    title: "Nkululeko Public Secondary School",
  },
  {
    id: 25,
    title: "Paterson High School",
  },
  {
    id: 26,
    title: "Phakamisa High School",
  },
  {
    id: 27,
    title: "Qaphelani Senior Secondary School",
  },
  {
    id: 28,
    title: "Sanctor  High School",
  },
  {
    id: 29,
    title: "Solomon Mahlangu Secondary School",
  },
  {
    id: 30,
    title: "Soqhayisa Senior Secondary School",
  },
  {
    id: 31,
    title: "St James Secondary School",
  },
  {
    id: 32,
    title: "St Thomas",
  },
  {
    id: 33,
    title: "Tinarha High School",
  },
  {
    id: 34,
    title: "Tyhilulwazi Senior Secondary School",
  },
  {
    id: 35,
    title: "V.M Kwinana Senior Secondary School",
  },
  {
    id: 36,
    title: "Victoria Park High School",
  },
  {
    id: 37,
    title: "Vulumzi  Secondary  School",
  },
  {
    id: 38,
    title: "Walmer High School",
  },
  {
    id: 39,
    title: "Woolhope  Secondary School",
  },
];

const NMBSchools = () => {
  return <section className="py-10 bg-white">
    <div className="max-w-7xl mx-auto px-8 lg:px-0">
       <h2 className="font-bold mb-8 text-3xl text-slate-800 text-center">Schools currently in the programme are:</h2>
       <div className="columns-1 sm:columns-2 md:columns-3 gap-x-4 gap-y-2" >
        {schools.map((school) => (
          <p className="font-medium text-slate-700 text-sm md:text-md" key={school.id}>{school.title}</p>
        ))}
       </div>
    </div>
  </section>;
};
export default NMBSchools;
