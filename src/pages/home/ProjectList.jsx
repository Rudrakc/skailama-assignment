import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateProjectButton from "./CreateProjectButton";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

function ProjectList({ projects, handleOpenModal }) {
  const [projectDetails, setProjectDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Fetch details for each project ID
        const projectDetailsArray = await Promise.all(
          projects.map(async (projectId) => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/project/${projectId}`);
            return response.data;
          })
        );
        setProjectDetails(projectDetailsArray);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    if (projects && projects.length > 0) {
      fetchProjectDetails();
    }
  }, [projects]);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="px-16">
      <div className="flex justify-between items-center mt-16">
        <div className="text-4xl font-bold text-purple-600 text-left">
          Projects
        </div>
        <CreateProjectButton onClick={handleOpenModal} />
      </div>
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {projectDetails.map((project) => (
          <ProjectCard
            key={project._id} 
            title={project.name}
            episodes={project.episodes.length}
            lastedited={project.lastUpdateDate}
            onClick={() => handleProjectClick(project._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
