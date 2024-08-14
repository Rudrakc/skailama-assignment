import React, { useState } from "react";
import Navbar from "./Navbar";
import Default from "./Default";
import Modal from "../components/Modal";
import Button from "../components/Button";
import ProjectList from "./ProjectList";

function Home() {
  let projects = [
    {
      title: "Project 1",
      episodes: 5,
    },
    {
      title: "Project 2",
      episodes: 4,
    },
    {
      title: "Project 3",
      episodes: 1,
    },
    {
      title: "Project 4",
      episodes: 3,
    },
    {
      title: "Project 5",
      episodes: 2,
    },
    {
      title: "Project 6",
      episodes: 6,
    },
    {
      title: "Project 7",
      episodes: 7,
    },
    {
      title: "Project 8",
      episodes: 8,
    },
    {
      title: "Project 9",
      episodes: 9,
    },
    {
      title: "Project 10",
      episodes: 10,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="h-[90%]">
        <div className="h-full">
          {projects.length == 0 ? (
            <div className="h-full flex justify-center items-center">
              <Default handleOpenModal={handleOpenModal} />
            </div>
          ) : (
            <ProjectList projects={projects} />
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={"Create projects"}
          >
            <div>
              <input
                type="text"
                placeholder="Enter Project Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-red-600 text-sm mt-2 text-left">
                Project Name Can't be empty
              </p>
            </div>
            <div className="flex justify-end items-center">
              <button
                onClick={handleCloseModal}
                className="mr-4 mt-6 text-red-500"
              >
                Cancel
              </button>
              <Button className={"py-2"}>Create</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Home;
