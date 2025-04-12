import { skillIcons } from "../data/icons.js";

const SkillSections = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-mono text-purple-400 text-center md:text-left mb-10 md:mb-16">
        My Stack...
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 justify-items-center">
        {skillIcons.map(({ icon, label }, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="w-16 h-16 md:w-18 md:h-18 flex items-center justify-center rounded-2xl shadow-xl shadow-[#763CAC] bg-[#271b37] text-indigo-600 text-2xl mb-4 md:mb-8 transition-transform duration-300 group-hover:scale-110 hover:bg-violet-400">
              <img
                src={icon}
                alt={label}
                className="object-contain w-full h-full p-3"
              />
            </div>
            {/* <span className="text-xs mt-2 text-gray-500">{label}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSections;
