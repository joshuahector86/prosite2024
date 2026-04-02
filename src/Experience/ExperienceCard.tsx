import { ExperienceInfo } from "./info";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-10 w-full px-2">
      {ExperienceInfo.experience.experiences.map((exp, i) => (
        <div
          key={i}
          className="group border-l-2 border-zinc-700 hover:border-[#ff2600] pl-6 transition-colors duration-300"
        >
          <h3 className="text-lg sm:text-xl font-semibold leading-snug group-hover:text-white transition-colors duration-200">
            {exp.position}
          </h3>
          <p className="text-xs sm:text-sm text-[#3483C9] uppercase tracking-widest mt-1 font-medium">
            {exp.timePeriod}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;