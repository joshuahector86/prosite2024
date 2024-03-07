import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AutoHowardExp } from "../info";
import { howardLogo, autodeskLogo } from "@/assets";
const HowardExpCard = () => {
  return (
    <Card className="border-none">
      <CardHeader className="flex  items-center">
        <CardTitle>
          {AutoHowardExp.position} @ {AutoHowardExp.position}
        </CardTitle>
        <CardDescription>
          Some details about my experience as an engineer working amonst both
          organizations
        </CardDescription>
      </CardHeader>
      <CardContent className="justify-center flex flex-col items-center space-y-2 text-xl">
        <div>
          <h3 className="font-semibold text-2xl p-2">Published Research</h3>
          <p>{AutoHowardExp.bullet1}</p>
          <h3 className="font-semibold text-2xl p-2">Simulation Design</h3>
          <p>{AutoHowardExp.bullet2}</p>
          <h3 className="font-semibold text-2xl p-2">Security Engineering</h3>
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
  );
};

export default HowardExpCard;
