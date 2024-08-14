import React from "react";
import Sidebar from "./SideBar/Sidebar";

function ProjectPage() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[20%] h-full bg-[#ffffff] drop-shadow-lg">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full bg-[#f9f9f9]"></div>
    </div>
  );
}

export default ProjectPage;
