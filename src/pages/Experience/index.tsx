import Page from "@/components/layout/Page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CiscoExpCard from "./ExperienceTabs/CiscoExpCard";
import HowardExpCard from "./ExperienceTabs/HowardExpCard";
const Experience = () => {
  return (
    <Page>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="cisco" className="w-[85%] h-full  rounded-[24px] ">
          {/* TRIGGERS FOR THE TABS */}
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger
              className="md:text-2xl rounded-[24px] hover:bg-zinc-600 text-sm"
              value="cisco"
            >
              Cisco Systems
            </TabsTrigger>
            <TabsTrigger
              className="text-sm md:text-2xl rounded-[24px] hover:bg-zinc-600"
              value="howard/autodesk"
            >
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
        </Tabs>
      </div>
    </Page>
  );
};

export default Experience;
