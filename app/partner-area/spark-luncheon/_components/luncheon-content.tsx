import type { Page } from "@/app/studio/sanity.types";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const LuncheonContent = ({content, title}:{content:Page['content'], title:string | undefined}) => {
  return (
    <div className="py-8">
      <div className="max-w-6xl px-4 mx-auto lg:px-0">
        <div className="flex flex-col gap-6 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl text-orange-600 max-w-[10ch]">
              {title}
            </h2>
            <p className="mb-2">Sign Up here, so we can inform you of our next SPARK Luncheon</p>
            <Button className="w-full font-medium text-white bg-masifunde">
              <Link href="https://forms.gle/6XRxrzLUPCHvZfCj7">
                Sign Up
              </Link>
            </Button>
          </div>

          <div id="content" className="w-full px-4 luncheon lg:px-0">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LuncheonContent;
