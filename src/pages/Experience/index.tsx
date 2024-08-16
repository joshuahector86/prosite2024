import Page from "@/components/layout/Page";
import CiscoExpCard from "./ExperienceTabs/CiscoExpCard";
import HowardExpCard from "./ExperienceTabs/HowardExpCard";
import AutodeskExpCard from "./ExperienceTabs/AutodeskExpCard";
const Experience = () => {
  return (
    <Page>
      <div className="flex flex-col items-center px-10 pb-10">
        <CiscoExpCard />
        <HowardExpCard />
        <AutodeskExpCard />
      </div>
    </Page>
  );
};

export default Experience;
