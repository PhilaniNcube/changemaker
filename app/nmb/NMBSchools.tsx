const schools = [
  {
    title: "Booysens Park Secondary School",
  },
  {
    title: "Chapman High School",
  },
  {
    title: "Coselelani  Secondary School",
  },
  {
    title: "David Livingstone  Secondary School",
  },
  {
    title: "Douglas Mbopa  High School",
  },
  {
    title: "EZ Khabane High School",
  },
  {
    title: "Gamble Street Secondary School",
  },
  {
    title: "Hoërskool Uitenhage High School",
  },
  {
    title: "Ithembelihle Comprehensive Technical High School",
  },
  {
    title: "James Jolobe  Secondary School",
  },
  {
    title: "Khumbulani High School",
  },
  {
    title: "Kwa-Magxaki High School",
  },
  {
    title: "Kwazakhele High School",
  },
  {
    title: "Limekhaya High School",
  },
  {
    title: "Loyiso Senior Secondary School",
  },
  {
    title: "Lungisa High School",
  },
  {
    title: "Marymount High School",
  },
  {
    title: "Masibambane Senior Secondary School",
  },
  {
    title: "Masiphathisane  Senior Secondary School",
  },
  {
    title: "Mfesane  Secondary School",
  },
  {
    title: "Molly Blackburn Secondary School",
  },
  {
    title: "Morningside Highschool",
  },
  {
    title: "Mzontsundu Secondary School",
  },
  {
    title: "Ndyebo  Senior Secondary School",
  },
  {
    title: "Ndzondelelo High School",
  },
  {
    title: "Newell High School",
  },
  {
    title: "Nkululeko Public Secondary School",
  },
  {
    title: "Paterson High School",
  },
  {
    title: "Phakamisa High School",
  },
  {
    title: "Qaphelani Senior Secondary School",
  },
  {
    title: "Reubin Burn School for Hearing Impaired",
  },
  {
    title: "Sakhisizwe High School",
  },
  {
    title: "Sanctor  High School",
  },
  {
    title: "Solomon Mahlangu Secondary School",
  },
  {
    title: "Sophakama Highschool",
  },
  {
    title: "Soqhayisa Senior Secondary School",
  },
  {
    title: "St James Secondary School",
  },
  {
    title: "St Thomas",
  },
  {
    title: "Tinarha High School",
  },
  {
    title: "Tyhilulwazi Senior Secondary School",
  },
  {
    title: "V.M Kwinana Senior Secondary School",
  },
  {
    title: "Victoria Park High School",
  },
  {
    title: "Vulumzi  Secondary  School",
  },
  {
    title: "Walmer High School",
  },
  {
    title: "Woolhope  Secondary School",
  },
];

const NMBSchools = () => {
  return <section id="schools" className="py-20 bg-slate-100">
    <div className="px-8 mx-auto max-w-7xl">
       <h2 className="mb-8 text-3xl font-bold text-center text-slate-800">Schools currently in the programme are:</h2>
       <div className="columns-1 sm:columns-2 md:columns-3 gap-x-4 gap-y-2" >
        {schools.map((school, index) => (
          <p className="text-sm font-medium text-slate-700 md:text-md" key={index}>{school.title}</p>
        ))}
       </div>
    </div>
  </section>;
};
export default NMBSchools;
