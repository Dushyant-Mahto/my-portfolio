import { skillIcons } from "../icons/db.js";

const SkillSections = () => {
  return (
    <div className="py-10 px-42">
      <h2 className="text-4xl font-mono text-purple-400 text-left mb-16 py-4 pl-10">
        My Stack...
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 justify-items-center">
        {skillIcons.map(({ icon, label }, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="w-18 h-18 flex items-center justify-center rounded-2xl shadow-xl shadow-[#763CAC] bg-[#271b37] text-indigo-600 text-2xl mb-8 transition-transform duration-300 group-hover:scale-110 hover:bg-violet-400">
              <img
                src={icon}
                alt={label}
                className="object-contain w-full h-full p-4"
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
