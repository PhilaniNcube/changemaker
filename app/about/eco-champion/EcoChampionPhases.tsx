type PageListGroup = {
  _id: string;
  list_title: string;
  list_subtitle: string;
  list_items: string[];
  page: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
};

type EcoChampionPhasesProps = {
  pageListGroup: PageListGroup[];
};

const EcoChampionPhases = ({ pageListGroup }: EcoChampionPhasesProps) => {
  if (!pageListGroup || pageListGroup.length === 0) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        {pageListGroup.map((item, index) => (
          <div key={index} className="p-8 text-white shadow-lg bg-masifunde">
            <h3 className="mb-4 text-xl font-bold">{item.list_title}</h3>
            <p className="text-xs">
              {item.list_items.map((listItem, index) => (
                <span key={index}>{listItem}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcoChampionPhases;
