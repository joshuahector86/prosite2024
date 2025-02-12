import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Link } from "react-router-dom";
import { HowardExp } from "../info";
const HowardExpCard = () => {
  return (
    <Card className="border-none bg-transparent flex-col">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2 items-center">
          {HowardExp.position} @ {HowardExp.organizationName}
        </CardTitle>
        <CardDescription className="text-lg italic">
          FEBRUARY 2020 - MAY 2021
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-[1rem] ">
      <p>
        Designed and implemented robust cybersecurity measures, fortifying the university's digital 
        infrastructure against emerging threats. 
        Published research in IEEE journals, providing groundbreaking insights into cybersecurity 
        challenges and influencing industry best practices.
      </p>
        <Link
          target="_blank"
          className="underline hover:text-[#ff2600]"
          to="https://ieeexplore.ieee.org/document/9473818"
        >
          Published Work
        </Link>
      </CardContent>
    </Card>
  );
};

export default HowardExpCard;
