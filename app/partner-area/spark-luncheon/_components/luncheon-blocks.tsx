import { getLuncheonBlocks } from "@/sanity/lib/client";

const blocks = [
  'Active Citizenship',
  'School Safety and Bullying',
  'Healthy Lifestyle with a Focus on Mental Health',
  'Gender-Based Violence Prevention',
  'Tackling Youth Unemployment',
  'Environmental Awareness',
]

type LuncheonBlocks = {
  _id: string;
  blockTitle: string;
  blocks: string[];
}

const LuncheonBlocks = async () => {

  const blocksContent: LuncheonBlocks = await getLuncheonBlocks();

  console.log(blocksContent);

  return (
    <section className="py-10">
      <div className="max-w-6xl px-6 mx-auto lg:px-0">
        <h2 className="mb-3 text-xl font-bold text-center text-black">
          {blocksContent.blockTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {blocksContent.blocks.map((block) => (
            <div
              key={block}
              className="flex items-center justify-center p-4 text-center rounded-md text-md aspect-square bg-slate-300 text-balance hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-black">{block}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LuncheonBlocks;
