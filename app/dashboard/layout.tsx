import type { ReactNode } from "react";
import SideBar from "./SideBar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const revalidate = 0;

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex bg-white h-[calc(100vh-48px)] overflow-x-hidden  ">
      <aside className="h-[calc(100vh-48px)] relative isolate w-[20%]  overflow-x-hidden   shadow-2xl bg-zinc-200 border-r-4 border-zinc-200">
        {" "}
        <SideBar />
      </aside>

      <ScrollArea className="flex-1 p-6 md:p-10 h-[calc(100vh-56px)] ">
        {children}
        <ScrollBar />
      </ScrollArea>
    </div>
  );
};
export default layout;
