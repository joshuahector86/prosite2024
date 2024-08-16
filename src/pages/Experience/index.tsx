import Page from "@/components/layout/Page";
import CiscoExpCard from "./ExperienceTabs/CiscoExpCard";
import HowardExpCard from "./ExperienceTabs/HowardExpCard";
const Experience = () => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <CiscoExpCard />
        <HowardExpCard />
      </div>
    </Page>
  );
};

export default Experience;
