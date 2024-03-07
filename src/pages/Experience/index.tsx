import Page from "@/components/layout/Page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiscoExp, AutoHowardExp } from "./info";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ciscoLogo, howardLogo, autodeskLogo } from "@/assets";
const Experience = () => {
  return (
    <Page>
      <Tabs
        defaultValue="cisco"
        className="w-full h-full bg-zinc-800 rounded-lg "
      >
        {/* TRIGGERS FOR THE TABS */}
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="text-2xl" value="projects">
            Professional Projects
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="cisco">
            {CiscoExp.ogranizationName}
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="howard/autodesk">
            Howard/Autodesk
          </TabsTrigger>
        </TabsList>
        {/* CISCO SYSTEMS TAB CONTENT */}
        <TabsContent value="cisco">
          <Card className="border-none">
            <CardHeader className="flex items-center">
              <CardTitle>{CiscoExp.position}</CardTitle>
              <CardDescription>
                Details about my experiences being a software engineer at Cisco
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 gap-4 flex items-center justify-center text-xl">
              <div>
                <h3 className="font-semibold text-2xl p-2">Lead UI Engineer</h3>
                <p>{CiscoExp.bullet1}</p>
                <p>{CiscoExp.bullet2}</p>
                <p>{CiscoExp.bullet3}</p>
                <p>{CiscoExp.bullet4}</p>
                <p>{CiscoExp.bullet5}</p>
                <p>{CiscoExp.bullet6}</p>
                <p>{CiscoExp.bullet7}</p>
                <h3 className="font-semibold text-2xl p-2">
                  Software Tools Development
                </h3>
                <p>{CiscoExp.bullet8}</p>
                <p>{CiscoExp.bullet9}</p>
                <p>{CiscoExp.bullet10}</p>
                <p>{CiscoExp.bullet11}</p>
                <h3 className="font-semibold text-2xl p-2">Versatile Roles</h3>
                <p>{CiscoExp.bullet12}</p>
                <p>{CiscoExp.bullet13}</p>
                <p>{CiscoExp.bullet14}</p>
                <p>{CiscoExp.bullet15}</p>
                <h3 className="font-semibold text-2xl p-2">
                  Architectural Planning
                </h3>
                <p>{CiscoExp.bullet16}</p>
                <p>{CiscoExp.bullet17}</p>
              </div>
              <img
                src={ciscoLogo}
                alt="ciscoLogo"
                className="w-[15%] h-[15%]"
              />
            </CardContent>
          </Card>
        </TabsContent>
        {/* HOWARD & AUTODESK TAB CONTENT */}
        <TabsContent value="howard/autodesk">
          <Card className="border-none">
            <CardHeader className="flex items-center">
              <CardTitle>
                {AutoHowardExp.position} @ {AutoHowardExp.position}
              </CardTitle>
              <CardDescription>
                Some details about my experience as an engineer working amonst
                both organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-center flex items-center space-y-2 text-xl">
              <div>
                <h3 className="font-semibold text-2xl p-2">
                  Published Research
                </h3>
                <p>{AutoHowardExp.bullet1}</p>
                <h3 className="font-semibold text-2xl p-2">
                  Simulation Design
                </h3>
                <p>{AutoHowardExp.bullet2}</p>
                <h3 className="font-semibold text-2xl p-2">
                  Security Engineering
                </h3>
                <p>{AutoHowardExp.bullet3}</p>
                <p>{AutoHowardExp.bullet4}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={autodeskLogo} className="w-[70%]" alt="howard" />
                <img src={howardLogo} className="w-[50%]" alt="autodesk" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center"></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Page>
  );
};

export default Experience;
