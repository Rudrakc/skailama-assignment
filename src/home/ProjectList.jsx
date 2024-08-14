import React from "react";
import CreateProjectButton from "./CreateProjectButton";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="px-16">
      <div className="flex justify-between items-center  mt-12 ">
        <div className="text-4xl font-bold text-purple-600 text-left">
          Projects
        </div>
        <CreateProjectButton />
      </div>
      <div className="mt-10">
        <ProjectCard title="Project 1" episodes={5} lastedited="a week ago" />
      </div>
    </div>
  );
}

export default ProjectList;
