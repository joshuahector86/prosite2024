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
    <Card className="border-none bg-transparent flex items-center flex-col">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2 items-center">
          {AutodeskExp.position} @ {AutodeskExp.organizationName}
          <img src={autodeskLogo} alt="" className="w-10" />
        </CardTitle>
        <CardDescription className="text-lg italic">
          FEBRUARY 2020 - MAY 2021
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col gap-2 text-[1rem] ">
        <p>
          Engineered software solutions for advanced robotics platforms, focusing on scalability, 
          performance, and ease of simulation testing for real-world deployments. 

          Partnered with cross-disciplinary teams to implement secure and innovative designs, 
          pioneering advancements in robotic system security and vulnerability mitigation. 

          Contributed to simulations that improved the testing and deployment lifecycle, 
          ensuring the precision of robotics in complex environments.
        </p>
      </CardContent>
    </Card>
  );
};

export default AutodeskExpCard;
