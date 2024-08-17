import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Default from "./Default";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import ProjectList from "./ProjectList";
import axios from "axios";
import useStore from "../../hooks/useStrore";

function Home() {
  const { user } = useStore();
  const ownerId = user._id;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setprojectName] = useState("");
  const [userProjects, setuserProjects] = useState(user.projects)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const createProject = async () => {
    if (!projectName) {
      console.log("Project Name Can't be empty");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/project`,
        {
          name: projectName,
          owner: ownerId,
        }
      );
      const newProject = response.data;
      console.log("New Project created:", newProject);
      setuserProjects([...userProjects, newProject._id]);
      setprojectName("");
      handleCloseModal();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/project/owner/${ownerId}`
        );
        setuserProjects(response.data);
      } catch (error) {
        console.error("Error fetching user projects:", error);
      }
    };

    fetchUserProjects();
  }
  , [createProject]);

  

  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="h-[90%]">
        <div className="h-full">
          {userProjects.length === 0 ? (
            <div className="h-full flex justify-center items-center">
              <Default handleOpenModal={handleOpenModal} />
            </div>
          ) : (
            <ProjectList
              projects={userProjects}
              handleOpenModal={handleOpenModal}
            />
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
                value={projectName}
                onChange={(e) => setprojectName(e.target.value)}
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
              <Button className={"py-2"} onClick={createProject}>Create</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Home;
