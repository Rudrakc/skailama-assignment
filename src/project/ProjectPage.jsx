import React, { useState } from "react";
import Sidebar from "./SideBar/Sidebar";
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar";
import ComingSoon from "./ComingSoon";
import AddYourPodcasts from "./AddYourPocasts/AddYourPodcasts";
import AccountSetting from "./AccountSettings/AccountSetting";

function ProjectPage() {
  const [currentScreen, setCurrentScreen] = useState("Add your Podcast(s)");
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[20%] h-full bg-[#ffffff] drop-shadow-lg">
        <Sidebar
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      </div>
      <div className="w-[80%] h-full bg-[#f9f9f9]">
        <div className="h-[10%]">
          <ProjectNavbar />
        </div>
        <div className="h-[90%]">
          {currentScreen === "Add your Podcast(s)" && (
            <div className="h-full flex justify-center">
              <AddYourPodcasts />
            </div>
          )}
          {currentScreen === "Create & Repurpose" && <ComingSoon />}
          {currentScreen === "Podcast Widget" && <ComingSoon />}
          {currentScreen === "Upgrade" && <ComingSoon />}
          {currentScreen === "Help" && <ComingSoon />}
          {currentScreen === "Account" && <AccountSetting />}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
