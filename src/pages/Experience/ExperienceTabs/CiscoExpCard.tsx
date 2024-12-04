import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CiscoExp } from "../info";
import { ciscoLogo } from "@/assets";

const CiscoExpCard = () => {
  return (
    <Card className="sm:w-[75%] border-none bg-transparent">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2">
          {CiscoExp.position} <img className="w-10 h-10" src={ciscoLogo} />
        </CardTitle>
        <CardDescription className="text-lg italic">
          JULY 19, 2021 - PRESENT
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <LeadUIEngBlock />
        <SoftwareToolsDev />
        <VersatileRoles />
        <ArchitectualPlanning />
      </CardContent>
    </Card>
  );
};

const LeadUIEngBlock = () => {
  return (
    <Card className="p-10 rounded-[24px] bg-neutral-900 border-none sm:w-[75%] overflow-auto">
      <CardContent className="flex flex-col gap-2 text-[1rem]">
        <h1 className="text-[1.5rem]">Lead UI Engineer</h1>
        <p>{CiscoExp.bullet1}</p>
        <p>{CiscoExp.bullet2}</p>
        <p>{CiscoExp.bullet3}</p>
        <p>{CiscoExp.bullet4}</p>
        <p>{CiscoExp.bullet5}</p>
        <p>{CiscoExp.bullet6}</p>
        <p>{CiscoExp.bullet7}</p>
      </CardContent>
    </Card>
  );
};
const SoftwareToolsDev = () => {
  return (
    <Card className="p-10 rounded-[24px]  bg-neutral-900 border-none sm:w-[75%] overflow-auto ">
      <CardContent className="flex flex-col gap-2 text-[1rem]">
        <h1 className="text-[1.5rem]">Software Tool Development</h1>
        <p>{CiscoExp.bullet8}</p>
        <p>{CiscoExp.bullet9}</p>
        <p>{CiscoExp.bullet10}</p>
        <p>{CiscoExp.bullet11}</p>
      </CardContent>
    </Card>
  );
};
const VersatileRoles = () => {
  return (
    <Card className="p-10 rounded-[24px] bg-neutral-900 border-none sm:w-[75%] overflow-auto ">
      <CardContent className="flex flex-col gap-2 text-[1rem]">
        <h1 className="text-[1.5rem]">Versatile Roles</h1>
        <p>{CiscoExp.bullet12}</p>
        <p>{CiscoExp.bullet13}</p>
        <p>{CiscoExp.bullet14}</p>
        <p>{CiscoExp.bullet15}</p>
      </CardContent>
    </Card>
  );
};
const ArchitectualPlanning = () => {
  return (
    <Card className="p-10 rounded-[24px] bg-neutral-900 border-none sm:w-[75%]  overflow-auto ">
      <CardContent className="flex flex-col gap-2 text-[1rem]">
        <h1 className="text-[1.5rem]">Architecural Planning</h1>
        <p>{CiscoExp.bullet16}</p>
        <p>{CiscoExp.bullet17}</p>
      </CardContent>
    </Card>
  );
};

export default CiscoExpCard;
