import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AutodeskExp } from "../info";
import { autodeskLogo } from "@/assets";

const AutodeskExpCard = () => {
  return (
    <Card className="border-none bg-transparent  flex items-center flex-col">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2 items-center">
          {AutodeskExp.position} @ {AutodeskExp.organizationName}
          <img src={autodeskLogo} alt="" className="w-10" />
        </CardTitle>
        <CardDescription className="text-lg italic">
          FEBRUARY 2020 - MAY 2021
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[75%] p-10 flex flex-col gap-2 text-[1rem] bg-neutral-900 rounded-[24px]">
        <h1 className="text-[1.5rem]"> {AutodeskExp.position}</h1>
        <p>{AutodeskExp.bullet1}</p>
        <p>{AutodeskExp.bullet2}</p>
        <p>{AutodeskExp.bullet3}</p>
      </CardContent>
    </Card>
  );
};

export default AutodeskExpCard;
