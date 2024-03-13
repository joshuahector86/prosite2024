import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CiscoExp } from "../info";
import { ciscoLogo } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CiscoExpCard = () => {
  return (
    <Card className="border-none flex items-center flex-col ">
      <CardHeader className="flex items-center">
        <CardTitle>{CiscoExp.position}</CardTitle>
        <CardDescription className="text-lg italic">
          JULY 19, 2021 - PRESENT
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-xl ">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Lead UI Engineer</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{CiscoExp.bullet1}</p>
              <p>{CiscoExp.bullet2}</p>
              <p>{CiscoExp.bullet3}</p>
              <p>{CiscoExp.bullet4}</p>
              <p>{CiscoExp.bullet5}</p>
              <p>{CiscoExp.bullet6}</p>
              <p>{CiscoExp.bullet7}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-start">
              {" "}
              Software Tools Development
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{CiscoExp.bullet8}</p>
              <p>{CiscoExp.bullet9}</p>
              <p>{CiscoExp.bullet10}</p>
              <p>{CiscoExp.bullet11}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> Versatile Roles</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{CiscoExp.bullet12}</p>
              <p>{CiscoExp.bullet13}</p>
              <p>{CiscoExp.bullet14}</p>
              <p>{CiscoExp.bullet15}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger> Architectual Planning</AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{CiscoExp.bullet16}</p>
              <p>{CiscoExp.bullet17}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center mt-10 max-w-[1000px]">
          <img src={ciscoLogo} alt="ciscoLogo" className="w-[18%]" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CiscoExpCard;
