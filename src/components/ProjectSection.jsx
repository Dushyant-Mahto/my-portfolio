import { projectDesc } from "../data/projectsDesc";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-[#11071F] to-[#140028] py-20 px-6"
      id="projects"
    >
      <h2 className="text-left text-3xl font-bold text-white mb-12">
        Featured Projects
      </h2>
      <div className="relative">
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
