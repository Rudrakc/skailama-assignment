import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Logo from "../../assets/QuesLogoPurple.svg";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { HiPlus, HiOutlineSquare2Stack } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPencil } from "react-icons/tb";
import SidebarButton from "./SidebarButton";
import Divider from "../../components/Divider";

function Sidebar() {
  const [selectedButton, setSelectedButton] = useState("Add your Podcast(s)");

  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };
  return (
    <div className="h-full pt-10 flex flex-col justify-between">
      <div>
        <ReactSVG src={Logo} className="scale-[0.65]" />
        <div className=" flex flex-col justify-center items-center mt-4">
          <SidebarButton
            icon={<HiPlus />}
            label="Add your Podcast(s)"
            isSelected={selectedButton === "Add your Podcast(s)"}
            onClick={() => handleButtonClick("Add your Podcast(s)")}
          />
          <SidebarButton
            icon={<TbPencil />}
            label="Create & Repurpose"
            isSelected={selectedButton === "Create & Repurpose"}
            onClick={() => handleButtonClick("Create & Repurpose")}
          />
          <SidebarButton
            icon={<HiOutlineSquare2Stack />}
            label="Podcast Widget"
            isSelected={selectedButton === "Podcast Widget"}
            onClick={() => handleButtonClick("Podcast Widget")}
          />
          <SidebarButton
            icon={<PiCurrencyDollarSimple />}
            label="Upgrade"
            isSelected={selectedButton === "Upgrade"}
            onClick={() => handleButtonClick("Upgrade")}
          />
          <Divider className={"mt-6"} />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mb-6">
          <SidebarButton
            icon={<IoSettingsOutline />}
            label="Help"
            isSelected={selectedButton === "Help"}
            onClick={() => handleButtonClick("Help")}
          />
          <Divider className={"my-2"} />
          <div className="w-full ml-8 p-6 flex justify-start items-center">
            <img
              src="https://avatar.iran.liara.run/public/?username=Scott"
              alt=""
              className="w-16 h-16"
            />
            <div className="text-left pl-3">
              <div className="">Username</div>
              <div className="">username@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
