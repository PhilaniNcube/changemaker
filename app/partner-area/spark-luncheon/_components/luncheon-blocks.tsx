const blocks = [
  'Active Citizenship',
  'School Safety and Bullying',
  'Healthy Lifestyle with a Focus on Mental Health',
  'Gender-Based Violence Prevention',
  'Tackling Youth Unemployment',
]

const LuncheonBlocks = () => {
  return (
			<section className="py-10">
				<div className="px-6 mx-auto max-w-7xl lg:px-0">
					<h2 className="mb-3 text-xl font-bold text-center text-black">
						Since the inception of SPARK Change Luncheons, five events have been
						held, focusing on the following topics:
					</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
						{blocks.map((block) => (
							<div
								key={block}
								className="flex items-center justify-center p-6 text-center rounded-md aspect-square bg-slate-300 text-balance hover:shadow-md"
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
