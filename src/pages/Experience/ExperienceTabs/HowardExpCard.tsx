import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { howardLogo } from "@/assets";

import { Link } from "react-router-dom";
import { HowardExp } from "../info";
const HowardExpCard = () => {
  return (
    <Card className=" border-none bg-transparent  flex items-center flex-col">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2 items-center">
          {HowardExp.position} @ {HowardExp.organizationName}
          <img src={howardLogo} alt="" className="w-[7rem]" />
        </CardTitle>
        <CardDescription className="text-lg italic">
          FEBRUARY 2020 - MAY 2021
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[75%] p-10 flex flex-col gap-2 text-[1rem] bg-neutral-900 rounded-[24px]">
        <h1 className="text-[1.5rem]"> {HowardExp.position}</h1>
        <p>{HowardExp.bullet1}</p>
        <p className="">{HowardExp.bullet2}</p>
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
