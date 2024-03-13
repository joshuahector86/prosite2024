import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AutoHowardExp } from "../info";
import { howardLogo, autodeskLogo } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
const HowardExpCard = () => {
  return (
    <Card className="border-none flex items-center flex-col">
      <CardHeader className="flex items-center">
        <CardTitle>
          {AutoHowardExp.position} @ {AutoHowardExp.organizationName}
        </CardTitle>
        <CardDescription className="text-lg italic">
          FEBRUARY 2020 - MAY 2021
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-xl  ">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Published Research</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p className="mb-2">{AutoHowardExp.bullet1}</p>
              <Link
                target="_blank"
                to="https://ieeexplore.ieee.org/document/9473818"
                className="p-3 underline hover:text-purple-800"
              >
                Published Paper
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Simulation Design</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{AutoHowardExp.bullet2}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Secuirty Engineering</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{AutoHowardExp.bullet3}</p>
              <p>{AutoHowardExp.bullet4}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center items-center mt-10 gap-10 max-w-[1000px]">
          <img src={autodeskLogo} className="w-[8%] h-[8%]" alt="howard" />
          <p className="font-bold text-4xl">&</p>
          <img src={howardLogo} className="w-[25%]" alt="autodesk" />
        </div>
      </CardContent>
    </Card>
  );
};

export default HowardExpCard;
