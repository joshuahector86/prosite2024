import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ExperienceInfo } from "./info";

const ExperienceCard = () => {
  return (
    <>
      {ExperienceInfo.experience.experiences.map((exp) => (
        <Card className="border-none bg-transparent">
          <CardHeader className="flex items-center">
            <CardTitle className="flex gap-2 text-3xl">
              {exp.position}
            </CardTitle>
            <CardDescription className="text-lg italic ">
              {exp.timePeriod}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-10">
            <p className="text-lg">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ExperienceCard;
