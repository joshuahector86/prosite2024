import CiscoExpCard from "./ExperienceTabs/CiscoExpCard";
import HowardExpCard from "./ExperienceTabs/HowardExpCard";
import AutodeskExpCard from "./ExperienceTabs/AutodeskExpCard";
const Experience = () => {
  return (
    
      <div className="flex flex-col items-center pb-10">
        <CiscoExpCard />
        <HowardExpCard />
        <AutodeskExpCard />
      </div>
  
  );
};

export default Experience;
