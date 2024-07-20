import type { Page } from "@/app/studio/sanity.types";
import { PortableText } from "@portabletext/react";

const LuncheonContent = ({content, title}:{content:Page['content'], title:string | undefined}) => {
  return (
			<div className="py-8">
				<div className="px-4 mx-auto max-w-7xl lg:px-0">
					<div className="flex flex-col gap-6 md:flex-row">
						<h2 className="text-3xl font-bold md:text-5xl text-orange-600 max-w-[10ch]">
							{title}
						</h2>
						<div id="content" className="w-full px-4 luncheon lg:px-0">
							{content && <PortableText value={content} />}
						</div>
					</div>
				</div>
			</div>
		);
};
export default LuncheonContent;
