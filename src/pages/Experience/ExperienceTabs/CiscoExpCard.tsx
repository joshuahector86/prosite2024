import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CiscoExp } from "../info";

const CiscoExpCard = () => {
  return (
    <Card className="border-none bg-transparent">
      <CardHeader className="flex items-center">
        <CardTitle className="flex gap-2">
          {CiscoExp.position} 
        </CardTitle>
        <CardDescription className="text-lg italic">
          JULY 19, 2021 - PRESENT
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-10">
        <p>

          Designed and built scalable, performance-optimized applications using React, 
          TypeScript, Python, and AWS, ensuring seamless operation of mission-critical systems for 
          internal operations, and boosting developer productivity. 

          Delivered end-to-end solutions, including UX design, frontend implementation, 
          API development, and backend microservices, adhering to best practices for clean 
          code and modular architecture. 

          Collaborated with cross-functional teams, potential customers, and product owners 
          to design and implement scalable solutions that met project requirements, ensured 
          user-friendly experiences, and met high testing standards. 

          Refactored large-scale codebases, reducing complexity and improving maintainability, 
          resulting in 40% faster build times. 

          Developed reusable component libraries, reducing development time for new features by 25%. 

          Collaborated with product teams to define and validate technical approaches, 
          contributing to scalable and performant commercial software products.
          
        </p>
      </CardContent>
    </Card>
  );
};


export default CiscoExpCard;
