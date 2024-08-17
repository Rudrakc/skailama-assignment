import React, { useState } from "react";
import IconButton from "./IconButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import useStore from "../../../hooks/useStrore";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import Breadcrumb from "../../../components/Breadcrumb";

function ProjectNavbar() {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const [modalOpen, setmodalOpen] = useState(false);

  const handleModalOpen = () => {
    setmodalOpen(true);
  };

  const handleModalClose = () => {
    setmodalOpen(false);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className=" h-full flex justify-between items-center px-16">
      <Breadcrumb />
      <div className="flex justify-center items-center gap-4">
        <IconButton
          icon={<IoMdNotificationsOutline />}
          hoverColor="bg-gray-700"
        />
        <IconButton
          icon={<TbLogout className="text-red-500 ml-1" />}
          hoverColor="bg-red-500"
          onClick={handleModalOpen}
        />
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        title={"Are you sure you want to logout?"}
      >
        <div className="flex justify-center items-center">
          <div className="flex gap-4 mt-4">
            <button
              className="bg-gray-700 hover:bg-gray-500 duration-200 text-white py-2 min-w-20 px-4 rounded-lg"
              onClick={handleLogout}
            >
              Yes
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-500 duration-200 text-white py-2 min-w-20 px-4 rounded-lg"
              onClick={() => setmodalOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectNavbar;
