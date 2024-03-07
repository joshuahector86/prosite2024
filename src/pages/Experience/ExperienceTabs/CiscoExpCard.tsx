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
          <h3 className="font-semibold text-2xl p-2">Architectural Planning</h3>
          <p>{CiscoExp.bullet16}</p>
          <p>{CiscoExp.bullet17}</p>
        </div>
        <img src={ciscoLogo} alt="ciscoLogo" className="w-[15%] h-[15%]" />
      </CardContent>
    </Card>
  );
};

export default CiscoExpCard;
