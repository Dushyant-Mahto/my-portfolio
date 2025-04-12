const ProjectCard = ({ project, reverse }) => {
  const overlapStyle = {
    transform: reverse ? "translate(50px, -20px)" : "translate(-50px, -20px)",
  };
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-center mb-16 relative z-10`}
    >
      <div
        className={`rounded-full w-100 h-100 bg-purple-900 ${
          reverse ? "left-1" : "right-0.5"
        } blur-3xl absolute -z-10`}
      ></div>
      <div className="md:w-1/2 p-4">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-lg border border-gray-700 h-105 w-200 "
        />
      </div>
      <div
        className="md:w-1/2 p-6 bg-gradient-to-r from-[#2e0e58] to-[#1c0030] text-white rounded-xl shadow-xl relative z-20 backdrop-blur-md"
        style={overlapStyle}
      >
        <h4 className="text-sm text-violet-400 font-semibold mb-1">
          {project.subtitle}
        </h4>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-sm text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
