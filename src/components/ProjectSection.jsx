import { projectDesc } from "../data/projectsDesc";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-[#11071F] to-[#140028] py-16 px-4 sm:px-6 md:px-10"
      id="projects"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-10 sm:mb-12 text-center md:text-left">
        Featured Projects
      </h2>
      <div className="relative flex flex-col gap-12">
        {projectDesc.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
