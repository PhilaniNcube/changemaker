import { ReactNode } from "react";
import SideBar from "./SideBar";

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex bg-white h-[calc(100vh-48px)] overflow-hidden overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <SideBar />
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
};
export default layout;
