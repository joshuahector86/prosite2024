import Page from "@/components/layout/Page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CiscoExpCard from "./ExperienceTabs/CiscoExpCard";
import HowardExpCard from "./ExperienceTabs/HowardExpCard";
import ProfessionalProjects from "./ExperienceTabs/ProfessionalProjects";
const Experience = () => {
  return (
    <Page>
      <Tabs
        defaultValue="cisco"
        className="w-full h-full bg-zinc-900 rounded-[24px] "
      >
        {/* TRIGGERS FOR THE TABS */}
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="text-2xl" value="projects">
            Professional Projects
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="cisco">
            Cisco Systems
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="howard/autodesk">
            Howard/Autodesk
          </TabsTrigger>
        </TabsList>
        {/* CISCO SYSTEMS */}
        <TabsContent value="cisco">
          <CiscoExpCard />
        </TabsContent>
        {/* HOWARD & AUTODESK */}
        <TabsContent value="howard/autodesk">
          <HowardExpCard />
        </TabsContent>
        {/* PROFESSIONAL PROJECTS */}
        <TabsContent value="projects">
          <ProfessionalProjects />
        </TabsContent>
      </Tabs>
    </Page>
  );
};

export default Experience;
