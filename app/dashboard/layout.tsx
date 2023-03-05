import { ReactNode } from "react";
import SideBar from "./SideBar";

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex bg-white h-[calc(100vh-48px)] overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <aside className="h-[calc(100vh-48px)] relative isolate w-[20%] scrollbar-hide overflow-x-hidden overflow-y-scroll  shadow-2xl bg-zinc-200 border-r-4 border-zinc-200">
        {" "}
        <SideBar />
      </aside>

      <div className="flex-1 p-6 md:p-10 overflow-y-scroll h-[calc(100vh-56px)] scrollbar-hide">
        {children}
      </div>
    </div>
  );
};
export default layout;
